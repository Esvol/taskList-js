let clik = 0;
document.querySelector('[name="button"]').addEventListener('click', function(){

    if(document.querySelector('[name="text"]').value == '')
    {
        document.querySelector('.atten2').style.display = 'block';
    }
    else{
        let divka = document.createElement('div');
        let inputEl = document.createElement('input');
        let pEl = document.createElement('p');
        divka.append(inputEl);
        divka.append(pEl);
    
        inputEl.type = 'checkbox';
        pEl.textContent = document.querySelector('[name="text"]').value;
        inputEl.classList.add('checkBox');
        pEl.classList.add('pEl');
        divka.classList.add('divka');
    
        tet.append(divka);
        clik++;
    }
})

document.querySelector('.left-container').addEventListener('click', function(e){
   
    if(e.target.type == 'checkbox' && clik==1)
    {
        document.querySelector('.atten').style.display = 'block';
    }

    if (e.target.type == 'checkbox' && clik>1)
    {
        e.target.parentNode.remove();
        clik--;
    } 
})

document.querySelector('.imgg').addEventListener('click', function(){
    document.querySelector('.atten').style.display = 'none';
})

document.querySelector('.imgg2').addEventListener('click', function(){
    document.querySelector('.atten2').style.display = 'none';
})

    

        


