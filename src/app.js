import './style.scss';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

//Smoothscrollbar Setup

const container = document.querySelector('.container');

Scrollbar.use(OverscrollPlugin);

let scrollbar = Scrollbar.init(container, {
    damping: 0.08,
    renderByPixels: true,
    thumbMinSize: 5,
    delegateTo: document,
    plugins: {
        overscroll: {
            effect: 'bounce',
            damping: 0.1,
            maxOverscroll: 150
        }
    }
});

let elementToGo;

const scrollTo = (element) => {
    elementToGo = document.querySelector(element);
    scrollbar.scrollIntoView(elementToGo, {});
};

document.querySelectorAll('.scrollTo').forEach(i => {
    i.addEventListener('click', (e) => {
        scrollTo(e.target.attributes['data-id'].value);
    })
});


//Your JS here