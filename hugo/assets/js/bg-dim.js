// Background Dim
// Fades the home page star field and nebula gradient as the visitor scrolls down.

(function () {
  const overlay = document.querySelector(".bg-dim");
  if (!overlay) return;

  let ticking = false;

  function updateDim() {
    // Ramp over the first viewport of scrolling, or the whole page when it is
    // shorter than a viewport, so short pages never jump straight to full dim.
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const range = Math.min(scrollable, window.innerHeight);
    if (range <= 0) return;

    const progress = Math.min(1, Math.max(0, window.scrollY / range));
    overlay.style.setProperty("--bg-dim-progress", progress.toFixed(3));
  }

  function requestUpdate() {
    if (ticking) return;
    window.requestAnimationFrame(function () {
      updateDim();
      ticking = false;
    });
    ticking = true;
  }

  window.addEventListener("scroll", requestUpdate);
  window.addEventListener("resize", requestUpdate);

  // Apply straight away for restored scroll positions
  updateDim();
})();
