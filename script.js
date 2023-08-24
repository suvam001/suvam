function typeContent(target, content, callback) {
    let i = 0;
    const elements = content.match(/<[^>]*>[^<]*<\/[^>]*>|<[^/>]*\/>/g) || []; // Split by HTML tags
    const timer = setInterval(() => {
        if (i < elements.length) {
            target.innerHTML += elements[i];
            i++;
        } else {
            clearInterval(timer);
            callback();
        }
    }, 100); // Adjust the typing speed here
}

window.addEventListener('DOMContentLoaded', () => {
    const navWrapper = document.querySelector('.nav-wrapper');
    const originalContent = navWrapper.innerHTML;

    // Clear the original content
    navWrapper.innerHTML = '';

    // Start typing the original content
    typeContent(navWrapper, originalContent, () => {});
});
