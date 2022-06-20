import { numWord } from "./utils";



export default function selectedNotifications() {
    const selected = document.querySelector('.notifications__selected');
    if (selected) {
        const checkboxes = Array.from(document.querySelectorAll('.notifications__card input[type="checkbox"]'))

        const countSelectedCards = () => {
            const checkedBoxes = Array.from(document.querySelectorAll('.notifications__card input[type="checkbox"]:checked'))
            selected.textContent = `Выбрано ${checkedBoxes.length} ${numWord(checkedBoxes.length, ['уведомление', 'уведомления', 'уведомлений'])}`
        }
        countSelectedCards();

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                countSelectedCards();
            })
        })
    }
}