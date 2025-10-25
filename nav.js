// Global Data
const pageLinkDisplay = ["Home", "About Me"];
const navPageAnchors = ["./index.html", "./about.html"];
const pageAnchors = [
    "./index.html",
    "./about.html",
    "./disciplines/digital_art.html",
    "./disciplines/music.html",
    "./disciplines/programming.html",
];

function getCurrentFilePath() {
    return window.location.pathname;
}

function test() {
    let testp = document.getElementById("test");
    
    testp.innerHTML = getCurrentFilePath();
}

test();

function createNavigation() {
    const header = document.getElementsByTagName("header")[0];
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    
    for (let i = 0; i < navPageAnchors.length; i++) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        
        let userInCurrentPage = navPageAnchors[i] === getCurrentFilePath();
        userInCurrentPage ||= navPageAnchors[i] === "." + getCurrentFilePath();
        
        if (userInCurrentPage) {
            // Set as active page
            a.classList.add("active-page");
        } else {
            // Add anchor
            a.setAttribute("href", navPageAnchors[i]);
        }
        
        // Set link display
        a.innerHTML = pageLinkDisplay[i];
        
        li.appendChild(a);
        ul.appendChild(li);
    }
    
    nav.appendChild(ul);
    header.appendChild(nav);
}

function insertFooterContent() {
    let footer = document.getElementsByTagName("footer")[0];
    footer.innerHTML = "&copy;2026 Daniel Derrick Calisura";
}

createNavigation();
insertFooterContent();