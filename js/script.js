// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


//array of quotes, optional citation or year, add property:category
var quotes = [
	{
		quote: "Sometimes life is going to hit you in the head with a brick. Don't lose faith.",
	 	source: "Steve Jobs",
		citation: "Biography by Walter Isaacson",
	 	year: 2000,
    category: "Life Quote"
},
{
  quote: "If you can’t make it good, at least make it look good.",
  source: "Bill Gates",
  citation: "BG Biography",
  year: 2010,
  category: "Life Quote"
},
{
  quote: "I have no special talents. I am only passionately curious.",
  source: "Albert Einstein",
  category: "Wisdom Quote"
},
{
  quote: "Get busy living or get busy dying.",
  source: "Stephen King",
  year: 2005,
  category: "Life Quote"
},
{
  quote: "The mind is everything. What you think you become.",
  source: "Buddha",
  category: "Inspirational Quote"
},
{
  quote: "The journey of a thousand miles begin with a single step",
  source: "Lao Tzu",
  year: "533 bc",
  category: "Wisdom Quote"
}
];

//function to randomly select a quote
function getRandomQuote() {
  var randQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randQuote;
}

//create a function named "printQuote" with rules
function printQuote() {
  var newQuote = getRandomQuote();
  var html = "<p class='quote'>" + newQuote.quote + "</p>" +
  "<p class='source'>" + newQuote.source + "</span>";
    if (newQuote.citation !== undefined){
    html += "<span class='citation'>" + newQuote.citation + "</span>";
    }
    if (newQuote.year !== undefined){
    html += "<span class='year'>" + newQuote.year+ "</span>";
    }
  html += "<span class='category'>" + newQuote.category + "</span>";

//displays the final HTML string to the page
   document.querySelector('#quote-box').innerHTML = html;
 }

//to get a random colour background
function randomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 document.body.style.background = bgColor;
}

//when quotes changes, the "randomColor" function is called
document.getElementById('loadQuote').addEventListener("click", randomColor);

//Autoload a new quote every 5 seconds
function autoClick() {
  document.getElementById('loadQuote').click();
}
window.setInterval(autoClick, 5000);
