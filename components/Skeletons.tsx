// Modern Skeleton Loading Components

export function HeroSkeleton() {
  return (
    <div className="hero-section animate-pulse">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 mb-6"></div>
            <div className="h-12 bg-gray-200 rounded w-32"></div>
          </div>
          <div className="col-lg-6">
            <div className="aspect-square bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Book3DSkeleton() {
  return (
    <div className="book-section py-5 animate-pulse">
      <div className="container">
        <div className="text-center mb-4">
          <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-3"></div>
          <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="relative" style={{ height: '600px' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-gray-300 border-t-orange-500 rounded-full animate-spin mx-auto mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-48 mx-auto"></div>
                  <div className="h-3 bg-gray-200 rounded w-64 mx-auto mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SectionSkeleton() {
  return (
    <div className="section py-5 animate-pulse">
      <div className="container">
        <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-96 mx-auto mb-8"></div>
        <div className="row">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="col-lg-3 col-md-6 mb-4">
              <div className="h-48 bg-gray-200 rounded-lg mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MapSkeleton() {
  return (
    <div className="map-section animate-pulse" style={{ height: '400px' }}>
      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mx-auto mb-3"></div>
          <div className="h-4 bg-gray-300 rounded w-32 mx-auto"></div>
        </div>
      </div>
    </div>
  );
}

export function FooterSkeleton() {
  return (
    <div className="footer-section py-5 bg-gray-100 animate-pulse">
      <div className="container">
        <div className="row">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="col-lg-3 col-md-6 mb-4">
              <div className="h-6 bg-gray-200 rounded w-32 mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
