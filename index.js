var quotes = [
{quote:"I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best.",
author: "Marilyn Monroe"
},

{quote:"You’ve gotta dance like there’s nobody watching,Love like you’ll never be hurt,Sing like there’s nobody listening,And live like it’s heaven on earth.",
author: "William W. Purkey"
},

{quote:"You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
author: "Dr. Seuss"
},

{quote:"Don’t walk behind me; I may not lead. Don’t walk in front of me; I may not follow. Just walk beside me and be my friend.",
author: "Albert Camus"
},

{quote:"Impossible is a word to be found only in the dictionary of fools.",
author:"Napoleon Bonaparte"
},

{quote:"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
author:"Albert Einstein"
},

{quote:"The greater damage for most of us is not that our aim is too high and we miss it, but that it it too low and we reach it.",
author:"Michelangelo"
},

{quote:"When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one which has been opened for us.",
author:"Helen Keller"
},

{quote:"People are just as happy as they make up their minds to be.",
author:"Abraham Lincoln"
},

{quote:"The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.",
author:"Bob Marley"
}
];

var number;
var current_quote;
var current_quote_author;

window.onload = function() {
	GenerateQuote();	
	
}
function GenerateQuote(){
	 number = Math.floor(Math.random() * 10);
	 current_quote = quotes[number].quote;
	 current_quote_author = quotes[number].author;
	 document.getElementById("quotetext").innerHTML = current_quote;
	 document.getElementById("author").innerHTML = current_quote_author;
}


//function tweet(){

//	var share = quotes[number].quote;
//	var url = window.open("https://twitter.com/intent/tweet?text="+ encodeURI(share) + "&url=&original-referer=");
//};
function tweet() {
	var combine = (current_quote + "\n" + current_quote_author);
	window.open("https://twitter.com/intent/tweet?text=" + combine);
	console.log(quotes[number].quote);
	console.log(quotes[number].author);
}


