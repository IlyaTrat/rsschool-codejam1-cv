const nav = document.getElementById('navigation');

nav.addEventListener('click', (event) => {
    event.preventDefault();
    const href = event.target.href.toString();
    const index = href.indexOf("#") + 1;

    const el = document.getElementById(href.substring(index, href.length));

    window.scrollTo(0, el.offsetTop);
});