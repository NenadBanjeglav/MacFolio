import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";

import useWindowStore from "#store/window";
import useLocationStore from "#store/location";
import { locations, startHereFile } from "#constants";

const projects = locations.work?.children ?? [];

const Home = () => {
  const { openWindow } = useWindowStore();
  const { setActiveLocation } = useLocationStore();

  const handleOpenProjectFinder = (project) => {
    setActiveLocation(project);
    openWindow("finder");
  };

  const handleOpenStartHere = () => {
    openWindow("txtfile", startHereFile);
  };

  const handleStartHereKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleOpenStartHere();
    }
  };

  useGSAP(() => {
    Draggable.create("#home .desktop-item", {
      cursor: "pointer",
      activeCursor: "grabbing",
    });
  }, []);

  return (
    <section id="home">
      <ul>
        <li
          className="group desktop-item start-here-cue cursor-pointer"
          onClick={handleOpenStartHere}
          onKeyDown={handleStartHereKeyDown}
          role="button"
          tabIndex={0}
        >
          <img src={startHereFile.icon} alt={`${startHereFile.name} file`} />
          <p>{startHereFile.name}</p>
        </li>

        {projects.map((project) => (
          <li
            key={project.id}
            className={clsx(
              "group desktop-item folder cursor-pointer",
              project.windowPosition,
            )}
            onClick={() => handleOpenProjectFinder(project)}
          >
            <img src="/images/folder.png" alt={`${project.name} folder`} />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
