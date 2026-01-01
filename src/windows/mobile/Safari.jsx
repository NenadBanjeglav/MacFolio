import { testimonialsGallery } from "#constants";
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Copy,
  Mic,
  Search,
  Share,
} from "lucide-react";
import React from "react";
import MobileWindowWrapper from "#hoc/MobileWindowWrapper";
import MobileWindowHeader from "#components/mobile/WindowHeader";
import useWindowStore from "#store/window";

const MobileSafariContent = () => {
  const { openWindow } = useWindowStore();
  const hasTestimonials = testimonialsGallery?.length > 0;

  return (
    <>
      <MobileWindowHeader windowKey="safari" title="Testimonials" />

      <div className="testimonials">
        <div className="space-y-8">
          {hasTestimonials && (
            <ul className="files-grid">
              {testimonialsGallery.map(({ id, name, icon, imageUrl }) => (
                <li
                  key={id}
                  className="file-card"
                  onClick={() =>
                    openWindow("imgfile", {
                      id,
                      name,
                      title: name,
                      icon,
                      kind: "file",
                      fileType: "img",
                      imageUrl,
                    })
                  }
                >
                  <img src={icon} alt={name} />
                  <p>{name}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

const MobileSafari = MobileWindowWrapper(MobileSafariContent, "safari");

export default MobileSafari;
