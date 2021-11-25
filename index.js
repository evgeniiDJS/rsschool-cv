hljs.initHighlightingOnLoad();

const menu__btn = document.querySelector('.menu__btn');
const container = document.querySelector('.container');
const menu__toggle = document.querySelector('#menu__toggle')

menu__btn.addEventListener('click', () => {
    
})

document.querySelector('#menu__toggle').addEventListener('change', function(e) {
    document.body.style.overflow = e.target.checked === true ? 'hidden' : '';
});
