import Inputmask from 'inputmask';

export default function masks() {
    const phoneInputs = Array.from(document.querySelectorAll('.js-phone-input'));

    phoneInputs.forEach(input => {
        const instance = new Inputmask({ mask: '+7 (999) 999-99-99' });
        instance.mask(input);
    });

    const onlyNumericInputs = Array.from(document.querySelectorAll('.js-numeric-input-decimals'));

    onlyNumericInputs.forEach(input => {
        input.addEventListener('input', () => {
            const value = input.value;
            const newCleanedValue = parseInt(value.replace(/[^\d]+/g, ''), 10);
            if (isNaN(newCleanedValue)) {
                input.value = '';
            } else {
                input.value = newCleanedValue.toLocaleString();
            }
        });
    });

    const onlyNumericInputsNoFormatting = Array.from(document.querySelectorAll('.js-numeric-input'));

    onlyNumericInputsNoFormatting.forEach(input => {
        input.addEventListener('input', () => {
            const value = input.value;
            const newCleanedValue = parseInt(value.replace(/[^\d]+/g, ''), 10);
            if (isNaN(newCleanedValue)) {
                input.value = '';
            } else {
                input.value = newCleanedValue;
            }
        });
    });

    const customMaskInputs = Array.from(document.querySelectorAll('.js-custom-mask'));
    customMaskInputs.forEach(input => {

        const instance = new Inputmask({ mask: input.hasAttribute('data-mask') ? input.getAttribute('data-mask') : '999', showMaskOnFocus: false, showMaskOnHover: false, placeholder: '_' });
        instance.mask(input);
    });
}
