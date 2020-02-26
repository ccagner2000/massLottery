// setting the random numbers for the mass lottery
let num1 = (Math.random() * 48) + 1;
num1 = Math.trunc(num1);
let num2 = (Math.random() * 48) + 1;
num2 = Math.trunc(num2);
while (num2 == num1) {
    num2 = (Math.random() * 48) + 1;
    num2 = Math.trunc(num2);
}
let num3 = (Math.random() * 48) + 1;
num3 = Math.trunc(num3);
while (num3 == num1 || num3 == num2) {
    num3 = (Math.random() * 48) + 1;
    num3 = Math.trunc(num3);
}
let num4 = (Math.random() * 48) + 1;
num4 = Math.trunc(num4);
while (num4 == num1 || num4 == num2 || num4 == num3) {
    num4 = (Math.random() * 48) + 1;
    num4 = Math.trunc(num4);
}
let num5 = (Math.random() * 48) + 1;
num5 = Math.trunc(num5);
while (num5 == num1 || num5 == num2 || num5 == num3 || num5 == num4) {
    num5 = (Math.random() * 48) + 1;
    num5 = Math.trunc(num5);
}
luckyNum = (Math.random() * 18) + 1;
luckyNum = Math.trunc(luckyNum);
// put numbers in an array
const winningNumbers = [num1, num2, num3, num4, num5, luckyNum];




function calculatePrize(matches, lucky) {
    if(matches == 0) {
        if(lucky == true) {
            document.write("$4<br />");
        } else {
            document.write("None (no matches, no lucky ball)<br />");
        }
    } else if (matches == 1) {
        if (lucky == true) {
            document.write("$6<br />");
        } else {
            document.write("None (one match, no lucky ball)<br />");
        }
    } else if (matches == 2) {
        if (lucky == true) {
            document.write("$25<br />");
        } else {
            document.write("$3<br />");
        }
    } else if (matches == 3) {
        if (lucky == true) {
            document.write("$20<br />");
        } else {

        }
    } else if (matches == 4) {
        if (lucky == true) {
            document.write("$5,000<br />");
        } else {
            document.write("$200<br />");
        }
    } else if (matches == 5) {
        if (lucky == true) {
            document.write("$7,000 a WEEK for LIFE!<br />");
        } else {
            document.write("$25,000 a YEAR for LIFE!<br />");
        }
    }
}




// once button is pressed
let doIt = document.getElementById("button");
doIt.onclick = function() {
    let numbers = document.getElementById("lotteryNumbers").value;
    numbers = numbers.split(" ");
    let i  = 0;
    for(i; i < numbers.length; i++) {
        // change the string values from input into numbers
        numbers[i] = Number(numbers[i]);
    }
    i = 0;
    let powerNum = document.getElementById("luckyBall").value;
    powerNum = Number(powerNum);

    // display the winning numbers
    document.write("Winning Numbers (Lucky Ball Last): ");
    let winningString = "";
    for(i; i < winningNumbers.length; i++) {
        if(i != winningNumbers.length - 1) {
            winningString += winningNumbers[i] + ", ";
        } else {
            winningString += winningNumbers[i];
        }
    }
    document.write("<p>[ " + winningString + " ]</p>");
    i = 0;

    // sort winning numbers
    winningNumbers.pop();
    winningNumbers.sort(function(a, b) {return a - b});
    winningNumbers.push(luckyNum);
    
    // display again
    document.write("Winning Numbers (Sorted, Lucky Ball Last): ");
    let sortedWinningString = "";
    for(i; i < winningNumbers.length; i++) {
        if(i != winningNumbers.length - 1) {
            sortedWinningString += winningNumbers[i] + ", ";
        } else {
            sortedWinningString += winningNumbers[i];
        }
    }
    document.write("<p>[ " + sortedWinningString + " ]</p>");
    i = 0;

    // display the numbers you chose
    document.write("Your Numbers (Lucky Ball Last): ");
    let yourString = "";
    for(i; i < numbers.length; i++) {
        yourString += numbers[i] + ", ";
    }
    document.write("<p>[ " + yourString + "  " + powerNum + " ]</p>");
    i = 0;

    document.write("Prize: ");
    let j = 0; 
    let matches = 0;
    // calculate the matches
    for(i; i < winningNumbers.length - 1; i++) {
        for(j; j < numbers.length; j++) {
            if(winningNumbers[i] == numbers[j]) {
                matches++;
                break;
            }
        }
        j = 0;
    }
    i = 0;
    let getLucky = true;
    // check if they got the lucky number
    if(luckyNum != powerNum) {
        getLucky = false;
    }

    calculatePrize(matches, getLucky);
}