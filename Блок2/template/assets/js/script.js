
window.onload = () => {
    document.querySelector('.cars').addEventListener('input', e =>
        $(e.target).attr('value', $(e.target).attr('value').replace(/[^\d]/g, ''))
    );

    document.querySelector('.cars').addEventListener('click', e =>{
        let value;
        if(e.target.closest('button')) {
            if (e.target.closest('button').getAttribute('data-type') === 'minus') {
                value = Number.parseInt( $(e.target.closest('button')).siblings('label').children('input').attr('value'));
                if (value > 1) {
                    $(e.target.closest('button')).siblings('label').children('input').attr('value', value - 1);
                }
            }
            if (e.target.closest('button').getAttribute('data-type') === 'plus') {
                value = Number.parseInt($(e.target.closest('button')).siblings('label').children('input').attr('value'));
                    $(e.target.closest('button')).siblings('label').children('input').attr('value', value +1);
            }
        }
    });
};
