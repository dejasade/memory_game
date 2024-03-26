document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('form');
    const gallery = document.querySelector(".new-meme");

    form.addEventListener('submit', function(e) {
        e.preventDefault();

// create li element for meme
    const memeLi = document.createElement('li');
    memeLi.classList.add('meme-img');

    //create canvas element to put our img background in

    const topText = document.getElementById('text-top');
    const urlInput = document.getElementById('image').value,
    src = urlInput, 
    img = document.createElement('img');
    img.src = src;

    //create div for new text and add class to it
    const topTextDiv = document.createElement('div');
    topTextDiv.classList.add('text','top');
    topTextDiv.innerText = document.getElementById('text-top').value 
    
    //create div for bottom text and add it to class
    const bottomTextDiv = document.createElement('div');
    bottomTextDiv.classList.add('text','bottom');
    bottomTextDiv.innerText = document.getElementById('text-bottom').value 

    //create an X to remove memes
    const remove = document.createElement('button');
    remove.classList.add('be-gone');
    remove.innerText = 'X';
    remove.style.color = 'red';

        //append the picture, words, remove button to page
    gallery.appendChild(memeLi);
    memeLi.appendChild(img);
    memeLi.appendChild(topTextDiv)
    memeLi.appendChild(bottomTextDiv);
    memeLi.appendChild(remove);
    
// add event listener to remove button
const liButtons = document.querySelectorAll('li button');
        for(let btn of liButtons) {
            btn.addEventListener('click', function(e) {
                e.target.parentElement.remove();
            })
        }

    form.reset();
    })

});