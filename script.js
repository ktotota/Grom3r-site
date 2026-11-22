const button = document.querySelector(".app-button");

button.addEventListener("click", function (event) {
     event.preventDefault();
    
    if (button.textContent === "Перейти в группу"){
        button.textContent = "Вы нажали!";
    }else{
        button.textContent = "Перейти в группу";
    }
});