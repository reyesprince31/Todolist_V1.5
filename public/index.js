const checkboxes = document.querySelectorAll(".myCheckbox");
const editButtons = document.querySelectorAll(".edit-btn");
const delButtons = document.querySelectorAll(".del-btn");

editButtons.forEach((button) => {
    button.setAttribute('hidden', '');
  });
  
delButtons.forEach((button) => {
    button.setAttribute('hidden', '');
  });

checkboxes.forEach((checkbox, index)=> {
    checkbox.addEventListener('change', (evt)=> {
        const isChecked = evt.target.checked;
        console.log(checkbox); // Log the checkbox element that triggered the event
        console.log(isChecked); // Log the checked state of the checkbox
        console.log(index); // Log the index of checkbox

        if (isChecked) {
            editButtons[index].removeAttribute('hidden');
            delButtons[index].removeAttribute('hidden');
        } else {
            editButtons[index].setAttribute('hidden', '');
            delButtons[index].setAttribute('hidden', '');
        }
    });

});




