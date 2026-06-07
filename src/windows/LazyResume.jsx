import { lazy, Suspense } from "react";

import WindowControlls from "#components/WindowControlls";
import useWindowStore from "#store/window";

const ResumeWindow = lazy(() => import("./Resume"));

const ResumeFallback = ({ zIndex }) => (
  <section id="resume" className="absolute" style={{ zIndex }}>
    <div className="window-header">
      <WindowControlls target="resume" />
      <h2>Resume.pdf</h2>
    </div>
    <div className="resume-pdf">
      <div className="resume-loading">
        <div className="resume-sheet">
          <div className="resume-skeleton resume-skeleton-title" />
          <div className="resume-skeleton resume-skeleton-line" />
          <div className="resume-skeleton resume-skeleton-line" />
          <div className="resume-skeleton resume-skeleton-line short" />
          <div className="resume-skeleton resume-skeleton-block" />
        </div>
        <p>Loading resume...</p>
      </div>
    </div>
  </section>
);

const LazyResume = () => {
  const {
    windows: {
      resume: { isOpen, zIndex },
    },
  } = useWindowStore();

  if (!isOpen) return null;

  return (
    <Suspense fallback={<ResumeFallback zIndex={zIndex} />}>
      <ResumeWindow />
    </Suspense>
  );
};

export default LazyResume;
