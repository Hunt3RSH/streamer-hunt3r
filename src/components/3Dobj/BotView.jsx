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

export default function App() {
  if (isPrerender()) return null;
  return (
    <div className="hidden lg:flex fixed top-0 right-0 w-screen z-10">
      <Spline scene="https://prod.spline.design/NL-Z-2Esb7nKXa91/scene.splinecode" />
    </div>
  );
}
