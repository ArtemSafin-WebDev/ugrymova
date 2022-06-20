import './resizeSensor';
import StickySidebar from 'sticky-sidebar';

export default function stickySidebar() {

    window.stickySidebars = [];
    const elements = Array.from(document.querySelectorAll('.js-sticky-sidebar'));

    elements.forEach(element => {
        const instance = new StickySidebar(element, {
            containerSelector: '.layout__row',
            innerWrapperSelector: '.sidebar',
            topSpacing: 0,
            bottomSpacing: 0,
            stickyClass: 'is-sticky',
            minWidth: 641
        });
        window.stickySidebars.push(instance);
    });
}
