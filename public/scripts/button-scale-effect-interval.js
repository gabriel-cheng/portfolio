const button1 = document.querySelector('.box-1-button-text');
const button2 = document.querySelector('.box-2-button-text');
const button3 = document.querySelector('.section-3-work');

if(button1, button2, button3) {
    function intervalEffect(button) {
        setInterval(() => {
            setTimeout(() => {
                button.classList.toggle('scaleInterval')
            }, 500);
            setTimeout(() => {
                button.classList.toggle('scaleInterval')
            }, 1200);
        }, 6000);
    };
    
    intervalEffect(button1);
    intervalEffect(button2);
    intervalEffect(button3);
} else {
    console.log('Itens não encontrados.');
}


