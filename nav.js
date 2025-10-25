// Global Data
const pageLinkDisplay = ["Home", "About Me"];
const pageAnchors = ["./index.html", "./about.html"];

function getCurrentFilePath() {
    return window.location.pathname;
}

function createNavigation() {
    const header = document.getElementsByTagName("header")[0];
    
    const nav = document.createElement("nav");
    
    const ul = document.createElement("ul");
    
    for (let i = 0; i < pageAnchors.length; i++) {
        let li = document.createElement("li");
        
        let a = document.createElement("a");
        
        let userInCurrentPage = pageAnchors[i] === getCurrentFilePath();
        
        if (userInCurrentPage) {
            a.classList.add("active-page");
        } else {
            a.setAttribute("href", pageAnchors[i]);
        }
        
        a.innerHTML = pageLinkDisplay[i];
        
        li.appendChild(a);
        ul.appendChild(li);
    }
    
    nav.appendChild(ul);
    header.appendChild(nav);
    // console.log(header);
}

function insertFooterContent() {
    let footer = document.getElementsByTagName("footer")[0];
    footer.innerHTML = "&copy;2026 Daniel Derrick Calisura";
}

createNavigation();
insertFooterContent();