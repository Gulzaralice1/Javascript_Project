api_key = "https://api.quotable.io/random";
const Quota = document.getElementById("Quota");
const Author = document.getElementById("Author");

async function getQuote(api_key) {
    const response = await fetch(api_key);
    const data = await response.json();
    console.log(data);
    Quota.innerHTML = data.content;
    Author.innerHTML = "- " + data.author;
}
// getQuote(api_key);

function tweetQuote() {
    const quote = Quota.innerText;
    const author = Author.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank');
}