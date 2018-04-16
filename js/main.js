//array of Objects to store Zodiac data
var zodiac = [{
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


// When user presses ENTER while in the Input, instead of CLICKING the Button
var btn = document.getElementById('userdata');
btn.addEventListener('keypress', function enterKey(e) {
	if(e.keyCode == 13) {
		horoscope();
	};
}, false);



// This Function fires when user Clicks the Button.

// The Function grabs the userdata ID, (which we created in the index.html file.)

// **This userdata ID now has NEW INFORMATION stored that the user has input!!!!**

function horoscope() {
  var userdata =
    document.getElementById("userdata");

  // We can Check/Confirm the userdata is saved with console.log & using the .value property

  console.log(userdata);
  console.log("The information the user typed/input is technically called the VALUE!!, in this case the users value is: " + userdata.value);

  //Once the information is saved, we can LOOP through our Zodiac variable of arrays (created at the top of this document)... Checking for a match.
  for (var i = 0; i < zodiac.length; i = i + 1) {


    //OPTIONAL CODE
    //We can check the console log to see if things are functioning properly
    //check the users input/VALUE as a lowercase, this is important because if we change the value to lowercase it will be forced to match one of our arrays.
    console.log("users value lowercase is: " + userdata.value.toLowerCase());
    // when writing toLowerCase REMEMBER it is a method. which is a ***function and NEEDS () ***
    //Methods are functions stored as object properties.

    // check the current item's sign in the zodiac array
    console.log("current zodiac sign in loop is: " + zodiac[i].sign);
    // END OF OPTIONAL CODE

    //IMPORTANT IF STATEMENT FUNCTION!
    //if the value the user typed in, changed to all lowercase leters Equals one of our Zodiac signs in the array, than we do something.....LOOKS LIKE THIS

    if (userdata.value.toLowerCase() === zodiac[i].sign) {
      // confirm the if statement ran
      console.log("if statement ran");

      // check some values in the console before updating HTML
      console.log("users typed in: " + userdata.value);
      console.log("current image value is: " + zodiac[i].image);
      console.log("current fortune value is: " + zodiac[i].fortune);

      // get element with id="userSign" and change the text to the user input
      document.getElementById("yourSign").textContent = userdata.value;
      // get element with id="icon" and change source attribute to current zodiac image path
      document.getElementById("icon").src = zodiac[i].image;
      // // get element with id="yourHoroscope" and change the content to this concatenated string
      document.getElementById("yourHoroscope").textContent = "Your best attributes are: " + zodiac[i].fortune;

      // stop the function because we found a match and added the data to the screen!!!
      return;
    }

    // confirm no matches are found if that's the case
    console.log("no matches were found, user failed to type in a correct zodiac sign");

    // if no match is found, do opposite of above, mostly clearing content and images
    document.getElementById("yourSign").textContent = "Not one of the signs. Try again!";
    document.getElementById("yourHoroscope").textContent = "";
    document.getElementById("icon").src = "";
  }
}







// When user presses ENTER while in the Input, instead of CLICKING the Button
// var btn = document.getElementById('userdata');
// btn.addEventListener('keypress', function enterKey(e) {
// 	if(e.keyCode == 13) {
// 		horoscope();
// 	};
// }, false);
