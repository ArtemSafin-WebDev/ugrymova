export default function highlightSections() {
    let activeHighlightedSection = null;

    document.addEventListener('openmodal', event => {
        const modal = event.detail.modal;

        if (!modal.hasAttribute('data-highlight-section')) return;

        const sectionToHighlight = document.querySelector(`[data-highlight-id="${modal.getAttribute('data-highlight-section')}"]`);

        if (!sectionToHighlight) {
            console.error('Section to highlight not found');
            return;
        }

        sectionToHighlight.classList.add('section-highlighted');
        activeHighlightedSection = sectionToHighlight;
        console.log('Section to highlight', sectionToHighlight);
    });

    document.addEventListener('closemodal', () => {
        if (activeHighlightedSection) {
            activeHighlightedSection.classList.remove('section-highlighted');
            activeHighlightedSection = null;
        }
    });
}
