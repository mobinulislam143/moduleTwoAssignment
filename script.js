// ------Task 1------
const myDiv = document.getElementById("myDiv");
const myButton = document.getElementById("myButton");
myButton.onclick = function () {
    // var imageElement = document.createElement("img");
    // imageElement.src = "image1.jpg";
    // var divElement = document.getElementById("myDiv");
    // divElement.appendChild(imageElement);
    myDiv.innerHTML = "I am your student of Mern-4 batch."
}


// ------Task 2------
let result = document.getElementById("count")
let count = 0
function next() {
    count++
    result.innerText = count
    if (count > 0) {
        result.style.color = 'green'
    }
}
function prev() {
    count--
    result.textContent = count
    if (count < 0) {
        result.style.color = 'red'
    }
}

// ------Task 3------

const image = document.getElementById('image');
function firstBtn() {
    image.src = 'image1.jpg';
}
function scndBtn() {
    image.src = 'image2.jpg';

}

// ------Task 4------
let url = "https://jsonplaceholder.typicode.com/posts"
function fetchData() {
    let golog = document.getElementById('golog')
    golog.innerText="Sir! Please Go to Console and you can see your data."
    fetch(url)
        .then(res => res.json())
        .then(jsonData => console.log(jsonData))
}