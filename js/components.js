// Web Components for Portfolio
// Modern, standards-based components for long-term stability

// Current Year Web Component
class CurrentYear extends HTMLElement {
  connectedCallback() {
    this.textContent = new Date().getFullYear();
  }
}

// Image Fullscreen - Simple JavaScript function
function initImageFullscreen() {
  let overlay = null;

  function getFullscreenUrl(originalUrl) {
    if (originalUrl.includes('res.cloudinary.com/jandu-top/image/upload/')) {
      return originalUrl.replace(
        /image\/upload\/[^\/]*\//,
        'image/upload/c_limit,w_1920,h_1080,q_90,f_auto/'
      );
    }
    return originalUrl;
  }

  function openFullscreen(img) {
    const imageSrc = img.getAttribute('data-src') || img.src;
    const fullscreenSrc = getFullscreenUrl(imageSrc);

    overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      cursor: pointer;
    `;

    const fullImg = document.createElement('img');
    fullImg.src = fullscreenSrc;
    fullImg.alt = img.alt;
    fullImg.style.cssText = `
      max-width: 90vw;
      max-height: 90vh;
      object-fit: contain;
    `;

    overlay.appendChild(fullImg);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', closeFullscreen);
    document.addEventListener('keydown', handleKeydown);
  }

  function closeFullscreen() {
    if (overlay) {
      document.body.removeChild(overlay);
      overlay = null;
      document.removeEventListener('keydown', handleKeydown);
    }
  }

  function handleKeydown(e) {
    if (e.key === 'Escape') {
      closeFullscreen();
    }
  }

  // Initialize when DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => openFullscreen(img));
    });
  });
}

// Register web components
customElements.define('current-year', CurrentYear);

// Initialize image fullscreen functionality
initImageFullscreen();