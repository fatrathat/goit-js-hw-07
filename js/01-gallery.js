import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  gallery: document.querySelector(".gallery"),
};

const insertGalleryItem = (items) => {
  return items
    .map(
      (item) => `<div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img 
                    class="gallery__image" 
                    src="${item.preview}" 
                    data-source="${item.original}" 
                    alt="${item.description}"
                /> 
            </a>
            </div>`
    )
    .join("");
};

const onGalleryItem = (item) => {
  item.preventDefault();
  const originalSize = item.target.dataset.source;
  const instance = basicLightbox.create(
    `
    <img src="${originalSize}" width="800" height="600">`
  );

  instance.show();
};

refs.gallery.addEventListener("click", onGalleryItem);
refs.gallery.insertAdjacentHTML("beforeend", insertGalleryItem(galleryItems));
