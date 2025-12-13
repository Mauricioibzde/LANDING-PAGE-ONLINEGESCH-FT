document.addEventListener('DOMContentLoaded', function () {
  // Lightbox preview for product images (hover delay + click for touch)
  const imgs = document.querySelectorAll('.card-products .img-product-card img');
  imgs.forEach((img) => {
    let overlay = null;
    let enterTimer = null;

    function createOverlay() {
      if (overlay) return;
      const card = img.closest('.card-products');
      const title = card?.querySelector('.description-card h1')?.textContent || '';
      const price = card?.querySelector('.description-card p')?.textContent || '';

      overlay = document.createElement('div');
      overlay.className = 'product-lightbox';
      overlay.innerHTML = `
        <div class="product-lightbox__backdrop" aria-hidden="true"></div>
        <div class="product-lightbox__panel" role="dialog" aria-modal="true">
          <button class="product-lightbox__close" aria-label="Fechar">×</button>
          <img class="product-lightbox__img" src="${img.src}" alt="${img.alt || ''}" />
          <div class="product-lightbox__meta">
            <h3 class="product-lightbox__title">${title}</h3>
            <p class="product-lightbox__price">${price}</p>
          </div>
        </div>
      `;

      document.body.appendChild(overlay);
      document.body.style.overflow = 'hidden';

      overlay.querySelector('.product-lightbox__close').addEventListener('click', removeOverlay);
      overlay.addEventListener('click', (ev) => {
        if (ev.target === overlay || ev.target.classList.contains('product-lightbox__backdrop')) removeOverlay();
      });
    }

    function removeOverlay() {
      if (!overlay) return;
      overlay.remove();
      overlay = null;
      document.body.style.overflow = '';
    }

    img.addEventListener('mouseenter', () => {
      enterTimer = setTimeout(createOverlay, 250);
    });
    img.addEventListener('mouseleave', () => {
      clearTimeout(enterTimer);
    });
    // open on click for touch / accessibility
    img.addEventListener('click', (e) => {
      e.preventDefault();
      createOverlay();
    });
  });
});
