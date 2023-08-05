document.querySelector('h1').innerHTML = localStorage.getItem('GamesName');
document.querySelector('p').innerHTML = localStorage.getItem('GamesInfo');
document.querySelector('img').src = localStorage.getItem('GameImage');   