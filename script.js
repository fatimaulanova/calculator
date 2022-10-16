const container = document.querySelector('.container');
const result = document.querySelector("#result");

container.addEventListener('click', function(event){
    if(!event.target.classList.contains('container-btn'))return;

    const value = event.target.innerText;


    switch(value){
        case 'C':
            result.innerText = '';
            break;


        case '=':
            if(result.innerText.search(/[^0-9*/+-.]/mi) != -1) return;
            result.innerText = eval(result.innerText);
            break;

        default:
            result.innerText += value;
    }

})




// eval() - выполняет код в виде строке.