const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
  
];
const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);

const galleryItemsEl = images.map(({ url, alt}) => {
  const liEl = document.createElement("li");
  const imgEl = document.createElement("img");

  imgEl.src = url;
  imgEl.alt = alt;

  liEl.append(imgEl);

  return liEl;
}

);
galleryEl.append(galleryItemsEl);
console.log(galleryItemsEl);



const style = document.createElement("style"); 
style.textContent = ` .gallery 
{ display: flex; flex-wrap: wrap; gap: 24px; padding: 0; list-style: none; }
  .gallery img { display: block; width: 100%; height: 200px;  } `;
   
   document.head.append(style);

console.log(style);
