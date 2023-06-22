const openWindow = () => {
  const width = window.screen.width;
  const height = window.screen.height / 2;
  const windowSize = `width=${width},height=${height}`;
  return window.open("", "New window", windowSize);
};
