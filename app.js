const colors = ['red', 'green', 'rgb(255, 127, 80)', 'rgb(123, 237, 159)' , 'yellow'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    const randomNumbers = getRandomNumber();
    console.log(randomNumbers)//just to check
    document.body.style.backgroundColor = colors[randomNumbers]
    color.textContent = colors[randomNumbers]
})

function getRandomNumber () {
    return Math.floor(Math.random()*colors.length)
}