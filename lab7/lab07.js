const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];
function contain(num){

    var containDiv = document.createElement("div");
    containDiv.setAttribute("class","item");

    var personDiv = document.createElement("div");
    personDiv.setAttribute("class","inner-box");

    var photoDiv = document.createElement("div");
    photoDiv.setAttribute("class","inner-box");

    var title = document.createElement("h4");
    var node1 = document.createTextNode("Genre : "+ works[num].tips);
    title.appendChild(node1);
    containDiv.appendChild(title);

    var person = document.createElement("h3");
    person.style.display = "inline";
    var node2 = document.createTextNode(works[num].author);
    person.appendChild(node2);
    var lifetime = document.createElement("h5");
    lifetime.innerHTML = "&nbsp;&nbsp;&nbsp;lifetime:" + works[num].lifetime;
    lifetime.style.display = "inline";
    personDiv.appendChild(person);
    personDiv.appendChild(lifetime);
    containDiv.appendChild(personDiv);

    var photoTitle = document.createElement("h3");
    var node3 = document.createTextNode("Popular Photos");
    photoTitle.appendChild(node3);
    photoDiv.appendChild(photoTitle);
    for(var i = 0 ; i < works[num].photos.length ; i++){
        var image = document.createElement("img");
        image.setAttribute("class","photo");
        image.setAttribute("src",works[num].photos[i]);
        photoDiv.appendChild(image);
    }
    containDiv.appendChild(photoDiv);

    var button = document.createElement("button");
    var node4 = document.createTextNode("Visit");
    button.appendChild(node4);
    containDiv.appendChild(button);
    document.body.appendChild(containDiv);
}
for(var i = 0;i<works.length;i++){
    contain(i);
}