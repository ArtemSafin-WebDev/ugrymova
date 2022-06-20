import { debounce } from 'lodash';
import { IS_MOBILE } from './utils';

export default function equalHeight() {
    if (IS_MOBILE) return;
    const setEqualHeight = () => {
        const elements = Array.from(document.querySelectorAll('.js-equal-height'));
        if (!elements.length) return;

        elements.forEach(element => {
            element.style.removeProperty('--equal-height');
        });

        requestAnimationFrame(() => {
            const maxHeight = Math.max(...elements.map(element => element.offsetHeight));

            console.log('Max height', maxHeight);

            elements.forEach(element => {
                element.style.setProperty('--equal-height', maxHeight + 'px');
            });

            if (window.stickySidebars) {
                window.stickySidebars.forEach(sidebar => sidebar.updateSticky());
            }
        });
    };

    setEqualHeight();

    window.addEventListener(
        'resize',
        debounce(() => {
            setEqualHeight();
        }),
        300
    );
}
