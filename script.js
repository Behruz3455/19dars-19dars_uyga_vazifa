let btns = document.querySelectorAll('button');

btns.forEach((item) =>{
    item.addEventListener('click', () =>{
        localStorage.setItem('GamesName', item.parentElement.parentElement.children[1].innerHTML);
        localStorage.setItem('GamesInfo', item.parentElement.parentElement.children[3].children[0].innerHTML);
        localStorage.setItem('GameImage', item.parentElement.parentElement.children[2].children[0].src);
        localStorage.setItem('GameStrong', item.parentElement.parentElement.children[2].children[0].innerHTML);
        location = 'page.html';
    });
});

