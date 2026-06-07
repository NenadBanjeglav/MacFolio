import { lazy, Suspense } from "react";

import MobileWindowHeader from "#components/mobile/WindowHeader";
import useWindowStore from "#store/window";

const MobileResumeWindow = lazy(() => import("./Resume"));

const MobileResumeFallback = ({ zIndex }) => (
  <section id="mobile-resume" style={{ zIndex }}>
    <MobileWindowHeader windowKey="resume" title="Resume" />
    <div className="resume-loading">
      <span className="resume-spinner" aria-hidden="true" />
    </div>
  </section>
);

const LazyMobileResume = () => {
  const {
    windows: {
      resume: { isOpen, zIndex },
    },
  } = useWindowStore();

  if (!isOpen) return null;

  return (
    <Suspense fallback={<MobileResumeFallback zIndex={zIndex} />}>
      <MobileResumeWindow />
    </Suspense>
  );
};

export default LazyMobileResume;
