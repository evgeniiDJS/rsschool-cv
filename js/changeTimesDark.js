export async function changeTimesDark() {
    const change__fone = document.querySelector('.change__fone');
    const nav = document.querySelector('.nav');
    const myCodingText = document.querySelector('.adapt') 
    const titles__first = document.querySelector('.titles__first') 
    const titles__last = document.querySelector('.titles__last') 

    await change__fone.addEventListener('click', () => {
        document.body.classList.toggle('dark__times');
        document.body.classList.toggle('lite__times');
        nav.classList.toggle('nav');
        nav.classList.toggle('nav__none');
        myCodingText.classList.toggle('adapt');
        myCodingText.classList.toggle('adapt__color');
        titles__first.classList.toggle('titles__first');
        titles__first.classList.toggle('titles__first__black');
        titles__last.classList.toggle('titles__last');
        titles__last.classList.toggle('titles__last__black');
    });


    await document.querySelector('#menu__toggle').addEventListener('change', function(e) {
        document.body.style.overflow = e.target.checked === true ? 'hidden' : '';
    });
}