const buttons = document.getElementById('buttons');

buttons.addEventListener('click', (event) => {
    const screen = document.getElementById('screen');
    if (event.target.id !== '=') {

        if (event.target.id == 'C') {
            screen.innerHTML = '';
            return;
        }
        if (event.target.id == 'buttons') {

            return;
        }

        screen.innerHTML += event.target.id;

    }
    else {
        const result = eval(screen.innerHTML);
        screen.innerHTML = result;
    }

});