const URL = 'https://api.adviceslip.com/advice';
const randomAdviceButton = document.getElementById('button');
const adviceParagraph = document.getElementById('advice');
const adviceId = document.getElementById('id');

async function getQuote () {
    let data = await fetch(URL)
      .then(response => response.json());

    adviceId.innerText = data.slip.id
    adviceParagraph.innerText = data.slip.advice
}

const getNewQuote = () => {
    console.log('You clicked me!')
}

randomAdviceButton.addEventListener("click", getQuote)
window.addEventListener('load', getQuote)