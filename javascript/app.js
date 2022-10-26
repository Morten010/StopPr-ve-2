let buttons = document.getElementsByClassName('accordion-btn')

for(i = 0; i < buttons.length; i++){
    // console.log(i);
    let n = i;
    let theAccordion = buttons[i].parentElement.parentElement;
    buttons[n].addEventListener('click', () => {
        theAccordion.classList.toggle('open')
        if(buttons[n].innerHTML === 'Show More'){
            buttons[n].innerHTML = 'Hide'
        }else{
            buttons[n].innerHTML = 'Show More'
        }
    });
}