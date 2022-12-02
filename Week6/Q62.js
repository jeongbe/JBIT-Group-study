const username = document.querySelector('#username');
const h1 = document.querySelector('h1');

username.addEventListener('input', function() {
    const username = username.value;
    h1.innerText = `Welcome, ${username}`;
    if(username.length === 0) {
        h1.innerText = 'Enter Your Username';
    }
})