function typeText(element, text, callback) {
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
            callback();
        }
    }, 30);
}

function typeContent(contentWrapper, callback) {
    const textNodes = [];
    function collectTextNodes(node) {
        if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '') {
            textNodes.push(node);
        } else {
            for (let child of node.childNodes) {
                collectTextNodes(child);
            }
        }
    }
    collectTextNodes(contentWrapper);

    let i = 0;
    function typeNextNode() {
        if (i < textNodes.length) {
            const textNode = textNodes[i];
            const text = textNode.nodeValue;
            textNode.nodeValue = '';
            typeText(textNode, text, typeNextNode);
            i++;
        } else {
            callback();
        }
    }
    typeNextNode();
}

window.addEventListener('DOMContentLoaded', () => {
    const contentWrapper = document.querySelector('.content-wrapper');
    contentWrapper.style.opacity = 0; // Initially hidden (fully transparent)

    setTimeout(() => {
        contentWrapper.style.opacity = 1; // Fade in
        typeContent(contentWrapper, () => {});
    }, 500); // Delay before starting the typing effect
});
