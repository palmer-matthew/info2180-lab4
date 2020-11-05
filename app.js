window.onload = function(event){
    let button = document.querySelector(".btn");

    button.addEventListener('click', (event) => {
        event.preventDefault();
        
        let data = document.forms[0]["query"].value;
        fetch(`superheroes.php?query=${data}`)
            .then(response => response.text())
            .then(data => {
                let space = document.querySelector("#result");
                if(data.trim() == "SUPERHERO NOT FOUND"){
                    space.classList.add("noresults");
                    space.innerHTML = data.trim();
                }else{
                    space.classList.remove("noresults");
                    space.innerHTML = data.trim(); 
                }
            })
            .catch(error => {
                console.log(error);
            });
    });

};