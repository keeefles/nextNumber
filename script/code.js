let currentIdx = 0;

function nextNumber(numbers) {
    if (currentIdx >= numbers.length) {
        currentIdx = 0;
    } const nextNumber = numbers[currentIdx];
    currentIdx++;

return nextNumber;
}

document.addEventListener('DOMContentLoaded', function(){
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    currentNumberElement = document.getElementById('currentNumber');

   function updateNumber() {
    const nextButton = nextNumber(array);
    currentNumberElement.textContent = nextNumber;
   } 
    

 updateNumber();
btnSubmit.addEventListener('click', updateNumber);
})
