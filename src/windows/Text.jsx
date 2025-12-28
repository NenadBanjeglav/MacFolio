import React from "react";

import { WindowControlls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows?.txtfile?.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <>
      <div className="window-header">
        <WindowControlls target="txtfile" />
        <h2>{name || "Untitled.txt"}</h2>
      </div>

      <div className="p-6 space-y-4">
        {image ? (
          <img
            src={image}
            alt={name || "Text file preview"}
            className="w-full max-h-72 object-cover rounded-lg"
          />
        ) : null}

        {subtitle ? (
          <h3 className="text-lg font-semibold text-gray-800">{subtitle}</h3>
        ) : null}

        {Array.isArray(description)
          ? description.map((paragraph, index) => (
              <p key={`${name || "text"}-${index}`} className="text-sm">
                {paragraph}
              </p>
            ))
          : null}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
