import React from "react";

import { WindowControlls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import TextFileBody from "./file/TextFileBody";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows?.txtfile?.data;

  if (!data) return null;

  const { name } = data;

  return (
    <>
      <div className="window-header">
        <WindowControlls target="txtfile" />
        <h2>{name || "Untitled.txt"}</h2>
      </div>

      <TextFileBody data={data} variant="desktop" />
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
