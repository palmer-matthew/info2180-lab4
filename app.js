window.onload = function(event){
    let button = document.querySelector(".btn");

    button.addEventListener('click', (event) => {
        event.preventDefault();
        
        fetch('superheroes.php')
            .then(response => response.text())
            .then(data => {
                alert(data);
            })
            .catch(error => {
                console.log(error);
            });
    });

};