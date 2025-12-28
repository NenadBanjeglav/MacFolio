import { Download } from "lucide-react";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import WindowWrapper from "#hoc/WindowWrapper";
import WindowControlls from "#components/WindowControlls";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <>
      <div className="window-header">
        <WindowControlls target="resume" />
        <h2>Resume.pdf</h2>

        <a
          href="files/resume.pdf"
          download
          className="cursor-pointer"
          title="Download resume"
        >
          <Download className="icon cursor-pointer" />
        </a>
      </div>

      <Document
        className="resume-pdf"
        file="files/resume.pdf"
        onLoadSuccess={() => setIsLoading(false)}
        onLoadError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        loading={
          <div className="resume-loading">
            <div className="resume-sheet">
              <div className="resume-skeleton resume-skeleton-title" />
              <div className="resume-skeleton resume-skeleton-line" />
              <div className="resume-skeleton resume-skeleton-line" />
              <div className="resume-skeleton resume-skeleton-line short" />
              <div className="resume-skeleton resume-skeleton-block" />
              <div className="resume-skeleton resume-skeleton-line" />
              <div className="resume-skeleton resume-skeleton-line short" />
            </div>
            <p>Loading resume...</p>
          </div>
        }
        error={
          <div className="resume-loading">
            <div className="resume-sheet">
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
      >
        {!isLoading && !hasError ? (
          <Page pageNumber={1} renderTextLayer renderAnnotationLayer />
        ) : null}
      </Document>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
