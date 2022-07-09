export const isIPadDevice = (): boolean => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return (
    userAgent.indexOf("ipad") > -1 ||
    (userAgent.indexOf("macintosh") > -1 && "ontouchend" in document)
  );
};
