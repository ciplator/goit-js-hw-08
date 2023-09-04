// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox"; // Импорт библиотеки SimpleLightbox
import "simplelightbox/dist/simple-lightbox.min.css"; // Импорт CSS библиотеки

console.log(galleryItems);
const galleryList = document.querySelector(".gallery");

galleryList.innerHTML = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>`
  )
  .join("");
galleryList.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.classList.contains("gallery__image")) {
    const largeImageUrl = event.target.parentNode.href;

    const instance = basicLightbox.create(
      `<img src="${largeImageUrl}" alt="Велике зображення">`
    );

    instance.show();
  }
});
