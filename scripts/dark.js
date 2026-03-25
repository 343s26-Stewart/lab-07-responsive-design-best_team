function main() {
    let navItems = document.querySelectorAll('.main-nav li');
    let OSDefault = navItems[0];
    let darkMode = navItems[1];
    let lightMode = navItems[2];
    let body = document.querySelector('body');

    OSDefault.addEventListener('click', ()=>{
        const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (prefersDarkMode) {
            body.classList.remove("lightMode");
            body.classList.add("darkMode");
        } else {
            body.classList.remove("darkMode");
            body.classList.add("lightMode");
        }
        event.preventDefault()
    });

    darkMode.addEventListener('click', ()=>{
        body.classList.remove("lightMode");
        body.classList.add("darkMode");
        console.log(body.classList);
        event.preventDefault()
    })

    lightMode.addEventListener('click', ()=>{
        body.classList.remove("darkMode");
        body.classList.add("lightMode");
        event.preventDefault()
    })
}
document.addEventListener('DOMContentLoaded', main)