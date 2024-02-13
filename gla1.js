
document.addEventListener('DOMContentLoaded', function() {
    var fullName = "noah haworth";
    
    var h1Element = document.createElement('h1');
    h1Element.textContent = fullName;
    h1Element.style.textAlign = 'center';
    h1Element.style.color = '#A9A9A9';
    document.body.appendChild(h1Element);
    
    var input1 = document.createElement('input');
    input1.setAttribute('type', 'number');
    var input2 = document.createElement('input');
    input2.setAttribute('type', 'number');
    var button = document.createElement('button');
    button.textContent = 'Calculate Sum';
    button.addEventListener('click', function() {
        var sum = parseInt(input1.value) + parseInt(input2.value);
        alert('Sum: ' + sum);
    });
    document.body.appendChild(input1);
    document.body.appendChild(input2);
    document.body.appendChild(button);
    
    var validateInput = (input) => {
        try {
            if (isNaN(input.value)) {
                throw new Error('Input is not a number');
            }
            input.style.border = '1px solid #ccc';
            return true;
        } catch (error) {
            input.style.border = '1px solid red';
            alert(error.message);
            return false;
        }
    };
});
