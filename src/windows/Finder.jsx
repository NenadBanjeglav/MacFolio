import { WindowControlls } from "#components";
import { locations } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import clsx from "clsx";
import { Search } from "lucide-react";
import React, { useLayoutEffect, useRef } from "react";
import { Draggable } from "gsap/Draggable";

const Finder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const contentRef = useRef(null);
  const itemRefs = useRef([]);

  const openItem = (item) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item);
    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank");

    openWindow(`${item.fileType}${item.kind}`, item);
  };

  useLayoutEffect(() => {
    const bounds = contentRef.current;
    if (!bounds) return;

    const instances = itemRefs.current.filter(Boolean).map(
      (el) =>
        Draggable.create(el, {
          type: "x,y",
          bounds,
          cursor: "pointer",
          activeCursor: "grabbing",
        })[0]
    );

    return () => {
      instances.forEach((instance) => instance.kill());
    };
  }, [activeLocation]);

  const renderList = (items) =>
    items.map((item) => (
      <li
        className={clsx(
          item.id === activeLocation.id ? "active" : "not-active"
        )}
        key={item.id}
        onClick={() => setActiveLocation(item)}
      >
        <img src={item.icon} className="w-4" alt={item.name} />
        <p className="text-sm font-medium truncate">{item.name}</p>
      </li>
    ));

  return (
    <>
      <div id="window-header">
        <WindowControlls target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          <div>
            <h3>Favourites</h3>
            <ul>{renderList(Object.values(locations))}</ul>
          </div>
          <div>
            <h3>Work</h3>
            <ul>{renderList(locations.work.children)}</ul>
          </div>
        </div>

        <ul className="content" ref={contentRef}>
          {activeLocation?.children.map((item, index) => (
            <li
              key={item.id}
              className={clsx(item.position, "cursor-pointer")}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              onClick={() => openItem(item)}
            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
