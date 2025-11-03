import '@react-three/fiber';

declare module '@react-three/fiber' {
  interface ThreeElements {
    group: any;
    mesh: any;
    skinnedMesh: any;
    primitive: any;
  }
}
