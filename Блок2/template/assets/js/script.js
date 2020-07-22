
window.onload = () => {
    document.querySelector('.cars').addEventListener('click', e =>{
        let value;
        if(e.target.closest('button')) {
            if (e.target.closest('button').getAttribute('data-type') === 'minus') {
                value = Number.parseInt(e.target.closest('button').nextElementSibling.firstChild.value);
                if (value > 1) {
                    e.target.closest('button').nextElementSibling.firstChild.value = value - 1;
                }
            }
            if (e.target.closest('button').getAttribute('data-type') === 'plus') {
                value = Number.parseInt(e.target.closest('button').previousElementSibling.firstChild.value);
                if (value < 10) {
                    e.target.closest('button').previousElementSibling.firstChild.value = value + 1;
                }
            }
        }
    });
};
