export default contact;

function contact() {
    const contentDiv = document.querySelector("#content");
    const title = Object.assign(
        document.createElement("h1"),
        {className: "name", textContent: "Contact the Hand of God"}     
    );
    const headlineDiv = Object.assign(
        document.createElement("div"),
        {className: "headline"}     
    );
    headlineDiv.append(
        Object.assign(document.createElement("p"), {textContent: "Food made only from a Touch of God..."}),
    );

    const contactDiv = Object.assign(document.createElement("div"), {className: "contact"});

    let foodBullet = (name, cost) => {
        let li = document.createElement('li');
        li.append(Object.assign(document.createElement('p'), { textContent: `${name} - $${cost}` })); 
        return li;
    };

    contactDiv.append(
        Object.assign(document.createElement("p"), {textContent: "Email: tralalelo@cook.li"}),
        Object.assign(document.createElement("p"), {textContent: "Phone: 222-666-7777"}),
        Object.assign(document.createElement("a"), {textContent: "Give us feedback", href: ""}),
    );

    contentDiv.append(title, headlineDiv, contactDiv);
}