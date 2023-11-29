console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

function fetchAndRenderImages() {
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const dogImageContainer = document.getElementById('dog-image-container');
        data.message.forEach(imageUrl => {
          const imgElement = document.createElement('img');
          imgElement.src = imageUrl;
          dogImageContainer.appendChild(imgElement);
        });
      });
  }
  
  function fetchAndRenderBreeds() {
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const dogBreedsList = document.getElementById('dog-breeds');
        const breeds = data.message;
  
        for (const breed in breeds) {
          const listItem = document.createElement('li');
          listItem.textContent = breed;
          dogBreedsList.appendChild(listItem);
  
          listItem.addEventListener('click', function() {
            this.style.color = 'blue'; // Change the color to your desired color
          });
        }
  
        const breedDropdown = document.getElementById('breed-dropdown');
        breedDropdown.addEventListener('change', function() {
          const selectedLetter = breedDropdown.value;
          dogBreedsList.innerHTML = ''; // Clear the existing breed list
  
          for (const breed in breeds) {
            if (breed.startsWith(selectedLetter)) {
              const listItem = document.createElement('li');
              listItem.textContent = breed;
              dogBreedsList.appendChild(listItem);
            }
          }
        });
      });
  }
  
  fetchAndRenderBreeds();