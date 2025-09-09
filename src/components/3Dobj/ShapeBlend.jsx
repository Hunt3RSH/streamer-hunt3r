import Spline from '@splinetool/react-spline';

const isPrerender = () => {
  try {
    if (typeof window !== 'undefined') {
      if (window.ReactSnap || window.__react_snap__ || typeof window.snapSaveState === 'function') return true;
    }
    if (typeof navigator !== 'undefined' && typeof navigator.userAgent === 'string') {
      if (navigator.userAgent.indexOf('ReactSnap') !== -1) return true;
    }
  } catch (_) {}
  return false;
};

export default function ShapeBlend() {
  if (isPrerender()) return null;
  return (
    <div className="hidden lg:flex absolute top-0 w-full h-full -z-10 ">
      <Spline scene="https://prod.spline.design/XGYaia35M4w8R16o/scene.splinecode" />
    </div>
  );
}
