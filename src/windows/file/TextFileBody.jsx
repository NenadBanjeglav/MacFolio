import clsx from "clsx";

import { locations } from "#constants";
import { openExternal } from "#lib/openExternal";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";

const variantClasses = {
  desktop: {
    root: "text-file-body text-file-body-desktop",
    image: "w-full max-h-72 object-cover rounded-lg",
    subtitle: "text-lg font-semibold text-gray-800",
    paragraph: "text-sm leading-relaxed text-gray-700",
    heading: "text-xs uppercase tracking-[0.12em] text-gray-400",
    actionList: "text-file-actions",
    actionButton: "text-file-action",
  },
  mobile: {
    root: "text-file-body text-file-body-mobile",
    image: "w-24 h-24 object-cover rounded-2xl",
    subtitle: "text-xl font-bold text-gray-900",
    paragraph: "text-sm leading-relaxed text-gray-700",
    heading: "text-xs uppercase tracking-[0.12em] text-gray-400",
    actionList: "text-file-actions",
    actionButton: "text-file-action",
  },
};

const TextFileBody = ({ data, variant = "desktop" }) => {
  const classes = variantClasses[variant] ?? variantClasses.desktop;
  const { openWindow, windows } = useWindowStore();
  const { setActiveLocation } = useLocationStore();

  if (!data) return null;

  const { name, image, subtitle, description, sections, actions } = data;

  const handleActionClick = (action) => {
    if (action.href) {
      openExternal(action.href);
      return;
    }

    const nextLocation = action.locationType
      ? locations[action.locationType]
      : null;

    if (nextLocation) {
      setActiveLocation(nextLocation);
    }

    if (!action.windowKey || !windows?.[action.windowKey]) {
      return;
    }

    openWindow(action.windowKey, action.data ?? null);
  };

  return (
    <div className={classes.root}>
      {image ? (
        <img
          src={image}
          alt={name || "Text file preview"}
          className={classes.image}
        />
      ) : null}

      {subtitle ? <h3 className={classes.subtitle}>{subtitle}</h3> : null}

      {Array.isArray(sections)
        ? sections.map((section) => {
            const body = Array.isArray(section.body) ? section.body : [];

            return (
              <section key={section.heading} className="text-file-section">
                <h4 className={classes.heading}>{section.heading}</h4>
                {body.map((paragraph) => (
                  <p key={paragraph} className={classes.paragraph}>
                    {paragraph}
                  </p>
                ))}
              </section>
            );
          })
        : null}

      {!Array.isArray(sections) && Array.isArray(description)
        ? description.map((paragraph) => (
            <p key={paragraph} className={classes.paragraph}>
              {paragraph}
            </p>
          ))
        : null}

      {Array.isArray(actions) && actions.length > 0 ? (
        <div className={classes.actionList}>
          {actions.map((action) => (
            <button
              key={action.label}
              type="button"
              className={clsx(classes.actionButton)}
              onClick={() => handleActionClick(action)}
            >
              {action.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default TextFileBody;
