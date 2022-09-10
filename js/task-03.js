const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// ===================APPEND===============================

// const makeGalleryItem = ({ url, alt }) => {
//   const imageItemEl = document.createElement("li");
//   imageItemEl.classList.add("gallery-item");

//   const imageEl = document.createElement("img");
//   imageEl.classList.add("gallery-img");
//   imageEl.src = url;
//   imageEl.alt = alt;
//   imageEl.width = 250;
//   imageEl.height = 150;


//   imageItemEl.appendChild(imageEl);

//   return imageItemEl;
// };


// const getGalleryEl = document.querySelector(".gallery");
// const elements = images.map(makeGalleryItem);
// getGalleryEl.append(...elements);


// ==================insertAdjacentHTML=====================
const getGalleryEl = document.querySelector(".gallery");

const makeGalleryItem = ({url, alt}) => {
  return `<li class="gallery-item"><img src=${url} alt=${alt} width = 500 height = 350 class="gallery-img"></li>`;
}

const makeGalleryItemMarkup = images.map(makeGalleryItem).join('');
getGalleryEl.insertAdjacentHTML('afterbegin', makeGalleryItemMarkup);

console.log(makeGalleryItemMarkup);
