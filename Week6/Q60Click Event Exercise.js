const hBtn = document.getElementById('hello');
const byBtn = document.getElementById('goodbye');

hBtn.addEventListener('click', () => {
    console.log("hello");
})
byBtn.addEventListener('click', () => {
    console.log("goodbye");
})