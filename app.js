window.onload = function(event){
    let button = document.querySelector(".btn");

    button.addEventListener('click', (event) => {
        event.preventDefault();
        
        let data = document.forms[0]["query"].value;
        fetch(`superheroes.php?query=${data}`)
            .then(response => response.text())
            .then(data => {
                let space = document.querySelector("#result");
                space.innerHTML = data; 
                //console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
    });

};