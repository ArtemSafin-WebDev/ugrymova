import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IS_MOBILE } from './utils';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export default function events() {
    const elements = Array.from(document.querySelectorAll('.js-events'));

    elements.forEach(element => {
        const backBtn = element.querySelector('.events__calendar-arrow--prev');
        const nextBtn = element.querySelector('.events__calendar-arrow--next');
        const months = Array.from(element.querySelectorAll('.events__calendar-month'));
        const cards = Array.from(element.querySelectorAll('.events__calendar-card'));
        const SCROLL_DURATION = 0.5;

        const scrollContainer = element.querySelector('.events__calendar-scroll-container');

        const checkScroll = () => {
            if (scrollContainer.offsetWidth + scrollContainer.scrollLeft >= scrollContainer.scrollWidth) {
                nextBtn.classList.add('disabled');
            } else {
                nextBtn.classList.remove('disabled');
            }

            if (scrollContainer.scrollLeft === 0) {
                backBtn.classList.add('disabled');
            } else {
                backBtn.classList.remove('disabled');
            }
        };

        checkScroll();

        if (!cards.length) return;

        scrollContainer.addEventListener(
            'scroll',
            () => {
                checkScroll();
            },
            {
                passive: true
            }
        );

        nextBtn.addEventListener('click', event => {
            event.preventDefault();

            const distance = scrollContainer.scrollLeft + cards[0].offsetWidth * 7;
            gsap.to(scrollContainer, { duration: SCROLL_DURATION, scrollTo: { x: distance } });
        });
        backBtn.addEventListener('click', event => {
            event.preventDefault();
            const distance = scrollContainer.scrollLeft - cards[0].offsetWidth * 7;
            gsap.to(scrollContainer, { duration: SCROLL_DURATION, scrollTo: { x: distance } });
        });

        const activeDay = cards.find(day => day.classList.contains('active'));

        
        if (activeDay) {
            gsap.to(scrollContainer, {
                duration: 0,
                scrollTo: {
                    x: activeDay,
                    offsetX: IS_MOBILE ? parseInt(window.getComputedStyle(scrollContainer).paddingLeft, 10) : 0
                }
            });
        }
    });
}
