// WRITE YOUR CODE IN HERE:
const container = document.querySelector('#container');
for (let i = 0; i < 100; i++) {
    const bt = document.createElement('button');
    bt.innerHTML = "Hey!";
    container.appendChild(bt);
}