import clsx from "clsx";

import { locations, mobileLauncherApps } from "#constants";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";

const MobileHome = () => {
  const { openWindow } = useWindowStore();
  const { setActiveLocation } = useLocationStore();

  const openLauncherApp = (app) => {
    if (app.locationType) {
      setActiveLocation(locations[app.locationType]);
    }

    openWindow(app.windowKey, app.data ?? null);
  };

  return (
    <section id="mobile-home">
      <ul className="launcher-grid">
        {mobileLauncherApps.map((app) => (
          <li
            key={app.id}
            className={clsx("launcher-item", app.featured && "featured")}
          >
            <button type="button" onClick={() => openLauncherApp(app)}>
              <span className="icon-shell">
                <img src={app.icon} alt="" aria-hidden="true" />
              </span>
              <span className="app-label">{app.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MobileHome;
