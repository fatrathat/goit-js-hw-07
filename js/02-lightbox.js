import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  gallery: document.querySelector(".gallery"),
};

const insertGalleryItem = (items) => {
  return items
    .map(
      (item) => `<a class="gallery__item" href="large-image.jpg">
                        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
                    </a>`
    )
    .join("");
};

const gallery = new SimpleLightbox(".gallery a");

gallery.on("show.simplelightbox", () => {
  gallery.open();
});

refs.gallery.insertAdjacentHTML("beforeend", insertGalleryItem(galleryItems));
