import { Mail, Search } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

import WindowWrapper from "#hoc/WindowWrapper";

import { photosLinks } from "#constants";

import { WindowControlls } from "#components";

const Photos = () => {
  const [activeId, setActiveId] = useState(photosLinks[0]?.id ?? null);

  return (
    <>
      <div className="window-header">
        <WindowControlls target="photos" />

        <div className="w-full flex justify-end items-center gap-3 text-gray-500">
          <Mail className="icon" />
          <Search className="icon" />
        </div>
      </div>

      <div className="flex w-full">
        <div className="sidebar">
          <h2>Photos</h2>

          <ul>
            {photosLinks.map(({ id, icon, title }) => (
              <li
                key={id}
                className={clsx(
                  activeId === id ? "active" : "not-active"
                )}
                onClick={() => setActiveId(id)}
              >
                <img src={icon} alt={title} />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
