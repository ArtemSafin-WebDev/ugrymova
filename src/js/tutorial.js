import { IS_MOBILE } from "./utils";

export default function tutorial() {
    if (IS_MOBILE || localStorage.getItem('tutorial-skipped') === 'yes') return;


    if (typeof window.openModal === 'function') {
        window.openModal('#tutorial-start');
    }

    const skipBtns = Array.from(document.querySelectorAll('.js-skip-tutorial'));
    skipBtns.forEach(btn => btn.addEventListener('click', event => {
        event.preventDefault();

        localStorage.setItem('tutorial-skipped', 'yes');
    }))
}