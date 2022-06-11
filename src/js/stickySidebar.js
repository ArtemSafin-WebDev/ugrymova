import './resizeSensor';
import StickySidebar from 'sticky-sidebar';

export default function stickySidebar() {
    const elements = Array.from(document.querySelectorAll('.js-sticky-sidebar'));

    elements.forEach(element => {
        new StickySidebar(element, {
            containerSelector: '.layout__row',
            innerWrapperSelector: '.sidebar',
            topSpacing: 0,
            bottomSpacing: 0,
            stickyClass: 'is-sticky',
            minWidth: 641
        });
    });
}
