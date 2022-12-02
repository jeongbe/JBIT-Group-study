const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const span = document.querySelectorAll('span')
let color = 0;
for (let rainbow of span) {
    rainbow.style.color = colors[color];
    color++;
}
