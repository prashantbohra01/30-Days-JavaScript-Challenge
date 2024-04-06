const image = document.querySelector(".container"),
    heartIcon = document.querySelector(".heart");

    image.addEventListener("dblclick", e => {
        heartIcon.classList.add('active');

        setTimeout(() =>{
            heartIcon.classList.remove('active');
        },1000)
    });