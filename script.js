const quote = document.querySelector('#quote')
const author = document.querySelector('#author')
const button = document.querySelector('#next-quote')

function randomGenerator(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

function ChangeQuote() {
  const randomIndex = randomGenerator(0, quotes.length)
  quote.textContent = `"${quotes[randomIndex].Quote}"`
  author.textContent = quotes[randomIndex].Author
}

const randomIndex = randomGenerator(0, quotes.length);
ChangeQuote()

button.addEventListener('click', ChangeQuote)