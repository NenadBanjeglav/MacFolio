import React from "react";

import { WindowControlls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const ImageContent = ({ windowKey = "imgfile" }) => {
  const { windows } = useWindowStore();
  const data = windows?.[windowKey]?.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  if (!imageUrl) return null;

  return (
    <>
      <div className="window-header">
        <WindowControlls target={windowKey} />
        <p>{name || "Image"}</p>
      </div>

      <div className="preview">
        <img src={imageUrl} alt={name || "Image preview"} />
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(ImageContent, "imgfile");

const ImageStack = () => {
  const { windows } = useWindowStore();
  const imageKeys = Object.keys(windows).filter((key) =>
    key.startsWith("imgfile")
  );

  if (!imageKeys.length) return null;

  return (
    <>
      {imageKeys.map((key, index) => {
        const offset = index * 24;
        return (
          <ImageWindow
            key={key}
            windowKey={key}
            className="imgfile-window"
            style={{
              top: `calc(10rem + ${offset}px)`,
              left: `calc(16.6667% + ${offset}px)`,
            }}
          />
        );
      })}
    </>
  );
};

export default ImageStack;
