export default homeMenu;

function homeMenu() {
    const contentDiv = document.querySelector("#content")
    const title = Object.assign(
        document.createElement("h1"),
        {className: "name", textContent: "Trallallero Trallalà"}     
    );
    const headlineDiv = Object.assign(
        document.createElement("div"),
        {className: "headline"}     
    );
    headlineDiv.append(
        Object.assign(document.createElement("p"), {textContent: "Fine Cuisine in the Night"}),
        Object.assign(document.createElement("p"), {textContent: "You will never eat again anywhere."}), 
        Object.assign(document.createElement("p"), {textContent: "Taste the Supreme."})
    );

    const panelOneDiv = Object.assign(document.createElement("div"),{className: "panel panel-one"});
    panelOneDiv.append(
        Object.assign(document.createElement('img'), {src: './images/spag.jpg', alt: 'spaghetti', className: 'food-img'}),
        Object.assign(document.createElement("p"), {className: "spag", textContent: "Dark Spaghetti"}), 
    )

    const panelTwoDiv = Object.assign(document.createElement("div"),{className: "panel panel-two"});
    panelTwoDiv.append(
        Object.assign(document.createElement("p"), {className: "pizza", textContent: "Mice's Mozzerilla Pizza"}),
        Object.assign(document.createElement('img'), {src: './images/pizza.webp', alt: 'pizza', className: 'food-img'}), 
    )

    const panelThreeDiv = Object.assign(document.createElement("div"),{className: "panel panel-three"});
    panelThreeDiv.append(
        Object.assign(document.createElement('img'), {src: './images/wine.jpg', alt: 'wine and cheese on table', className: 'food-img'}),
        Object.assign(document.createElement("p"), {className: "wine", textContent: "Wine from God"}), 
    )

    contentDiv.append(title, headlineDiv, panelOneDiv, panelTwoDiv, panelThreeDiv);
}
 