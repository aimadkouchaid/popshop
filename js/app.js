const toggle = document.getElementById('header-toggle');
const nav = document.getElementById('nav-bar');
const headerpd = document.getElementById('header');

toggle.addEventListener('click', function(){
    nav.classList.toggle('show');
    toggle.classList.toggle('bx-x');
    headerpd.classList.toggle('active');
});

const linkColor = document.querySelectorAll('.navlink');

function colorLink(){
    if(linkColor){
        linkColor.forEach(l=> l.classList.remove('active'));
        this.classList.add('active');
    }
}
linkColor.forEach(l=> l.addEventListener('click', colorLink));