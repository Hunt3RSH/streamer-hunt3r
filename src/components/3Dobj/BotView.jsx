import Spline from '@splinetool/react-spline';

const isPrerender = () =>
  typeof navigator !== 'undefined' && navigator.userAgent === 'ReactSnap';

export default function App() {
  if (isPrerender()) return null;
  return (
    <div className="hidden lg:flex fixed top-0 right-0 w-screen z-10">
      <Spline scene="https://prod.spline.design/NL-Z-2Esb7nKXa91/scene.splinecode" />
    </div>
  );
}
