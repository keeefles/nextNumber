document.getElementById('btnSubmit').addEventListener('click', function(){

    let input = document.querySelector('[data-input]').value;
    let nextNumber = input +1; document.querySelector('[data-output]').textContent = nextNumber;

});