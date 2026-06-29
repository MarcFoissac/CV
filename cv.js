// The buttons to set the language
const frenchButton = document.querySelector('#fr-button');
const englishButton = document.querySelector('#en-button');

// The elements in French
const frenchElements = document.querySelectorAll('.fr');

// The elements in English
const englishElements = document.querySelectorAll('.en');


// Change the content to the EN content
englishButton.addEventListener('click', function () {
  frenchElements.forEach(e => e.style.display = 'none');
  englishElements.forEach(e => e.style.display = 'block');
});

// Change the content to the FR content
frenchButton.addEventListener('click', function () {
  englishElements.forEach(e => e.style.display = 'none');
  frenchElements.forEach(e => e.style.display = 'block');
});
