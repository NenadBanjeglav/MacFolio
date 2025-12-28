import React from "react";

import { WindowControlls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows?.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  if (!imageUrl) return null;

  return (
    <>
      <div id="window-header">
        <WindowControlls target="imgfile" />
        <p>{name || "Image"}</p>
      </div>

      <div className="preview">
        <img src={imageUrl} alt={name || "Image preview"} />
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
