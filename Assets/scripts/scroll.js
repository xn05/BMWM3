(() => {
    const mainRight = document.getElementById('main-right');
    if (!mainRight) return;

    const scrollToSection = (targetId) => {
        const target = document.getElementById(targetId);
        if (!target) return;
        const mainRect = mainRight.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        const offset = targetRect.top - mainRect.top + mainRight.scrollTop;
        mainRight.scrollTo({ top: offset, behavior: 'smooth' });
    };

    document.querySelectorAll('.nav-link').forEach((link) => {
        const targetId = link.getAttribute('data-target');
        link.setAttribute('role', 'button');
        link.style.cursor = 'pointer';
        link.addEventListener('click', (event) => {
            event.preventDefault();
            if (targetId) scrollToSection(targetId);
        });
    });
})();

(() => {
    const image = document.getElementById('m3');
    const container = image?.parentElement;
    if (!image || !container) return;

    let scale = 1;
    const minScale = 1;
    const maxScale = 3;
    const step = 0.12;

    container.style.overflow = container.style.overflow || 'hidden';
    image.style.transform = 'scale(1)';

    image.addEventListener('wheel', (event) => {
        event.preventDefault();
        const direction = event.deltaY < 0 ? 1 : -1;
        scale = Math.min(maxScale, Math.max(minScale, scale + direction * step));
        image.style.transform = `scale(${scale})`;
    }, { passive: false });
})();

(() => {
    const image = document.getElementById('m3');
    const container = image?.parentElement;
    if (!image || !container) return;

    const existing = container.querySelector('.image-hint');
    if (existing) existing.remove();

    const hint = document.createElement('div');
    hint.className = 'image-hint';
    hint.textContent = 'Image is zoomable (Scroll)';
    container.appendChild(hint);

    setTimeout(() => {
        hint.remove();
    }, 4000);
})();