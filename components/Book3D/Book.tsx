'use client';

import { useCursor, useTexture } from "@react-three/drei";
import { ThreeElements, useFrame } from "@react-three/fiber";
import { useAtom } from "jotai";
import { easing } from "maath";
import { useEffect, useMemo, useRef, useState } from "react";

// Cloudflare R2 URL
const R2_URL = process.env.NEXT_PUBLIC_R2_URL || '/textures';
import {
  Bone,
  BoxGeometry,
  Color,
  Float32BufferAttribute,
  MathUtils,
  MeshStandardMaterial,
  Skeleton,
  SkinnedMesh,
  SRGBColorSpace,
  Uint16BufferAttribute,
  Vector3,
  Group,
} from "three";
import { pageAtom, pages, zoomedAtom } from "./UI";

const isSpecial = (name: string) => name === "book-cover" || name === "book-back";

const easingFactor = 0.5;
const easingFactorFold = 0.3;
const insideCurveStrength = 0.18;
const outsideCurveStrength = 0.05;
const turningCurveStrength = 0.09;

const PAGE_WIDTH = 1.28;
const PAGE_HEIGHT = 1.71;
const PAGE_DEPTH = 0.003;
const PAGE_SEGMENTS = 30;
const SEGMENT_WIDTH = PAGE_WIDTH / PAGE_SEGMENTS;

const pageGeometry = new BoxGeometry(
  PAGE_WIDTH,
  PAGE_HEIGHT,
  PAGE_DEPTH,
  PAGE_SEGMENTS,
  2
);

pageGeometry.translate(PAGE_WIDTH / 2, 0, 0);

const position = pageGeometry.attributes.position;
const vertex = new Vector3();
const skinIndexes: number[] = [];
const skinWeights: number[] = [];

for (let i = 0; i < position.count; i++) {
  vertex.fromBufferAttribute(position, i);
  const x = vertex.x;

  const skinIndex = Math.max(0, Math.floor(x / SEGMENT_WIDTH));
  const skinWeight = (x % SEGMENT_WIDTH) / SEGMENT_WIDTH;

  skinIndexes.push(skinIndex, skinIndex + 1, 0, 0);
  skinWeights.push(1 - skinWeight, skinWeight, 0, 0);
}

pageGeometry.setAttribute(
  "skinIndex",
  new Uint16BufferAttribute(skinIndexes, 4)
);
pageGeometry.setAttribute(
  "skinWeight",
  new Float32BufferAttribute(skinWeights, 4)
);

const whiteColor = new Color("white");

const pageMaterials = [
  new MeshStandardMaterial({ color: whiteColor }),
  new MeshStandardMaterial({ color: "#111" }),
  new MeshStandardMaterial({ color: whiteColor }),
  new MeshStandardMaterial({ color: whiteColor }),
];

type PageProps = {
  number: number;
  front: string;
  back: string;
  page: number;
  opened: boolean;
  bookClosed: boolean;
} & ThreeElements["group"];

const Page = ({ number, front, back, page, opened, bookClosed, ...props }: PageProps) => {
  const [frontUrl, setFrontUrl] = useState<string | undefined>(
    isSpecial(front) ? `${R2_URL}/${front}.webp` : undefined
  );
  const [backUrl, setBackUrl] = useState<string | undefined>(
    isSpecial(back) ? `${R2_URL}/${back}.webp` : undefined
  );

  useEffect(() => {
    let cancelled = false;
    if (isSpecial(front)) return;
    // WebP öncelikli, fallback olarak PNG/JPG
    const exts = ["webp", "png", "jpg", "jpeg", "WEBP", "PNG", "JPG", "JPEG"] as const;
    let idx = 0;
    const probe = () => {
      if (cancelled || idx >= exts.length) return;
      const url = `${R2_URL}/${front}.${exts[idx]}`;
      const img = new Image();
      img.onload = () => {
        if (!cancelled) setFrontUrl(url);
      };
      img.onerror = () => {
        idx++;
        probe();
      };
      img.src = url;
    };
    probe();
    return () => {
      cancelled = true;
    };
  }, [front, setFrontUrl]);

  useEffect(() => {
    let cancelled = false;
    if (isSpecial(back)) return;
    // WebP öncelikli, fallback olarak PNG/JPG
    const exts = ["webp", "png", "jpg", "jpeg", "WEBP", "PNG", "JPG", "JPEG"] as const;
    let idx = 0;
    const probe = () => {
      if (cancelled || idx >= exts.length) return;
      const url = `${R2_URL}/${back}.${exts[idx]}`;
      const img = new Image();
      img.onload = () => {
        if (!cancelled) setBackUrl(url);
      };
      img.onerror = () => {
        idx++;
        probe();
      };
      img.src = url;
    };
    probe();
    return () => {
      cancelled = true;
    };
  }, [back, setBackUrl]);

  const ready = (isSpecial(front) || !!frontUrl) && (isSpecial(back) || !!backUrl);

  // Roughness map şimdilik devre dışı (dosya yok)
  const hasRoughness = false;

  const urls = ready
    ? [
        isSpecial(front) ? `${R2_URL}/${front}.webp` : frontUrl!,
        isSpecial(back) ? `${R2_URL}/${back}.webp` : backUrl!,
      ]
    : [
        `${R2_URL}/book-cover.webp`,
        `${R2_URL}/book-back.webp`,
      ];
  // Roughness map devre dışı
  
  const textures = useTexture(urls, (loadedTextures) => {
    // Texture yüklenince optimize et
    loadedTextures.forEach((texture: THREE.Texture) => {
      texture.anisotropy = 16;
      texture.generateMipmaps = true;
      texture.colorSpace = SRGBColorSpace;
    });
  }) as THREE.Texture[];
  const picture = textures[0];
  const picture2 = textures[1];
  const pictureRoughness = textures[2];
  
  // Texture kalitesini artır
  picture.colorSpace = picture2.colorSpace = SRGBColorSpace;
  picture.anisotropy = 16; // Maximum anisotropic filtering
  picture2.anisotropy = 16;
  picture.generateMipmaps = true;
  picture2.generateMipmaps = true;
  if (pictureRoughness) {
    pictureRoughness.anisotropy = 16;
    pictureRoughness.generateMipmaps = true;
  }
  const group = useRef<Group | null>(null);
  const turnedAt = useRef(Date.now());
  const lastOpened = useRef(opened);

  const skinnedMeshRef = useRef<SkinnedMesh | null>(null);

  const manualSkinnedMesh = useMemo(() => {
    const bones: Bone[] = [];
    for (let i = 0; i <= PAGE_SEGMENTS; i++) {
      const bone = new Bone();
      bones.push(bone);
      if (i === 0) {
        bone.position.x = 0;
      } else {
        bone.position.x = SEGMENT_WIDTH;
      }
      if (i > 0) {
        bones[i - 1].add(bone);
      }
    }
    const skeleton = new Skeleton(bones);

    const materials = [
      ...pageMaterials,
      new MeshStandardMaterial({
        color: whiteColor,
        map: picture,
        roughness: 0.8,
        metalness: 0,
      }),
      new MeshStandardMaterial({
        color: whiteColor,
        map: picture2,
        roughness: 0.8,
        metalness: 0,
      }),
    ];
    const mesh = new SkinnedMesh(pageGeometry, materials);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.frustumCulled = false;
    mesh.name = `page-${number}`;
    mesh.add(skeleton.bones[0]);
    mesh.bind(skeleton);
    return mesh;
  }, [picture, picture2, number]);

  useEffect(() => {
    if (!skinnedMeshRef.current) return;
    const mats = skinnedMeshRef.current.material as MeshStandardMaterial[];
    if (mats[4]) {
      mats[4].map = picture;
      if (hasRoughness && number === 0) {
        mats[4].roughnessMap = pictureRoughness;
      } else {
        mats[4].roughnessMap = null;
      }
      mats[4].needsUpdate = true;
    }
    if (mats[5]) {
      mats[5].map = picture2;
      if (hasRoughness && number === pages.length - 1) {
        mats[5].roughnessMap = pictureRoughness;
      } else {
        mats[5].roughnessMap = null;
      }
      mats[5].needsUpdate = true;
    }
  }, [picture, picture2, pictureRoughness, hasRoughness, number]);

  useFrame((_, delta) => {
    if (!skinnedMeshRef.current || !group.current) return;

    if (lastOpened.current !== opened) {
      turnedAt.current = Date.now();
      lastOpened.current = opened;
    }
    
    const elapsed = Date.now() - turnedAt.current;
    let turningTime = Math.min(400, elapsed) / 400;
    turningTime = Math.sin(turningTime * Math.PI);

    let targetRotation = opened ? -Math.PI / 2 : Math.PI / 2;
    if (!bookClosed) {
      targetRotation += MathUtils.degToRad(number * 0.8);
    }

    const bones = skinnedMeshRef.current.skeleton.bones;
    for (let i = 0; i < bones.length; i++) {
      const target = i === 0 ? group.current : bones[i];
      if (!target) continue;

      const insideCurveIntensity = i < 8 ? Math.sin(i * 0.2 + 0.25) : 0;
      const outsideCurveIntensity = i >= 8 ? Math.cos(i * 0.3 + 0.09) : 0;
      const turningIntensity = Math.sin(i * Math.PI * (1 / bones.length)) * turningTime;
      let rotationAngle =
        insideCurveStrength * insideCurveIntensity * targetRotation -
        outsideCurveStrength * outsideCurveIntensity * targetRotation +
        turningCurveStrength * turningIntensity * targetRotation;
      let foldRotationAngle = MathUtils.degToRad(Math.sign(targetRotation) * 2);
      if (bookClosed) {
        if (i === 0) {
          rotationAngle = targetRotation;
          foldRotationAngle = 0;
        } else {
          rotationAngle = 0;
          foldRotationAngle = 0;
        }
      }
      easing.dampAngle(target.rotation, "y", rotationAngle, easingFactor, delta);

      const foldIntensity = i > 8 ? Math.sin(i * Math.PI * (1 / bones.length) - 0.5) * turningTime : 0;
      easing.dampAngle(
        target.rotation,
        "x",
        foldRotationAngle * foldIntensity,
        easingFactorFold,
        delta
      );
    }
  });

  const [, setPage] = useAtom(pageAtom);
  const [zoomed, setZoomed] = useAtom(zoomedAtom);
  const [highlighted, setHighlighted] = useState(false);
  useCursor(highlighted); // Her zaman cursor değişsin

  return (
    <group
      {...props}
      ref={group}
      onPointerEnter={(e: any) => {
        e.stopPropagation();
        setHighlighted(true);
      }}
      onPointerLeave={(e: any) => {
        e.stopPropagation();
        setHighlighted(false);
      }}
      onClick={(e: any) => {
        e.stopPropagation();
        
        // Eğer zoom yapılmamışsa, önce zoom yap
        if (!zoomed) {
          setZoomed(true);
        } else {
          // Zoom yapılmışsa sayfa çevir
          setPage(opened ? number : number + 1);
        }
        setHighlighted(false);
      }}
      onDoubleClick={(e: any) => {
        e.stopPropagation();
        // Çift tıklama ile uzaklaş
        if (zoomed) {
          setZoomed(false);
        }
      }}
    >
      <primitive object={manualSkinnedMesh} ref={skinnedMeshRef} position-z={-number * PAGE_DEPTH + page * PAGE_DEPTH} />
    </group>
  );
};

export const Book = ({ ...props }: ThreeElements["group"]) => {
  const [page] = useAtom(pageAtom);
  const [delayedPage, setDelayedPage] = useState(page);

  useEffect(() => {
    if (page === delayedPage) return;
    
    const diff = Math.abs(page - delayedPage);
    const delay = diff > 2 ? 50 : 150;
    
    const timeout = setTimeout(() => {
      setDelayedPage((prev) => {
        if (page === prev) return prev;
        if (page > prev) return prev + 1;
        if (page < prev) return prev - 1;
        return prev;
      });
    }, delay);
    
    return () => {
      clearTimeout(timeout);
    };
  }, [page, delayedPage]);

  return (
    <group {...props} rotation-y={-Math.PI / 2}>
      {[...pages].map((pageData, index) => (
        <Page
          key={index}
          page={delayedPage}
          number={index}
          opened={delayedPage > index}
          bookClosed={delayedPage === 0 || delayedPage === pages.length}
          {...pageData}
        />
      ))}
    </group>
  );
};
