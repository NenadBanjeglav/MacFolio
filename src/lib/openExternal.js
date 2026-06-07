export const openExternal = (href) => {
  if (!href) return;

  const openedWindow = window.open(href, "_blank", "noopener,noreferrer");

  if (openedWindow) {
    openedWindow.opener = null;
  }
};
