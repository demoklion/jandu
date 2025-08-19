// Web Components for Portfolio
// Modern, standards-based components for long-term stability

// Current Year Web Component
class CurrentYear extends HTMLElement {
  connectedCallback() {
    this.textContent = new Date().getFullYear();
  }
}

// Email Clipboard Web Component
class EmailClipboard extends HTMLElement {
  constructor() {
    super();
    this.email = this.getAttribute('email') || 'dugovicjan@gmail.com';
  }

  connectedCallback() {
    this.innerHTML = `
      <button type="button" class="btn btn-default btn-lg" id="copyButton" title="Copy address to clipboard">
        📧 ${this.email}
      </button>
    `;
    
    this.querySelector('#copyButton').addEventListener('click', () => this.copyEmail());
  }

  async copyEmail() {
    try {
      // Modern Clipboard API (preferred)
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(this.email);
        this.showSuccess();
      } else {
        // Fallback for older browsers
        this.fallbackCopy();
      }
    } catch (err) {
      console.error('Failed to copy email:', err);
      this.fallbackCopy();
    }
  }

  fallbackCopy() {
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = this.email;
    tempTextArea.style.position = 'fixed';
    tempTextArea.style.opacity = '0';
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    
    try {
      document.execCommand('copy');
      this.showSuccess();
    } catch (err) {
      console.error('Fallback copy failed:', err);
      alert('Copy failed. Email: ' + this.email);
    } finally {
      document.body.removeChild(tempTextArea);
    }
  }

  showSuccess() {
    alert('E–mail address copied to clipboard: ' + this.email);
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
customElements.define('email-clipboard', EmailClipboard);

// Deferred Styles Loader
function loadDeferredStyles() {
  const deferredStyles = document.getElementById('deferred-styles');
  if (!deferredStyles) return;
  
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = deferredStyles.textContent;
  document.body.appendChild(tempDiv);
  deferredStyles.parentElement.removeChild(deferredStyles);
}

// Image Lazy Loading
function initImageLazyLoading() {
  const images = document.getElementsByTagName('img');
  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    const dataSrc = img.getAttribute('data-src');
    if (dataSrc) {
      img.setAttribute('src', dataSrc);
    }
  }
}

// Initialize deferred styles
const raf = window.requestAnimationFrame || 
            window.mozRequestAnimationFrame || 
            window.webkitRequestAnimationFrame || 
            window.msRequestAnimationFrame;

if (raf) {
  raf(() => setTimeout(loadDeferredStyles, 0));
} else {
  window.addEventListener('load', loadDeferredStyles);
}

// Initialize on page load
window.addEventListener('load', initImageLazyLoading);

// Initialize image fullscreen functionality
initImageFullscreen();