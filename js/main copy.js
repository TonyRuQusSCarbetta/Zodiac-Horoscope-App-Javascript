//array of Objects to store Zodiac data
var zodiac = [
	{
		sign: "aquarius",
		fortune: "Knowledge, Humanitarian, Serious, Insightful, Duplicitous",
		image: "images/aquarius.png"
	},
	{
		sign: "aries",
		fortune: "Active, Demanding, Determined, Effective, Ambitious",
		image: "images/aries.png"
	},
	{
		sign: "cancer",
		fortune: "Emotion, Diplomatic, Intensity, Impulsive, Selective",
		image: "images/cancer.png"
	},
	{
		sign: "capricorn",
		fortune: "Determination, Dominance, Perservering, Practical, Willful",
		image: "images/capricorn.png"
	},
	{
		sign: "gemini",
		fortune: "Communication, Indecision, Inquisitive, Intelligent, Changeable",
		image: "images/gemini.png"
	},
	{
		sign: "leo",
		fortune: "Ruling, Warmth, Generosity, Faithful, Initiative",
		image: "images/leo.png"
	},
	{
		sign: "libra",
		fortune: "Balance, Justice, Truth, Beauty, Perfection",
		image: "images/libra.png"
	},
	{
		sign: "pisces",
		fortune: "Fluctuation, Depth, Imagination, Reactive, Indecisive",
		image: "images/pisces.png"
	},
	{
		sign: "sagittarius",
		fortune: "Philosophical, Motion, Experimentation, Optimism",
		image: "images/sagittarius.png"
	},
	{
		sign: "scorpio",
		fortune: "Transient, Self-Willed, Purposeful, Unyielding",
		image: "images/scorpio.png"
	},
	{
		sign: "taurus",
		fortune: "	Security, Subtle strength, Appreciation, Instruction, Patience",
		image: "images/taurus.png"
	},
	{
		sign: "virgo",
		fortune: "Analyzing, Practical, Reflective, Observation, Thoughtful",
		image: "images/virgo.png"
	}
];

// This Function fires when user Clicks the Button.

// The Function grabs the userdata ID, (which we created in the index.html file.)

// **This userdata ID now has NEW INFORMATION stored that the user has input!!!!**

function horoscope() {
	var userdata =
	document.getElementById("userdata");

// We can Check/Confirm the userdata is saved with console.log & using the .value property

console.log(userdata);
console.log("The information the user typed/input is technically called the VALUE!!, in this case the users value is: " + userdata.value);
}
//Once the information is saved, we can loop through our Zodiac variable of arrays (created at the top of this document)... Checking for a match.
// for(var i = 0; i < zodiac.length; i = i + 1) {
// }




































// When user presses ENTER while in the Input, instead of CLICKING the Button
// var btn = document.getElementById('userdata');
// btn.addEventListener('keypress', function enterKey(e) {
// 	if(e.keyCode == 13) {
// 		horoscope();
// 	};
// }, false);
