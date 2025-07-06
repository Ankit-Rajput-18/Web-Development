console.log("hello")
random = Math.random();

document.querySelectorAll(".box").forEach(e => {

    if (random < 0.11) {
        e.style.backgroundColor = "green"
        e.style.color = "violet"

    }
    else if (random > 0.11 && random < 0.22) {
        e.style.backgroundColor = "yellow"
        e.style.color = "grey"

    }
    else if (random > 0.22 && random < 0.33) {
        e.style.backgroundColor = "red"
        e.style.color = "brown"

    }
    else if (random > 0.33 && random < 0.44) {
        e.style.backgroundColor = "blue"
        e.style.color = "red"

    }
    else if (random > 0.44 && random < 0.55) {
        e.style.backgroundColor = "pink"
        e.style.color = "purple"

    }
    else if (random > 0.55 && random < 0.66) {
        e.style.backgroundColor = "orange"
        e.style.color = "blue"

    }
    else if (random > 0.66 && random < 0.77) {
        e.style.backgroundColor = "black"
        e.style.color = "white"

    } else if (random > 0.77 && random < 0.88) {
        e.style.backgroundColor = "brown"
        e.style.color = "yellow"

    } else if (random > 0.88 && random < 1) {
        e.style.backgroundColor = "grey"
        e.style.color = "green"

    }
    else {
        e.style.backgroundColor = "violet"
        e.style.color = "pink"

    }
})
