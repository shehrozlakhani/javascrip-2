

var h2 = document.createElement("h2");
var heading = document.createTextNode("chapter 21 to chapter 40");
h2.appendChild(heading);
document.body.appendChild(h2)


//######################   chapter 21       #########################
// Chapter 21 (Changing Case)

// var allLower = "aLL Alphabet LOwer";
// allLower = allLower.toLowerCase();
// document.write(allLower)

// var x = prompt("enter your number")
// x = x.toLowerCase();
//document.write(x)

// var y = prompt("enter here" , "Enter here");
// y = y.toUpperCase()
// document.write(y)

// var x =  "PaKistAN".toUpperCase();
// var y = x;
// document.write(y)

// var x =  "PaKistAN".toLowerCase();
// var y = x;
// document.write(y)

// var y = prompt("enter here" , "Enter here");
// y = y.toUpperCase()
// alert(y)

// var country = prompt("enter","Enter");

// var firstLater = country.slice(0,1);
// firstLater = firstLater.toUpperCase();

// var otherLater = country.slice(1,);
// otherLater = otherLater.toLowerCase();

// var newCountry = firstLater + otherLater;

// alert(newCountry);







//######################   chapter 21 end       #########################


//######################   chapter 22 to 25        #########################
// Chapter 22 - 25 (Strings)


// var sameWords = "caption";
// var slcAp = sameWords.slice(1,3)
// document.write(sameWords)
// document.write(slcAp)

// var numOfchar = "shehroz lakhani";
// var  numOfchar1 = numOfchar.slice(8,15);
// document.write(numOfchar + "<br>")
// document.write(numOfchar1)


// var animal = "elephant";
// var midFour = animal.slice(2,6);
// document.write(animal + "<br>");
// document.write(midFour)


// var alphatbets = "Allma iqbal";
// document.write(alphatbets.length + "<br>")
// var x = alphatbets.slice(1,8);
// |document.write(x)

// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// document.write(indx)
//the index of be 3 or expected output is 3

// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// document.write(indx)
//the index of be 6 or expected output is 16

// var instance = "the go and go the";
// var indx = instance.lastIndexOf("go");
// document.write(indx);

// var stng = "abcde";
// var chrAt = stng.charAt(2);
// document.write(chrAt);

// var text = "hum tum itny pass hai hai durr hai chand sitary";
// var y = text.charAt(10);
// document.write(y);

// var str = "hum tum itny pass hai hai durr hai chand sitary";
// var x = str.charAt(str.length-1);
// document.write(x);

// var inpt = prompt("enter you string","enter your string");
// var x = inpt.charAt(5);
// document.write(x);

// var str = "hum tum itny pass hai hai durr hai chand sitary";
// if (str.charAt(5) == "l") {
//     document.write("nothing")
// }
// else if(str.charAt(5) == "u"){
//     document.write("character at 5 is 'U'.")
// }

// var str = "hum tum itny pass hai hai durr hai chand sitary";
// var newStr = str.replace("sitary","tarey");
// document.write(newStr)

// var str = "3 6 3 6 3 6"
// var newstr = str.replaceAll("3","4");
// document.write(newstr)




//######################   chapter 22 to 25 END       #########################

//######################   chapter 26       #########################
// Chapter 26 (Rounding Numbers)

// var x = 3.14;
// var y = Math.ceil(x)
// document.write(y)


// var origNum = 0.5;
// var roundedNum = Math.round(origNum);
// document.write(roundedNum)

// var origNum = 5.9;
// var roundedNum = Math.floor(origNum);
// document.write(roundedNum)

// var origNum = 4.4;
// var roundedNum = Math.ceil(origNum);
// document.write(roundedNum);

// var num = 0.5;
// var newNum = Math.floor(num);
// document.write(newNum);

//######################   chapter 26 END       #########################



//######################   chapter 27       #########################
// Chapter 27 (Random Numbers)

// var x = Math.random(50)
// var y = Math.ceil(x)
// document.write(y)

// var randomNumber = Math.random();
// var convertedNumber = Math.floor(randomNumber * 50) +1;
// document.write(convertedNumber);



//######################   chapter 27 End       #########################



//######################   chapter 28 to 29      #########################
// Chapter 28, 29 (Converting Strings)

// var stn = "654";
// stn =  parseInt(stn)
// var typ = typeof(stn)
// document.write(typ)


// function cnvt (holla){
//     var toInt = parseInt(holla);
//     // return toInt;
//     var typ = typeof(toInt);
//     document.write(typ);
// }
// cnvt("dkjfhsadkjf")

// var str = "3.14";
// var floatNum = parseFloat(str);
// var typ = typeof(floatNum);
// document.write(typ);
// document.write(floatNum);


var number = 42;
var str = number.toString();
var typ = typeof(str);
document.write(typ);













//######################   chapter 28 to 29 END       #########################



















