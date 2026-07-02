import MobileWindowWrapper from "#hoc/MobileWindowWrapper";
import MobileWindowHeader from "#components/mobile/WindowHeader";
import { Document, Page, pdfjs } from "react-pdf";
import { useState, useRef, useLayoutEffect } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

const MobileResumeContent = () => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [numPages, setNumPages] = useState(0);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    // Initial width
    updateWidth();

    // Use ResizeObserver for better performance
    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <>
      <MobileWindowHeader windowKey="resume" title="Resume" />

      <div ref={containerRef} className="w-full">
        <Document
          className="resume-pdf"
          file="files/resume.pdf"
          onLoadSuccess={({ numPages }) => {
            setNumPages(numPages);
            setHasError(false);
          }}
          onLoadError={() => setHasError(true)}
          error={
            <div className="resume-loading">
              <div className="resume-mobile-error">
                <p className="resume-error-title">Unable to load Resume.pdf</p>
                <p className="resume-error-text">
                  Please try again or download the file directly.
                </p>
                <a href="files/resume.pdf" download className="resume-link">
                  Download Resume.pdf
                </a>
              </div>
            </div>
          }
          loading={
            <div className="resume-loading">
              <span className="resume-spinner" aria-hidden="true" />
            </div>
          }
          noData={null}
        >
          {!hasError ? (
            Array.from({ length: numPages }, (_, index) => (
              <Page
                key={`mobile-resume-page-${index + 1}`}
                pageNumber={index + 1}
                width={containerWidth || undefined}
                renderTextLayer
                renderAnnotationLayer
                loading={
                  <div className="resume-loading">
                    <span className="resume-spinner" aria-hidden="true" />
                  </div>
                }
              />
            ))
          ) : null}
        </Document>
      </div>
    </>
  );
};

const MobileResume = MobileWindowWrapper(MobileResumeContent, "resume");

export default MobileResume;
