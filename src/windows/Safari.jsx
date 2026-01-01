import { WindowControlls } from "#components";
import { testimonialsGallery } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import React from "react";

const Safari = () => {
  const { openWindow } = useWindowStore();
  const hasTestimonials = testimonialsGallery?.length > 0;

  return (
    <>
      <div className="window-header">
        <WindowControlls target="safari" />
        <h2>Testimonials</h2>
      </div>

      <div className="testimonials">
        {hasTestimonials && (
          <ul className="files-grid">
            {testimonialsGallery.map(({ id, name, icon, imageUrl }) => (
              <li
                key={id}
                className="file-card"
                onClick={() =>
                  openWindow(`imgfile-testimonial-${id}`, {
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
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
