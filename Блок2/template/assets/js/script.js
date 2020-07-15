let minus_button = document.querySelectorAll('.minus');
let plus_button = document.querySelectorAll('.plus');
let quantity = document.querySelectorAll('.quantity');

console.log(minus_button);

for (let i = 0; i < minus_button.length; i++){
    minus_button[i].addEventListener('click', e => {
        let number = Number.parseInt(quantity[i].innerHTML);
        if(number > 1){
            quantity[i].innerHTML = (number-1).toString();
        }
    });

    plus_button[i].addEventListener('click', e => {
        let number = Number.parseInt(quantity[i].innerHTML);
        if(number < 10){
            quantity[i].innerHTML = (number+1).toString();
        }
    });
}

