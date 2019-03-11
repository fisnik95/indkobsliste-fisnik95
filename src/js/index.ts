//Her skal du skrive din typescriptkode
document.getElementById('submitBtn').addEventListener("click",addvare);

let elementInput = document.getElementById('nyvare');

function addvare()
{
    let mytext = (<HTMLInputElement>elementInput).value;
        
    let usundliste = document.getElementById("listeUsund")
    let newLi = document.createElement('li');
    let newText = document.createTextNode(mytext)
    newLi.appendChild(newText);
    newLi.setAttribute('class','usundt');
  
    usundliste.appendChild(newLi);

}



