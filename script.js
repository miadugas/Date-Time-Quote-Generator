function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ampm = "";
    m = checkTime(m);

    if (h > 12) {
    h = h - 12;
    ampm = " PM";
    } else if (h == 12){
        h = 12;
    ampm = " AM";
    } else if (h < 12){
        ampm = " AM";
    } else {
        ampm = "PM";
    };

if(h==0) {
    h=12;
}
    
    document.getElementById('display').innerHTML = h+":"+m+ampm;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

//quote generator
function genQuote() {
  var randomNum = Math.floor(Math.random() * (quotes.length));
document.getElementById('quote').innerHTML = quotes[randomNum];

}

//quote array
var quotes = ["\" Moral nihilism comes with a price we can now see.\" <br> -Torbjorn Tannsjo","\"In his heart he was highly delighted with his friend\'s suggestion, but he thought it a duty to conceal his feeling. He was not a nihilist for nothing!\" <br> -Ivan Turgenev","\"The problem is not suffering itself or oblivion itself but the depraved meaninglessness of these things, the absolutely inhuman nihilism of suffering.\" <br> -John Green","\"I think you can get to a point where nihilism, if that's the right word, is overwhelming, and the basic laws that society has set up - either religious or social laws - become meaningless.\" <br> -Bruce Springsteen","\"Life\'s but a walking shadow, a poor player, that struts and frets his hour upon the stage, and then is heard no more; it is a tale told by an idiot, full of sound and fury, signifying nothing.\" <br> -William Shakespeare","\"Nihilism is not an existential quandary but a speculative opportunity.\" <br> -Ray Brassier","\"Everything is nothing, including the consciousness of nothing.\" <br> -E. M. Cioran","\"It is complete nihilism to propose laying down arms in a world where atom bombs are around. It is very simple: there is no way of achieving peace other than with weapons.\" <br> -Karl Popper","\"Nihilism is not only despair and negation, but above all the desire to despair and to negate.\" <br> Albert Camus","\"Everything in the world displeases me: but, above all, my displeasure in everything displeases me.\" <br> -Friedrich Nietzsche","\"Nihilists embrace life's existence by the acceptance of nothingness.\" <br> -Martijn Budel","\"A nihilist is not one who believes in nothing , but one who does not believe in what exists.\" <br> -Albert Camus","\"Certainty is not to be had. But as we learn this we become not more moral but more resigned. We become nihilists.\" <br> -Ryan Gosling","\"The only absolute knowledge attainable by man is that life is meaninglessness.\" <br> -Leo Tolstoy","\"Nihilism is the terrorist wing of youthful apathy.\" <br> - pat the bunny","\"Nobody's permanent, we're all on loan here.\" <br> -Chrissie Hynde","\"Hell is other people.\" <br> -JP Sartre","\"Existence is meaningless, we are pawns in an absurd contest of slavery and degradation.\" <br> - Federick Nietsche",];

//date
function startDate() {
var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("date").innerHTML = days[d.getDay()]+" | "+[d.getMonth()+1]+"/"+d.getDate()+"/"+d.getFullYear();
}
// Time of Day Greeting
var thehours = new Date().getHours();
	var themessage;
	var morning = ('Good Morning');
	var afternoon = ('Good Afternoon');
	var evening = ('Good Evening');

	if (thehours >= 0 && thehours < 12) {
		themessage = morning; 
	} else if (thehours >= 12 && thehours < 17) {
		themessage = afternoon;
	} else if (thehours >= 17 && thehours < 24) {
		themessage = evening;
	}

	$('.greeting').append(themessage);