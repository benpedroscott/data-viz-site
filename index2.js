import { htmlData } from "./data.js"

let section1 = document.getElementById("section-1");
let section2 = document.getElementById("section-2");
let section3 = document.getElementById("section-3");
let bylineEntry, bylineBox, bylineTextbox, entryLabel, entryHed, entryDek, entryRole;

document.addEventListener("DOMContentLoaded", initData);

function initData() {
    for (let i in htmlData) {
        let entry = htmlData[i];
        let section = initSection(entry.lvl);
        let sectionEntryWrapper = document.createElement("div")
        sectionEntryWrapper.setAttribute("class", "entry-wrapper")
        let sectionEntry = section.appendChild(sectionEntryWrapper)
        fillHtml(entry, sectionEntryWrapper)
    }
}

function initSection(i) {
    switch(i){
        case 1:
            return section1
        case 2:
            return section2
        case 3:
            return section3
    }
}

function fillHtml(entry, section) {
    bylineEntry = document.createElement("div");
    bylineEntry.setAttribute("class", "byline-entry");

    bylineBox = document.createElement("div")
    bylineBox.setAttribute("class", `byline-box ${entry.short} background-image`);

    bylineTextbox = document.createElement("div")
    bylineTextbox.setAttribute("class", "byline-textbox");

    entryLabel = document.createElement("p")
    entryLabel.setAttribute("class", `byline-text entry-text-label ${entry.color}`);

    entryHed = document.createElement("p")
    entryHed.setAttribute("class", `byline-text entry-text-hed ${entry.color}`);

    entryDek = document.createElement("p")
    entryDek.setAttribute("class", `byline-text entry-text-dek ${entry.color}`);

    entryRole = document.createElement("p")
    entryRole.setAttribute("class", `dek`);
    switch(entry.asset){
        case "video":
            vid(entry, section)
        case "background-image":
            img(entry, section)
    }
}

function vid(entry, section) {

    let link = document.createElement("a")
        link.setAttribute("href", entry.link)
        
    
    let entryVidWrapper = document.createElement("div");
    entryVidWrapper.setAttribute("class", "entry-vid-wrapper")
    link.appendChild(entryVidWrapper)
    let entryVideo = document.createElement("video");
    entryVideo.setAttribute("src", `/images/${entry.short}.mp4`);
    entryVideo.setAttribute("class", `entry-video entry-video-${entry.short}`);
    entryVideo.muted=true;
    entryVideo.loop=true;
    entryVideo.addEventListener("mouseover", function(e){
        entryVideo.play()
    })
    entryVideo.addEventListener("mouseout", function(e){
        entryVideo.pause()
    })

    section
        .appendChild(bylineEntry)
    section.appendChild(link)
    entryVidWrapper
        .appendChild(entryVideo)
    let wrapper =  section
        .appendChild(bylineBox)
        .appendChild(bylineTextbox)

    entryLabel.innerText = entry.label;
    wrapper.appendChild(entryLabel)

    // let link = document.createElement("a")
    //     link.setAttribute("href", entry.link)
    //     wrapper.appendChild(link)
    //     entryHed.innerText = entry.hed;
    //     link.appendChild(entryHed);

    //     entryDek.innerText = entry.dek;
    //     wrapper.appendChild(entryDek);

}

function img(entry, section) {

    let link = document.createElement("a")
        link.setAttribute("href", entry.link)
    
    section.appendChild(link)
        .appendChild(bylineBox)
    
    let wrapper = link.appendChild(bylineEntry)
    .appendChild(bylineTextbox)

    entryLabel.innerText = entry.label;
    wrapper.appendChild(entryLabel)

    // let link = document.createElement("a")
    //     link.setAttribute("href", entry.link)
    //     wrapper.appendChild(link)
        entryHed.innerText = entry.hed;
        wrapper.appendChild(entryHed);

        entryDek.innerText = entry.dek;
        wrapper.appendChild(entryDek);  

    // entryRole.innerText = entry.role;
    // section.appendChild(entryRole);

}
