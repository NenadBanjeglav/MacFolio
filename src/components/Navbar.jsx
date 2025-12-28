import { navIcons, navLinks } from "#constants";
import React from "react";
import useWindowStore from "#store/window";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { openWindow } = useWindowStore();
  const [now, setNow] = useState(() => dayjs());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(dayjs());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Nenad's Portfolio</p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id}>
              <p role="button" tabIndex={0} onClick={() => openWindow(type)}>
                {name}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={`icon-${id}`}>
              <img src={img} className="icon-hover" alt={`icon-${id}`} />
            </li>
          ))}
        </ul>
        <time>{now.format("ddd MMM D h:mm A")} </time>
      </div>
    </nav>
  );
};

export default Navbar;
