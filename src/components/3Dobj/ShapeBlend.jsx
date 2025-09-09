import Spline from '@splinetool/react-spline';

const isPrerender = () =>
  typeof navigator !== 'undefined' && navigator.userAgent === 'ReactSnap';

export default function ShapeBlend() {
  if (isPrerender()) return null;
  return (
    <div className="hidden lg:flex absolute top-0 w-full h-full -z-10 ">
      <Spline scene="https://prod.spline.design/XGYaia35M4w8R16o/scene.splinecode" />
    </div>
  );
}
