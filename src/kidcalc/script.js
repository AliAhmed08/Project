function welcome() {
    const name = document.getElementById("name").value;
    if(name !== null && name !== ""){
        document.getElementById("welcome").innerText = "Welcome " + name;
 }
}
function theme(){
    const theme = document.getElementById("select");
    const body = document.querySelector("body");
    const login = document.getElementById("login");
    const calculator = document.getElementById("calculator");
    const info = document.getElementById("info");

    if(theme.value == "Default"){
        body.classList.remove("cars-body");
        body.classList.remove("space-body");
        body.classList.remove("dinasours-body");
        body.classList.add("body");

        login.classList.remove("cars-login");
        login.classList.remove("space-login");
        login.classList.remove("dinasours-login");
        login.classList.add("login");

        calculator.classList.remove("cars-calculator");
        calculator.classList.remove("space-calculator");
        calculator.classList.remove("dinasours-calculator");
        calculator.classList.add("calculator");

        info.classList.remove("cars-info");
        info.classList.remove("space-info");
        info.classList.remove("dinasours-info");
        info.classList.add("info");
    }
    else if(theme.value == "Dinasours"){
        body.classList.remove("cars-body");
        body.classList.remove("space-body");
        body.classList.remove("body");
        body.classList.add("dinasours-body");

        login.classList.remove("cars-login");
        login.classList.remove("space-login");
        login.classList.remove("login");
        login.classList.add("dinasours-login");

        calculator.classList.remove("cars-calculator");
        calculator.classList.remove("space-calculator");
        calculator.classList.remove("calculator");
        calculator.classList.add("dinasours-calculator");

        info.classList.remove("cars-info");
        info.classList.remove("space-info");
        info.classList.remove("info");
        info.classList.add("dinasours-info");
    }
    else if(theme.value == "Space"){
        body.classList.remove("cars-body");
        body.classList.remove("dinasours-body");
        body.classList.remove("body");
        body.classList.add("space-body");

        login.classList.remove("cars-login");
        login.classList.remove("dinasours-login");
        login.classList.remove("login");
        login.classList.add("space-login");

        calculator.classList.remove("cars-calculator");
        calculator.classList.remove("dinasours-calculator");
        calculator.classList.remove("calculator");
        calculator.classList.add("space-calculator");

        info.classList.remove("cars-info");
        info.classList.remove("dinasours-info");
        info.classList.remove("info");
        info.classList.add("space-info");
    }
    else if(theme.value == "Cars"){
        body.classList.remove("space-body");
        body.classList.remove("dinasours-body");
        body.classList.remove("body");
        body.classList.add("cars-body");

        login.classList.remove("space-login");
        login.classList.remove("dinasours-login");
        login.classList.remove("login");
        login.classList.add("cars-login");

        calculator.classList.remove("space-calculator");
        calculator.classList.remove("dinasours-calculator");
        calculator.classList.remove("calculator");
        calculator.classList.add("cars-calculator");

        info.classList.remove("space-info");
        info.classList.remove("dinasours-info");
        info.classList.remove("info");
        info.classList.add("cars-info");
    }
}
    


