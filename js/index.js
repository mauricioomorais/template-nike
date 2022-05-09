const tenisRed = document.querySelector('.button-img-one');
const tenisBlue = document.querySelector('.button-img-two');
const tenisBlueOrenge = document.querySelector('.button-img-theree');
const mudaImg = document.querySelector('#img-mude');
const mudaText = document.querySelector('#muda-cor-text');


tenisRed.addEventListener('click', function(e) { 
    mudaImg.classList.remove('tenis-blue-theree');
    mudaImg.classList.remove('tenis-blue-two');
    mudaImg.classList.add('tenis-red-one');

    mudaText.classList.remove('text-blue');
    mudaText.classList.remove('text-orenge');
    mudaText.classList.add('text-red');
})

tenisBlue.addEventListener('click', function(e) { 
    mudaImg.classList.remove('tenis-blue-theree');
    mudaImg.classList.add('tenis-blue-two');
    mudaImg.classList.remove('tenis-red-one');

    mudaText.classList.add('text-blue');
    mudaText.classList.remove('text-orenge');
    mudaText.classList.remove('text-red');
})

tenisBlueOrenge.addEventListener('click', function(e) { 
    mudaImg.classList.add('tenis-blue-theree');
    mudaImg.classList.remove('tenis-blue-two');
    mudaImg.classList.remove('tenis-red-one');

    mudaText.classList.remove('text-blue');
    mudaText.classList.add('text-orenge');
    mudaText.classList.remove('text-red');
})
