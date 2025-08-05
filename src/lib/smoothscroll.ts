export default function smoothscroll(node: HTMLAnchorElement) {
    const id = new URL(node.href).hash.replace('#', '');
    const targetElement = document.getElementById(id);
    const onclick = (e: Event) => {
        e.preventDefault();
        if (targetElement) {
            window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        })}
    }
    node.addEventListener('onclick', onclick)
    return {
        destroy: () => {
            node.removeEventListener('onclick', onclick)
        }
    }
}