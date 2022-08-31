import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector("[class=gallery]");

{/* V1
<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>

V2
<a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>
 */}

function createListGalleryItem(items) {
  return items
    .map(
      (item) => `
  <a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}"
    />
  </a>`
    )
    .join("");
}

const listGalleryItem = createListGalleryItem(galleryItems);
galleryEl.insertAdjacentHTML("afterbegin",listGalleryItem);

galleryEl.addEventListener("click", onClickGalleryItem);

function onClickGalleryItem(event) {
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  event.preventDefault();
//   console.log(event.target);

  showModalImgSimpleLightbox();
}
// Modal from "simple-lightbox";

// V1 Подключение
// var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
// v2
// var lightbox = $('.gallery a').simpleLightbox({ /* options */ });

function showModalImgSimpleLightbox() {
    var lightbox = new SimpleLightbox('.gallery a', {
        nav: true,
        caption: true,
        captionData: true,
        captionPosition: 'bottom'
    });

// let gallery = new SimpleLightbox('.gallery a', );
// gallery.on('show.simplelightbox', function () {
// 	// do something…
// });
};

// function showModalImgSimpleLightbox(eventTarget) {
//   const instance = basicLightbox.create(`
//     <img src="${eventTarget.dataset.source}" >
// `);

//   instance.show();
// }

