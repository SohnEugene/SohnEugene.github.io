const quotes = [{
    quote:"The journey of a thousand miles begins with one step.",
    author: "Lao Tzu"
}, {
    quote: "That which does not kill us makes us stronger.",
    author: "Friedrich Nietzsche"
}, {
    quote: "Life is what happens when you’re busy making other plans.",
    author: "John Lennon"
}, {
    quote: "If you’re going through hell, keep going.",
    author: "Winston Churchill"
}, {
    quote: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi"
}, {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West"
}, {
    quote: "Tough times never last but tough people do.",
    author: "Robert H.Schuller"
}, {
    quote: "Get busy living or get busy dying.",
    author: "Stephen King"
}, {
    quote: "Whether you think you can or you think you can’t, you’re right.",
    author: "Henry Ford"
},{
    quote: "A man is but what he knows.",
    author: "Sir Francis Bacon"
}];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = todaysQuote.author;