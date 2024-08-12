const clickcapybara = document.querySelector(".clickcapybara");
const allscore = document.querySelector(".allscore");
const showpersec = document.querySelector(".showpersec");
let scoreperclick = document.querySelectorAll(".scoreperclick");
let clickoption = document.querySelectorAll(".clickoption");
const boxoption = document.querySelector(".boxoption");
const menu = document.getElementById("menu");

let x = 0;
let y = 0;
let score = 0;
let capybaraperclick = 1;
let autoclick = 0;
let arrimgcapybara = ["./images/capybara2.png","./images/capybara3.png","./images/capybara4.png","./images/capybara5.png","./images/capybara6.png","./images/capybara7.png","./images/capybara8.png","./images/capybara9.png"];
let arrcheckimgcapybara = arrimgcapybara.map(e => 0);

function showScorePerClick(event) {
    x = event.clientX;
    y = event.clientY;

    const span = document.createElement("span");
    span.className = "scoreperclick";
    span.style.position = "absolute";
    span.style.left = x + "px";
    span.style.top = y + "px";
    span.style.color = "#fff";
    span.style.pointerEvents = "none";
    span.innerHTML = "+" + showNumber(capybaraperclick);

    span.classList.add("addaniscoreperclick");

    document.body.appendChild(span);

    span.addEventListener("animationend",() => {
        span.remove();
    });

    scoreperclick = document.querySelectorAll(".scoreperclick");
}

function checkOption(e) {
    if (e.id == "autoclick") {
        score -= parseInt(e.children[2].id);
        autoclick += 1;
        showpersec.innerHTML = showNumber(autoclick) + " capybara per sec.";
    }
    else if (e.id == "click") {
        score -= parseInt(e.children[2].id);
        capybaraperclick += 1;
    }
    else if (e.id == "capybaraaa") {
        score -= parseInt(e.children[2].id);
        autoclick += 25;
        showpersec.innerHTML = showNumber(autoclick) + " capybara per sec.";
    }
    else if (e.id == "steelcursor") {
        score -= parseInt(e.children[2].id);
        capybaraperclick += 50;
    }
    else if (e.id == "capybarafamily") {
        score -= parseInt(e.children[2].id);
        autoclick += 2000;
        showpersec.innerHTML = showNumber(autoclick) + " capybara per sec.";
    }
    else if (e.id == "capybarafamily") {
        score -= parseInt(e.children[2].id);
        autoclick += 2000;
        showpersec.innerHTML = showNumber(autoclick) + " capybara per sec.";
    }
    else if (e.id == "capybarafarm") {
        score -= parseInt(e.children[2].id);
        autoclick += 25000;
        showpersec.innerHTML = showNumber(autoclick) + " capybara per sec.";
    }
    else if (e.id == "capybaratemple") {
        score -= parseInt(e.children[2].id);
        autoclick += 200000;
        showpersec.innerHTML = showNumber(autoclick) + " capybara per sec.";
    }
    else if (e.id == "goldencursor") {
        score -= parseInt(e.children[2].id);
        capybaraperclick += 500000;
    }
    else if (e.id == "capybaratown") {
        score -= parseInt(e.children[2].id);
        autoclick += 45000000;
        showpersec.innerHTML = showNumber(autoclick) + " capybara per sec.";
    }
    else if (e.id == "capybaracontinent") {
        score -= parseInt(e.children[2].id);
        autoclick += 650000000;
        showpersec.innerHTML = showNumber(autoclick) + " capybara per sec.";
    }
    else if (e.id == "diamondcursor") {
        score -= parseInt(e.children[2].id);
        capybaraperclick += 800000000;
    }
    else if (e.id == "capybaraplanet") {
        score -= parseInt(e.children[2].id);
        autoclick += 10000000000;
        showpersec.innerHTML = showNumber(autoclick) + " capybara per sec.";
    }
    else if (e.id == "capybaragalaxy") {
        score -= parseInt(e.children[2].id);
        autoclick += 300000000000;
        showpersec.innerHTML = showNumber(autoclick) + " capybara per sec.";
    }
    else if (e.id == "capybarauniverse") {
        score -= parseInt(e.children[2].id);
        autoclick += 10000000000000;
        showpersec.innerHTML = showNumber(autoclick) + " capybara per sec.";
    }
}

function resetScoreAndResetStypeOption() {
    allscore.innerHTML = showNumber(score);
    clickoption.forEach(e => {
        if (score >= parseInt(e.children[2].id)) {
            e.style.pointerEvents = "unset";
            e.style.cursor = "pointer";
            e.style.backgroundColor = "#fff";
            e.children[2].style.color = "#fac11f";
        }
        else{
            e.style.pointerEvents = "none";
            e.style.backgroundColor = "#9a9898";
            e.children[2].style.color = "#000";
        }
    });
}

function showNumber(num) {
    let numtext = num + "";
    let text = "";
    if (num >= 0) {
        text = `${num}`;
    }
    if (num >= 1000) {
        text = `${numtext[0]}.${numtext[1]}${numtext[2]}K`;
    }
    if (num >= 10000) {
        text = `${numtext[0]}${numtext[1]}.${numtext[2]}${numtext[3]}K`;
    }
    if (num >= 100000) {
        text = `${numtext[0]}${numtext[1]}${numtext[2]}.${numtext[3]}${numtext[4]}K`;
    }
    if (num >= 1000000) {
        text = `${numtext[0]}.${numtext[1]}${numtext[2]}M`;
    }
    if (num >= 10000000) {
        text = `${numtext[0]}${numtext[1]}.${numtext[2]}${numtext[3]}M`;
    }
    if (num >= 100000000) {
        text = `${numtext[0]}${numtext[1]}${numtext[2]}.${numtext[3]}${numtext[4]}M`;
    }
    if (num >= 1000000000) {
        text = `${numtext[0]}.${numtext[1]}${numtext[2]}B`;
    }
    if (num >= 10000000000) {
        text = `${numtext[0]}${numtext[1]}.${numtext[2]}${numtext[3]}B`;
    }
    if (num >= 100000000000) {
        text = `${numtext[0]}${numtext[1]}${numtext[2]}.${numtext[3]}${numtext[4]}B`;
    }
    if (num >= 1000000000000) {
        text = `${numtext[0]}.${numtext[1]}${numtext[2]}t`;
    }
    if (num >= 10000000000000) {
        text = `${numtext[0]}${numtext[1]}.${numtext[2]}${numtext[3]}t`;
    }
    if (num >= 100000000000000) {
        text = `${numtext[0]}${numtext[1]}${numtext[2]}.${numtext[3]}${numtext[4]}t`;
    }
    if (num >= 1000000000000000) {
        text = `${numtext[0]}.${numtext[1]}${numtext[2]}q`;
    }
    if (num >= 10000000000000000) {
        text = `${numtext[0]}${numtext[1]}.${numtext[2]}${numtext[3]}q`;
    }
    if (num >= 100000000000000000) {
        text = `${numtext[0]}${numtext[1]}${numtext[2]}.${numtext[3]}${numtext[4]}q`;
    }

    return(text);
}

function newCapybara(path) {
    clickcapybara.classList.add("addnewcapybara");
    clickcapybara.src = path;
    clickcapybara.addEventListener("animationend",() => {
        clickcapybara.classList.remove("addnewcapybara");
        clickcapybara.classList.add("aniloadcapybara");
        clickcapybara.addEventListener("animationend",() => {
            clickcapybara.classList.remove("aniloadcapybara");
            clickcapybara.classList.remove("addaniclickcapybara");
        });
    });
}

function changeNewCapybara() {
    if (score >= 1000 && arrcheckimgcapybara[0] == 0) {
        newCapybara(arrimgcapybara[0]);
        arrcheckimgcapybara[0] = 1;
    }
    else if (score >= 10000 && arrcheckimgcapybara[1] == 0) {
        newCapybara(arrimgcapybara[1]);
        arrcheckimgcapybara[1] = 1;
    }
    else if (score >= 100000 && arrcheckimgcapybara[2] == 0) {
        newCapybara(arrimgcapybara[2]);
        arrcheckimgcapybara[2] = 1;
    }
    else if (score >= 1000000 && arrcheckimgcapybara[4] == 0) {
        newCapybara(arrimgcapybara[4]);
        arrcheckimgcapybara[4] = 1;
    }
    else if (score >= 1500000 && arrcheckimgcapybara[3] == 0) {
        newCapybara(arrimgcapybara[3]);
        arrcheckimgcapybara[3] = 1;
    }
    else if (score >= 10000000000000 && arrcheckimgcapybara[5] == 0) {
        newCapybara(arrimgcapybara[5]);
        arrcheckimgcapybara[5] = 1;
    }
    else if (score >= 250000000000000 && arrcheckimgcapybara[6] == 0) {
        newCapybara(arrimgcapybara[6]);
        arrcheckimgcapybara[6] = 1;
    }
    else if (score >= 5000000000000000 && arrcheckimgcapybara[7] == 0) {
        newCapybara(arrimgcapybara[7]);
        arrcheckimgcapybara[7] = 1;
    }
}

//!click capybara

clickcapybara.addEventListener("click",(event) => {
    showScorePerClick(event);
    score += capybaraperclick;
    resetScoreAndResetStypeOption();

    clickcapybara.classList.add("addaniclickcapybara");
    clickcapybara.addEventListener("animationend",() => {
        clickcapybara.classList.remove("addaniclickcapybara");
    });
});

//!

//!click option

clickoption.forEach(e => {
    e.addEventListener("click",() => {
        if (score >= parseInt(e.children[2].id)) {
            checkOption(e);
            resetScoreAndResetStypeOption();

            e.classList.add("addaniclickoption");
            e.addEventListener("animationend",() => {
                e.classList.remove("addaniclickoption");
            });
        }
    });
    e.addEventListener("click",() => {
        //:)
    });
});

//!

//!auto click

setInterval(() => {
    score += autoclick;
    resetScoreAndResetStypeOption();
    changeNewCapybara();
},1000);

//!

//!open menu

menu.addEventListener("click",() => {
    boxoption.style.display = "block";
});

//!

//!close option

window.document.addEventListener("click",(event) => {
    if (window.innerWidth <= 660) {
        if (event.target.className != "boxoption" && event.target.className != "clickoption addaniclickoption" && event.target.id != "menu") {
            boxoption.style.display = "none";
        }
    }
    else{
        boxoption.style.display = "block";
    }
});

//!