// dom variables
var no_downs = document.getElementById("Down_No");
var down_game = document.getElementById("down_game");
const download = document.getElementById("download");
let content = document.getElementById("content");
let options = document.getElementById("options");

// user defined variables
var Billion = "";
var no_of_clicks = parseFloat(localStorage.getItem("no_of_downloads"));
var add = 1

// hovering over no button to affect yes button
var yes = document.getElementById("yes");
var no = document.getElementById("no");
var blur = document.getElementById("blur");

// function to display updated number of downloads
const clicked = () => {
    no_of_clicks = no_of_clicks + add;

    // for thousands "K"
    if (no_of_clicks > 1000 && no_of_clicks < 1000000) {
        Billion = "K";
        add = 1 / 1000;
        no_of_clicks = (no_of_clicks / 1000);
    }
    // for millions "M"
    if (no_of_clicks > 1000000 && no_of_clicks < 1000000000) {
        no_of_clicks = (no_of_clicks / 1000000);
        Billion = "M";
        add = 1 / 1000000;
    }
    // for billions "B"
    if (no_of_clicks > 1000000000) {
        no_of_clicks = (no_of_clicks / 1000000000);
        Billion = "B";
        add = 1 / 1000000000;
    }
    console.log("add",add);
    console.log(no_of_clicks);

    // and finally updating the numbers

    localStorage.setItem("no_of_downloads", no_of_clicks);
    
    no_of_clicks = parseFloat(localStorage.getItem("no_of_downloads"));
    // localStorage.setItem("no_of_downloads", no_of_clicks);

    var final_down = parseFloat(localStorage.getItem("no_of_downloads")).toFixed(2) + Billion;
    localStorage.setItem("no_of_downloads", final_down);

    no_downs.innerHTML = localStorage.getItem("no_of_downloads");
    // down_game.innerHTML = no_of_clicks;
};

// adding click event listener to the download button
yes.addEventListener("click", clicked);

// combining simple float numbers with Millions and billions ...umm, okay even thousands
if (no_of_clicks > 1000 && no_of_clicks < 1000000) {
    no_of_clicks = (no_of_clicks / 1000);
    Billion = "K";
    add = 1 / 1000
}
if (no_of_clicks > 1000000 && no_of_clicks < 1000000000) {
    no_of_clicks = (no_of_clicks / 1000000);
    Billion = "M";
    add = 1 / 1000000
}
if (no_of_clicks > 1000000000) {
    no_of_clicks = (no_of_clicks / 1000000000);
    Billion = "B";
    add = 1 / 1000000000
}

// defining the value of no_downs by default
no_downs.innerHTML = (localStorage.getItem("no_of_downloads") + Billion);
var con_empty = 0;

// the three lines that trigger an animation
const menu = () => {
    if (con_empty == 0) {
        content.style.animation = "content 1s forwards";
        con_empty = 1
    }
    else {
        content.style.animation = "content1 1s forwards";
        con_empty = 0
    }
}

options.addEventListener("click", menu);

// dark and white mode

var mode = document.getElementById("mode");
var dot = document.getElementById("dot");
let empty = 0
let root = document.querySelector(":root");

// function for altering modes
const dark_mode = () => {
    // white mode
    if (empty == 0) {

        mode.style.animation = "mode 1.5s forwards";
        dot.style.animation = "dot 1.5s forwards";

        root.style.setProperty("--black_star", "--white_star");
        root.style.setProperty("--white", "black");
        root.style.setProperty("--black_game", "rgb(239,239,239");
        root.style.setProperty("--white_name", "black");
        root.style.setProperty("--black_font", "14px");
        root.style.setProperty("--white_intro_p", "black");
        root.style.setProperty("--black_intro", "rgba(203, 204, 203, 0.452)");
        root.style.setProperty("--black_title", "rgba(163, 163, 163, 0.477)");
        root.style.setProperty("--black_end", "rgba(163, 163, 163, 0.477)");
        root.style.setProperty("--white_gray", "rgba(35, 35, 35, 0.542)");

        empty = 1
    }
    // dark mode
    else if (empty == 1) {

        mode.style.animation = "mode1 1.5s forwards";
        dot.style.animation = "dot1 1.5s forwards";

        root.style.setProperty("--black_star", "rgb(52,51,51)");
        root.style.setProperty("--white", "white");
        root.style.setProperty("--black_game", "rgba(0,0,0,1)");
        root.style.setProperty("--white_name", "rgb(213, 212, 212)");
        root.style.setProperty("--black_font", "13px");
        root.style.setProperty("--white_intro_p", "rgb(201,201,201)");
        root.style.setProperty("--black_intro", "rgba(3, 2, 2, 0.452)");
        root.style.setProperty("--black_title", "rgba(0, 0, 0, 0.477)");
        root.style.setProperty("--black_end", "rgb(93, 92, 92)");
        root.style.setProperty("--white_gray", "rgba(160, 160, 160, 0.603)");

        empty = 0
    }
}

mode.addEventListener("click", dark_mode);
dot.addEventListener("click", dark_mode);

// download confirmation
let download_ui = document.getElementById("download_ui");

const down_ui_1 = () => {
    if (download_ui.style.opacity == 0) {

        // download button
        download_ui.style.visibility = "visible";
        download_ui.style.opacity = 1;

        // blur on the screen
        blur.style.visibility = "visible";
        blur.style.opacity = 1;
    }
}

download.addEventListener("click", down_ui_1)

const hovering = () => {
    yes.style.backgroundColor = "rgba(255,149,0,0.782)";
    yes.style.padding = "10px";
}

const hovering1 = () => {
    yes.style.backgroundColor = "white";
    yes.style.padding = "10px";
    yes.style.paddingLeft = "20px";
    yes.style.paddingRight = "20px";
}

const hovering2 = () => {
    yes.style.backgroundColor = "lime";
    yes.style.padding = "20px";
    yes.style.paddingLeft = "25px";
    yes.style.paddingRight = "25px";
}

// download file by clicking on yes
const download_yes = () => {
    const anchor = document.createElement("a");
    anchor.href = "games/coin tennis/1.0 Coin Tennis.rar";
    anchor.download = "1.0 Coin Tennis.rar";

    document.body.appendChild(anchor);

    anchor.click();

    document.body.removeChild(anchor);

    if (download_ui.style.opacity != 0) {

        // download button
        download_ui.style.visibility = "hidden";
        download_ui.style.opacity = 0;

        // blur on the screen
        blur.style.visibility = "hidden";
        blur.style.opacity = 0;
    }
}

const down_ui_2 = () => {
    if (download_ui.style.opacity != 0) {

        // download button
        download_ui.style.visibility = "hidden";
        download_ui.style.opacity = 0;

        // blur on the screen
        blur.style.visibility = "hidden";
        blur.style.opacity = 0;
    }
}

no.addEventListener("mouseover", hovering);
no.addEventListener("mouseleave", hovering1);
no.addEventListener("click", down_ui_2);
yes.addEventListener("mouseover", hovering2);
yes.addEventListener("mouseleave", hovering1);
yes.addEventListener("click", download_yes);

// search bar

let search = document.querySelector("input")
let search_elements = document.getElementById("search_elements");
let search_no = document.getElementById("search_no");

const search_blur = () => {
    prompt(search.value);
}

const search_enter = (e) => {
    if (e.key === "Enter") {

        let search_low = search.value.toLowerCase();
        let search_space = search_low.replace(" ", "")
        const search_list = ["cointennis", "coin", "bestgame", "gta6"];

        if (search_list.includes(search_space)) {

            // opacity of search elements
            search_elements.style.visibility = "visible";
            search_elements.style.opacity = 1;

            // opacity of search not found
            search_no.style.visibility = "hidden";
            search_no.style.opacity = 0;
        }
        else {
            // opacity of search elements
            search_elements.style.visibility = "hidden";
            search_elements.style.opacity = 0;

            // opacity of search not found
            search_no.style.visibility = "visible";
            search_no.style.opacity = 1;
        }
    }
}

// search.addEventListener("blur", search_blur);
search.addEventListener("keypress", search_enter);