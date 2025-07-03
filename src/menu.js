export default foodMenu;

function foodMenu() {
    const contentDiv = document.querySelector("#content");
    const title = Object.assign(
        document.createElement("h1"),
        {className: "name", textContent: "Food Menu"}     
    );
    const headlineDiv = Object.assign(
        document.createElement("div"),
        {className: "headline"}     
    );
    headlineDiv.append(
        Object.assign(document.createElement("p"), {textContent: "Enjoy deleriously"}),
        Object.assign(document.createElement("p"), {textContent: "    Lunatic's food"}),
    );

    const menuList = Object.assign(document.createElement("ul"), {className: "menu"});

    let foodBullet = (name, cost) => {
        let li = document.createElement('li');
        li.append(Object.assign(document.createElement('p'), { textContent: `${name} - $${cost}` })); 
        return li;
    };

    menuList.append(
        foodBullet("Dark Spaghetti", 20),
        foodBullet("Mice's Mozzerilla Pizza", 27),
        foodBullet("Wine of God", 55),
        foodBullet("Tower of Alfredo", 30),
        foodBullet("Soda del Diavolo", 10),
        foodBullet("Vasca Grilled Fishe", 40)
    );

    contentDiv.append(title, headlineDiv, menuList);
}