let htmlData = [
    {
        "short": "ast",
        "label": "science",
        "hed": "These 5 asteroids pose the greatest risk to Earth",
        "dek": "ThreeJS, TheatreJS, Blender, Python, Illustrator",
        "link": "https://www.nationalgeographic.com/premium/graphics/five-asteroids-could-hit-earth",
        "asset": "video",
        "color": "black",
        "role": "I led the development, design and research of the project. I created an accurate 3D model of the solar system, using data from NASA and orbital mechanic formulas."
    },
    {
        "short": "mummy",
        "label": "history",
        "hed": "Step inside an ancient mummfication workshop",
        "dek": "ThreeJS, TheatreJS, Blender, Illustrator, Photoshop, Meshlab, CloudCompare",
        "link": "https://www.nationalgeographic.com/premium/graphics/egypt-mummy-saqqara-excavation-golden-age-feature",
        "asset": "background-image",
        "color": "black",
        "role": "I led the development and design of the project. I developed a reusable and extendable 3D project pipeline and workflow centered on ThreeJS, TheatreJS, and a custom labelling method. I created the 3D model with raw point cloud data in Meshlab and CloudCompare, and I optimized the model for digital usage in Blender. I made the cutaway 3D workshop. I also worked on the print magazine version, making a highly detailed and refined 3D model in Blender."
    },
    {
        "short": "ele",
        "label": "animals",
        "hed": "Elephants are learning to live with us. Can we do the same?",
        "dek": "JavaScript, CSS, HTML",
        "link": "https://www.nationalgeographic.com/premium/graphics/asian-elephants-behavior-coexistence-survival-feature",
        "asset": "background-image",
        "color": "black",
        "role": "As a one developer of a larger team, I implemented bespoke features and designs that worked across all devices. I solved issues around the complex behavior for images being shrunk down as a user scrolls."
    },
    {
        "short": "longevity",
        "label": "animals",
        "hed": "How do some animals defy age? In nature, size matters",
        "dek": "After Effects, JavaScript, FFmpeg, Illustrator, Photoshop",
        "link": "https://www.nationalgeographic.com/magazine/graphics/animal-aging-longevity",
        "asset": "video",
        "color": "white",
        "role": "I converted the assets from print to digital. I animated the intro video and problem-solved a cross-browser method of handling transparent video."
    },
    {
        "short": "venus",
        "label": "science",
        "hed": "Venus is volcanically alive, stunning new find shows",
        "dek": "Illustrator, qGIS",
        "link": "https://www.nationalgeographic.com/science/article/venus-is-volcanically-alive",
        "asset": "background-image",
        "color": "black",
        "role": "Graphics editor"
    },
    {
        "short": "stingray",
        "label": "animals",
        "hed": "A wildlife first: World's biggest ocean stingray tagged in the wild",
        "dek": "Illustrator",
        "link": "https://www.nationalgeographic.com/animals/article/worlds-biggest-ocean-stingray-tagged-for-first-time",
        "asset": "background-image",
        "color": "white",
        "role": "Graphics editor"
    },
    {
        "short": "hawaii",
        "label": "science",
        "hed": "Hawaii's volcanic underbelly in stunning detail",
        "dek": "Blender, Illustrator, qGIS, FFmpeg, JavaScript",
        "link": "https://www.nationalgeographic.com/science/article/scientists-mapped-hawaiis-volcanic-underbelly-in-stunning-detail",
        "asset": "video",
        "color": "black",
        "role": "With a tight two-week deadline, I learned how to combine GIS and Blender without any prior experience in 3D GIS. I also jerry-rigged Blender so it could handle large point cloud GIS data."
    },
    {
        "short": "starmap",
        "label": "science",
        "hed": "The world's oldest map of the night sky was amazingly accurate",
        "dek": "Illustrator",
        "link": "https://www.nationalgeographic.com/magazine/article/worlds-oldest-map-of-night-sky-amazingly-accurate",
        "asset": "background-image",
        "color": "black",
        "role": "Graphics editor"
    },
    {
        "short": "tut",
        "label": "history",
        "hed": "See the enduring power of King Tut as never before",
        "dek": "After Effects, Illustrator, JavaScript",
        "link": "https://www.nationalgeographic.com/magazine/graphics/see-the-enduring-power-of-king-tut-as-never-before-feature",
        "asset": "video",
        "color": "black",
        "role": "I learned After Effects and keyframed many of the artifact animations in the project."
    },
    {
        "short": "artemis",
        "label": "science",
        "hed": "A visual guide of NASA's plan to get back to the moon",
        "dek": "Illustrator, qGIS",
        "link": "https://www.nationalgeographic.com/magazine/graphics/a-visual-guide-of-nasas-plan-to-get-back-to-the-moon",
        "asset": "background-image",
        "color": "black",
        "role": "This was my first project I lead for Nat Geo. I used Illustrator to creat all the stylized assets, including a dozen other detailed rocket models that were scrapped during development. I collaborated with an outside researcher in addition to doing my own research."
    },
    {
        "short": "wells",
        "label": "environment",
        "hed": "To find old methane-leaking oil wells, researchers look to history",
        "dek": "qGIS, Map Publisher, GDAL, Illustrator",
        "link": "https://www.nationalgeographic.com/environment/article/to-find-old-methane-leaking-oil-wells-researchers-look-to-history",
        "asset": "background-image",
        "color": "white",
        "role": "I taught myself the basics of GIS, creating my own shaded relief. I also learned a solid qGIS-to-MapPublisher workflow."
    },
    {
        "short": "stonehenge",
        "label": "history",
        "hed": "See how stones, strength, and smarts built Stonehenge",
        "dek": "Illustrator",
        "link": "https://www.nationalgeographic.com/magazine/graphics/see-how-stones-strength-and-smarts-built-stonehenge-feature",
        "asset": "video",
        "color": "black",
        "role": "I handled all the labelling for the project."
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

        let entryRole = document.createElement("p")
        entryRole.setAttribute("class", `dek`);

        let wrapper;
        if (htmlData[i].asset === "video") {
            let entryVidWrapper = document.createElement("div");
            entryVidWrapper.setAttribute("class", "entry-vid-wrapper")
            let entryVideo = document.createElement("video");
            entryVideo.setAttribute("src", `/images/${htmlData[i].short}.mp4`);
            entryVideo.setAttribute("class", `entry-video entry-video-${htmlData[i].short}`);
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
                .appendChild(entryVidWrapper)
            entryVidWrapper
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

                // entryRole.innerText = htmlData[i].role;
                //     bylineWrapper.appendChild(entryRole);

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

                // entryRole.innerText = htmlData[i].role;
                // bylineWrapper.appendChild(entryRole);

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