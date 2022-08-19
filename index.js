// Write your code here!

const main=document.querySelector('#main');
main.remove();

for(let i=0;i<3;i++){
const newHeader=document.createElement("h1");
newHeader.id="victory";
document.body.append(newHeader);
}

document.querySelectorAll("h1")[2].innerHTML = "YOUR-NAME is the champion";





    
