/**
 * @fileoverview Web Components for Portfolio
 * Modern, standards-based components for long-term stability
 */

/**
 * Security utility functions
 */

/**
 * Validate URL for safe image loading
 * @param {string} url - URL to validate
 * @returns {boolean} True if URL is safe for image loading
 */
function isValidImageUrl(url) {
  if (!url || typeof url !== 'string') return false;
  
  try {
    const urlObj = new URL(url, window.location.origin);
    // Only allow http/https protocols
    if (urlObj.protocol !== 'http:' && urlObj.protocol !== 'https:') {
      return false;
    }
    // Block javascript: and data: schemes
    if (url.toLowerCase().startsWith('javascript:') || url.toLowerCase().startsWith('data:')) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

/**
 * Current Year Web Component - Automatically displays current year
 * @extends HTMLElement
 */
class CurrentYear extends HTMLElement {
  /**
   * Called when element is added to DOM
   */
  connectedCallback() {
    this.textContent = new Date().getFullYear();
  }
}

/**
 * Email Clipboard Web Component - Copies email to clipboard with modern API and fallback
 * @extends HTMLElement
 */
class EmailClipboard extends HTMLElement {
  constructor() {
    super();
    /** @type {string} Email address to copy */
    this.email = this.getAttribute('email') || 'dugovicjan@gmail.com';
  }

  /**
   * Called when element is added to DOM
   */
  connectedCallback() {
    this.innerHTML = `
      <button type="button" class="btn btn-default btn-lg" id="copyButton" title="Copy address to clipboard">
        📧 ${this.email}
      </button>
    `;
    
    this.querySelector('#copyButton').addEventListener('click', () => this.copyEmail());
  }

  /**
   * Copy email to clipboard using modern API or fallback
   * @returns {Promise<void>}
   */
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

  /**
   * Fallback copy method for older browsers
   */
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

  /**
   * Show success message to user
   */
  showSuccess() {
    alert('E–mail address copied to clipboard: ' + this.email);
  }
}

/**
 * Image Fullscreen functionality - Click images to view fullscreen
 */
function initImageFullscreen() {
  /** @type {HTMLElement|null} Current overlay element */
  let overlay = null;

  /**
   * Transform Cloudinary URL for fullscreen viewing
   * @param {string} originalUrl - Original image URL
   * @returns {string} Fullscreen-optimized URL
   */
  function getFullscreenUrl(originalUrl) {
    if (originalUrl.includes('res.cloudinary.com/jandu-top/image/upload/')) {
      return originalUrl.replace(
        /image\/upload\/[^\/]*\//,
        'image/upload/c_limit,w_1920,h_1080,q_90,f_auto/'
      );
    }
    return originalUrl;
  }

  /**
   * Open image in fullscreen overlay
   * @param {HTMLImageElement} img - Image element to display
   */
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
    // Security: Validate URL before assignment
    if (isValidImageUrl(fullscreenSrc)) {
      fullImg.src = fullscreenSrc;
    } else {
      console.error('Invalid image URL blocked:', fullscreenSrc);
      return; // Exit if URL is invalid
    }
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

  /**
   * Close fullscreen overlay
   */
  function closeFullscreen() {
    if (overlay) {
      document.body.removeChild(overlay);
      overlay = null;
      document.removeEventListener('keydown', handleKeydown);
    }
  }

  /**
   * Handle keyboard events in fullscreen
   * @param {KeyboardEvent} e - Keyboard event
   */
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

/**
 * Load deferred styles from template element - SECURE VERSION
 */
function loadDeferredStyles() {
  const deferredStyles = document.getElementById('deferred-styles');
  if (!deferredStyles) return;
  
  // Security: Use createElement and textContent instead of innerHTML
  const styleElement = document.createElement('style');
  styleElement.textContent = deferredStyles.textContent;
  document.head.appendChild(styleElement);
  deferredStyles.remove();
}

/**
 * Initialize lazy loading for images with data-src attribute - SECURE VERSION
 */
function initImageLazyLoading() {
  const images = document.getElementsByTagName('img');
  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    const dataSrc = img.getAttribute('data-src');
    // Security: Validate URL before setting src
    if (dataSrc && isValidImageUrl(dataSrc)) {
      img.setAttribute('src', dataSrc);
    } else if (dataSrc) {
      console.warn('Invalid data-src URL blocked:', dataSrc);
    }
  }
}

// Initialize deferred styles with requestAnimationFrame fallback
/** @type {Function} */
const raf = window.requestAnimationFrame || 
            window.mozRequestAnimationFrame || 
            window.webkitRequestAnimationFrame || 
            window.msRequestAnimationFrame;

if (raf) {
  raf(() => setTimeout(loadDeferredStyles, 0));
} else {
  window.addEventListener('load', loadDeferredStyles);
}

// Initialize lazy loading on page load
window.addEventListener('load', initImageLazyLoading);

// Initialize image fullscreen functionality
initImageFullscreen();