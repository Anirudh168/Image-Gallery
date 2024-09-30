const btn = document.querySelectorAll(".container button");
const cards = document.querySelectorAll(".img-container .card");
btn.forEach(button=>button.addEventListener('click',()=>{
    document.querySelector(".active").classList.remove("active");
    button.classList.add("active");
    cards.forEach(card=>{
        card.classList.add("hide");
        if(card.dataset.name==button.dataset.name||button.dataset.name=="all")
        {
            card.classList.remove("hide");
        }
    });
}));