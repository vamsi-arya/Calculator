
let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('buttons'));
buttons.map(button => {
button.addEventListener('click',(e) => {
    switch(e.target.innerText){
   
         case 'clear':
            display.innerText ='';
            break;
         case 'dele':
            if(display.innerText){
                display.innerText = display.innerText.slice(0,-1);

            }   
            break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch{
                    display.innerText ='error!';
                }
                break;
                default:
                    display.innerText += e.target.innerText;
             }

     });
    });
    
