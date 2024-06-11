const ul = document.querySelector("ul");

let listElements = ul.querySelectorAll("li");

console.log(ul)
console.log(listElements);

listElements.forEach(element => {
    const oldContent=element.textContent
    element.style.color = "red";
    console.log(element);
    element.addEventListener("click",()=>{
        console.log("Je suis la");
        
        element.addEventListener("mouseout",()=>{
            element.textContent=oldContent;
        })
        element.textContent="Cliqued";
    })
});