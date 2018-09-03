export function getPosition(id) {
    return document.getElementById(id).getBoundingClientRect();
}

export function getViewportHeight() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
}