export const Budgetsucess = (text) => {
    
        let disabled = document.querySelector('#disabled');
        if(text === '') {
          disabled.setAttribute('disabled', true);
          disabled.classList.remove('custom_btn');
        } else {
          disabled.classList.add('custom_btn');
          disabled.removeAttribute('disabled');
        }
}
export const calendarSucess = (text) => {
    
        let disabled = document.querySelector('#disabled_2');
        if(text === '') {
          disabled.setAttribute('disabled', true);
          disabled.classList.remove('custom_btn');
        } else {
          disabled.classList.add('custom_btn');
          disabled.removeAttribute('disabled');
        }
}
