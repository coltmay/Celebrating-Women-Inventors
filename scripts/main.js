console.log("Welcome to the main module")

const getListofWomenInventors = () => {
    return fetch("https://gist.githubusercontent.com/brendalong/ab2424b0069ed0dd56b01951462a109d/raw/716c0776c45adea089644cffa7eadab139f9f47c/womensday.json")
        .then(response => response.json())
};

const womenHTML = (women) => {
    return (
        `
        <h3>Inventor: ${women.inventor}</h3>
        <h3>Invention: ${women.invention}</h3>
        <p>More details: ${women.moreDetails}</p>
        `
    )
};

const womenHTMLLocation = document.querySelector(".container");

const womenList = () => {
    getListofWomenInventors()
        .then(womenArray => {
            debugger
            let womenHTMLRepresentation = "";
            
            for (let aWoman of womenArray) {
                console.log("womenList is exectuting");
                womenHTMLRepresentation += womenHTML(aWoman);
            }
            womenHTMLLocation.innerHTML = womenHTMLRepresentation;
        })
};

womenList();