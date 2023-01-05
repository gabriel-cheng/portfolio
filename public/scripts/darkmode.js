const btnCheck = document.querySelector('#checkbox');

btnCheck.addEventListener('change', setToDark);

window.onload = () => {
    const temaAtual = localStorage.getItem('theme');

    if(temaAtual === 'dark') {
        setToDark();

        document.querySelector('#checkbox').checked = true;

        return;
    }
};

function setToDark() {
    const body = document.body;
    const a = document.querySelectorAll('a');
    const p = document.querySelectorAll('p');
    const ball = document.querySelector('.ball');
    const github = document.querySelector('.github');
    const linkedin = document.querySelector('.linkedin');
    const whatsapp = document.querySelector('.whatsapp');
    const toggle = document.querySelector('.menu-toggle');
    const toggleLines = toggle.querySelectorAll('div');
    const menuNavbar = document.querySelector('.menu-nav');
    const curriculo = document.querySelector('.curriculo');
    const header = document.querySelector('.header-content');
    const headerIcon = document.querySelector('.header-logo-icon');
    const footerIcon = document.querySelector('.footer-logo-icon');
    const darkModeButtonLabel = document.querySelector('.darkModeButtonLabel');

    localStorage.setItem('theme', null);

    header.style = 'transition: .3s ease-in-out';
    header.classList.toggle('dark');

    body.classList.toggle('dark');
    body.style = 'transition: .3s ease-in-out';



    darkModeButtonLabel.style = 'background-color: #fff;';
    ball.style = 'background-color: #000;';
    ball.style.transition = 'transform .2s linear';

    for(let i = 0; i < a.length; i++) {
        a[i].style = 'color: #fff !important';
    }
    for(let i = 0; i < p.length; i++) {
        p[i].style = 'color: #fff !important';
    }
    for(let i = 0; i < toggleLines.length; i++) {
        toggleLines[i].style = 'background-color: #fff';
    }

    menuNavbar.style = 'background-color: #1a1a1a !important';

    headerIcon.src = '/images/icons/portfolio-icon-branco.png';
    linkedin.src = './images/icons/linkedin-branco.png';
    github.src = './images/icons/github-branco.png';
    whatsapp.src = './images/icons/whatsapp-branco.png';
    curriculo.src = './images/icons/curriculo-branco.png';
    footerIcon.src = './images/icons/portfolio-icon-branco.png';

    if(!body.classList.contains('dark') && !header.classList.contains('dark')) {
        for(let i = 0; i < a.length; i++) {
            a[i].style = 'color: #000';
        }
        for(let i = 0; i < p.length; i++) {
            p[i].style = 'color: #000';
        }
        for(let i = 0; i < toggleLines.length; i++) {
            toggleLines[i].style = 'background-color: #000';
        }

        headerIcon.src = '/images/icons/portfolio-icon-preto.png';
        linkedin.src = './images/icons/linkedin-preto.png';
        github.src = './images/icons/github-preto.png';
        whatsapp.src = './images/icons/whatsapp-preto.png';
        curriculo.src = './images/icons/curriculo-preto.png';
        footerIcon.src = './images/icons/portfolio-icon-cinza.png';

        darkModeButtonLabel.style = 'background-color: #111;';
        ball.style = 'background-color: #fafafa;';
        ball.style.transition = 'transform .2s linear';

        menuNavbar.style = 'background-color: #fff !important';
    }
    if(body.classList.contains('dark') && header.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    }
}
