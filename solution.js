// write your code here

/*
1. Color Analyzer

Create a switch statement that prints a different statement for each color option. (red, blue, green, yellow).
Create a variable called color and print the following sentence for each color:

-   "red" => print "Q1: Red's a great color on you."
-   "blue" => print "Q1: Blue? Great choice."
-   "green" => print "Q1: Ok. Green it is."
-   "yellow" => print "Q1: Not what I would have picked, but yellow is fine."
-   if the value is none of the above => print "Q1: The aim of the game is to pick a color."
*/

let color ="none";

switch (color) {
    case "red":
        console.log("Q1: Red's a great color on you.")
        break;
    case "blue":
        console.log("Q1: Blue? Great choice.")
        break;
    case "green":
        console.log("Q1: Ok. Green it is.")
        break;
    case "yellow":
        console.log("Q1: Not what I would have picked, but yellow is fine.")
        break;
    default:
        console.log("Q1: The aim of the game is to pick a color.")
}

/*
2. Grading

Create a switch statement that prints different comments depending on a grade.
Create a variable called grade and print the following sentence for each grade:

-   "A" => print "Q2: A - Well done!"
-   "B" => print "Q2: B - Good on you!"
-   "C" => print "Q2: C - Good effort"
-   "D" => print "Q2: D - Try harder next time..."
-   if the value is none of the above => print "Q2: Yikes..."
*/

let grade ="B";

switch (grade) {
    case "A":
        console.log("Q2: A - Well done!")
        break;
    case "B":
        console.log("Q2: B - Good on you!")
        break;
    case "C":
        console.log("Q2: C - Good effort")
        break;
    case "D":
        console.log("Q2: D - Try harder next time...")
        break;
    default:
        console.log("Q2: Yikes...")
}

/*
3. Fruits

Create a switch statement that prints different statements for various fruits (banana, orange, strawberry, apple).
Create a variable called fruit and print the following sentence for each fruit :

-   "apple" => print "Q3: An apple a day keeps the doctor away."
-   "banana" => print "Q3: Bananas are full of potassium."
-   "orange" => print "Q3: Yep, oranges. Great choice."
-   "strawberry" => print "Q3: Mmmm...nothing better than strawberries."
-   if the value is none of the above => print "Q3: PICK A FRUIT"
*/

let fruit ="orange";

switch (fruit) {
    case "apple":
        console.log("Q3: An apple a day keeps the doctor away.")
        break;
    case "banana":
        console.log("Q3: Bananas are full of potassium.")
        break;
    case "orange":
        console.log("Q3: Yep, oranges. Great choice.")
        break;
    case "strawberry":
        console.log("Q3: Mmmm...nothing better than strawberries.")
        break;
    default:
        console.log("Q3: PICK A FRUIT")
}

/*
4. Percentage Completed.
Create a variable called percentageComplete and print the following sentences depending on the percentage completed :

    If percentageComplete is below 30, print "Q4: Still a long way to go".
    If percentageComplete is between 30 and 50, print "Q4: Slowly getting there".
    If percentageComplete is between 51 and 80, print "Q4: You can do it!".
    If percentageComplete is between 81 and 99, print "Q4: This is the last push!".
    If percentageComplete is 100, print "Q4: You're there. Well done!".

Switch case OR If statement

    When should you use a switch statement versus when to use an if else statement? COMMENT your answer in your js file.
*/ 

let percentageComplete = 33; 

if (percentageComplete < 30) {
    console.log("Q4: Still a long way to go");
}
else if ((percentageComplete >= 30) && (percentageComplete <= 50)) {
    console.log("Q4: Slowly getting there");
}
else if ((percentageComplete >= 51) && (percentageComplete <= 80)) {
    console.log("Q4: You can do it!");
}
else if ((percentageComplete >= 81) && (percentageComplete <= 99)) {
    console.log("Q4: This is the last push!");
}
else if (percentageComplete == 100) {
    console.log("Q4: You're there. Well done!")
}

/* 
If-else checks for equality as well as for logical expression. On the other hand, switch checks only for equality.
The if statement evaluates integer, character, pointer or floating-point type or boolean type. On the other hand, switch statement evaluates only character or an integer datatype.
*/
