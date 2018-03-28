/**
 * Credits: https://www.phpied.com/this-page-loaded-in-x-seconds/
 */
module.exports = function () {
  if (!window) {
    throw new Error("Window object is not available.");
  }

  const t = window.performance && performance.timing;

  if (!t) {
    return;
  }

  const loadTime = (t.loadEventEnd - t.navigationStart);

  return loadTime / 1000;
};
