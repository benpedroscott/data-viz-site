let htmlData = [{
        "short": "longevity",
        "label": "animals",
        "hed": "How do some animals defy age? In nature, size matters",
        "dek": "After Effects, Javascript, FFmpeg, Illustrator, Photoshop",
        "link": "https://www.nationalgeographic.com/magazine/graphics/animal-aging-longevity",
        "asset": "video",
        "color": "white",
    },
    {
        "short": "venus",
        "label": "science",
        "hed": "Venus is volcanically alive, stunning new find shows",
        "dek": "Illustrator, qGIS",
        "link": "https://www.nationalgeographic.com/science/article/venus-is-volcanically-alive",
        "asset": "background-image",
        "color": "black",

    },
    {
        "short": "stingray",
        "label": "animals",
        "hed": "A wildlife first: World's biggest ocean stingray tagged in the wild",
        "dek": "Illustrator",
        "link": "https://www.nationalgeographic.com/animals/article/worlds-biggest-ocean-stingray-tagged-for-first-time",
        "asset": "background-image",
        "color": "white",
    },
    {
        "short": "hawaii",
        "label": "science",
        "hed": "Scientists just mapped Hawaii's volcanic underbelly in stunning detail",
        "dek": "Blender, Illustrator, qGIS, FFmpeg, Javascript",
        "link": "https://www.nationalgeographic.com/science/article/scientists-mapped-hawaiis-volcanic-underbelly-in-stunning-detail",
        "asset": "video",
        "color": "black",
    },
    {
        "short": "starmap",
        "label": "science",
        "hed": "The world's oldest map of the night sky was amazingly accurate",
        "dek": "Illustrator",
        "link": "https://www.nationalgeographic.com/magazine/article/worlds-oldest-map-of-night-sky-amazingly-accurate",
        "asset": "background-image",
        "color": "black",
    },
    {
        "short": "tut",
        "label": "history",
        "hed": "See the enduring power of King Tut as never before",
        "dek": "After Effects, Illustrator, Javascript",
        "link": "https://www.nationalgeographic.com/magazine/graphics/see-the-enduring-power-of-king-tut-as-never-before-feature",
        "asset": "video",
        "color": "black",
    },
    {
        "short": "artemis",
        "label": "science",
        "hed": "A visual guide of NASA's plan to get back to the moon",
        "dek": "Illustrator, qGIS",
        "link": "https://www.nationalgeographic.com/magazine/graphics/a-visual-guide-of-nasas-plan-to-get-back-to-the-moon",
        "asset": "background-image",
        "color": "black",
    },
    {
        "short": "wells",
        "label": "environment",
        "hed": "To find old methane-leaking oil wells, researchers look to history",
        "dek": "qGIS, Map Publisher, GDAL, Illustrator",
        "link": "https://www.nationalgeographic.com/environment/article/to-find-old-methane-leaking-oil-wells-researchers-look-to-history",
        "asset": "background-image",
        "color": "white",
    },
    {
        "short": "stonehenge",
        "label": "history",
        "hed": "See how stones, strength, and smarts built Stonehenge",
        "dek": "Illustrator",
        "link": "https://www.nationalgeographic.com/magazine/graphics/see-how-stones-strength-and-smarts-built-stonehenge-feature",
        "asset": "video",
        "color": "black",
    },
];

function fillHtml() {

    for (let i = 0; i < htmlData.length; i++) {

        let bylineWrapper = document.getElementById("byline-wrapper");

        let bylineEntry = document.createElement("div");
        bylineEntry.setAttribute("class", "byline-entry");

        let bylineBox = document.createElement("div")
        bylineBox.setAttribute("class", `byline-box ${htmlData[i].short} background-image`);

        let bylineTextbox = document.createElement("div")
        bylineTextbox.setAttribute("class", "byline-textbox");

        let entryLabel = document.createElement("p")
        entryLabel.setAttribute("class", `byline-text entry-text-label ${htmlData[i].color}`);

        let entryHed = document.createElement("p")
        entryHed.setAttribute("class", `byline-text entry-text-hed ${htmlData[i].color}`);

        let entryDek = document.createElement("p")
        entryDek.setAttribute("class", `byline-text entry-text-dek ${htmlData[i].color}`);

        let wrapper;
        if (htmlData[i].asset === "video") {
            let entryVideo = document.createElement("video");
            entryVideo.setAttribute("src", `/images/${htmlData[i].short}.mp4`);
            entryVideo.setAttribute("class", "entry-video");
            entryVideo.muted=true;
            entryVideo.loop=true;
            entryVideo.addEventListener("mouseover", function(e){
                entryVideo.play()
            })
            entryVideo.addEventListener("mouseout", function(e){
                entryVideo.pause()
            })

            bylineWrapper
                .appendChild(bylineEntry)
                .appendChild(entryVideo)
            let wrapper =  bylineWrapper
                .appendChild(bylineBox)
                .appendChild(bylineTextbox)

            entryLabel.innerText = htmlData[i].label;
            wrapper.appendChild(entryLabel)
    
            let link = document.createElement("a")
                link.setAttribute("href", htmlData[i].link)
                wrapper.appendChild(link)
                entryHed.innerText = htmlData[i].hed;
                link.appendChild(entryHed);
        
                entryDek.innerText = htmlData[i].dek;
                wrapper.appendChild(entryDek);

        } else {

            let wrapper = bylineWrapper.appendChild(bylineEntry)
                .appendChild(bylineBox)
                .appendChild(bylineTextbox)

                entryLabel.innerText = htmlData[i].label;
                wrapper.appendChild(entryLabel)
        
            let link = document.createElement("a")
                link.setAttribute("href", htmlData[i].link)
                wrapper.appendChild(link)
                entryHed.innerText = htmlData[i].hed;
                link.appendChild(entryHed);
        
                entryDek.innerText = htmlData[i].dek;
                wrapper.appendChild(entryDek);

        }

        // entryLabel.innerText = htmlData[i].label;
        // wrapper.appendChild(entryLabel)

        // let link = document.createElement("a")
        // link.setAttribute("href", htmlData[i].link)
        // wrapper.appendChild(link)
        // entryHed.innerText = htmlData[i].hed;
        // link.appendChild(entryHed);

        // entryDek.innerText = htmlData[i].dek;
        // wrapper.appendChild(entryDek);
    }

}

fillHtml();