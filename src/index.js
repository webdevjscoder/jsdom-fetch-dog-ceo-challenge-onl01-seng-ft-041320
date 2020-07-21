
console.log('%c HI', 'color: firebrick');

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchPictures() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderPictures(json.message));
}

function renderPictures(pictures) {
    const dogImageContainer = document.getElementById('dog-image-container')
    pictures.forEach(function displayPicture(picture) {
        const img = document.createElement('img')
        img.src = picture
        dogImageContainer.appendChild(img)
    })
};

function fetchBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json()
    .then(json => renderBreeds(json.message)))
};

   function renderBreeds(breeds){
    const dogBreedsContainer = document.getElementById('dog-breeds')
    for (const breed in breeds){
        const li = document.createElement('li')
        li.innerHTML = breed
        li.setAttribute('class', 'dog')
        dogBreedsContainer.appendChild(li)
        li.addEventListener('click', function(){
        li.style.color = purple;
      });
    }
   };

   function filterBreeds (e){
       const selection = e.target.value
       const dogBreedList = document.querySelectorAll('li.dog')
       dogBreedList.forEach(function(dogBreed) {
           if (selection == "all"){
               dogBreed.hidden = false
           } else { 
               if (dogBreed.innerHTML[0] != selection) {
               dogBreed.hidden = true
           } else { dogBreed.hidden = false }
       }});
   };

document.addEventListener('DOMContentLoaded', function () {
    const breedDropDown = document.getElementById('breed-dropdown')
    breedDropDown.onchange = filterBreeds
    fetchPictures();
    fetchBreeds();
});