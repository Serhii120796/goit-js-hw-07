import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

gallery.innerHTML = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image"
                src="${preview}" 
                data-source="${original}"
                alt="${description}"/>
        </a>
       </li>`,
  )
  .join('');

gallery.addEventListener('click', onClick);

function onClick(evt) {
    evt.target.preventDefault;
    console.log(evt.target);
}


