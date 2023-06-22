console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    if (count < 0){
        console.log("Invalid")
    }
    for(let i = 1; i <= count; i++){
        if(i % 2 !== 0){
            console.log(i);
        }
    }
}
printOdds(15);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age){
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen =  `Sorry ${userName}, but you need to wait until you're 16.`;
    if (userName === undefined || age === undefined){
        console.log("Invalid input");
        return;
    }
    if (age < 16){
        return belowSixteen;
    }
    else{
        return aboveSixteen;
    }
}
console.log(checkAge("Daniel", 38));

//Exercise 3 Section
console.log("EXERCISE 3: \n==========\n");
function checkAxis(x,y){
    if (x === 0 && y === 0){
        console.log ("Dead Center");
    }else if (x === 0){
        console.log(`The coordinates ${x} and ${y} lie on the y-axis.`);
    }else if (y === 0){
        console.log(`The coordinates ${x} and ${y} lie on the x-axis.`);
    }else if (x > 0 && y > 0){
        console.log(`The coordinates ${x} and ${y} lie in Qaudrant 1.`);
    }else if (x < 0 && y > 0){
        console.log(`The coordinates ${x} and ${y} lie in Quadrant 2.`);
    }else if (x < 0 && y < 0) {
        console.log(`The coordinates ${x} and ${y} lie in Quadrant 3.`);
    }else {
        console. log(`The coordinates ${x} and ${y} lie in Quadrant 4.`)
    }
}
checkAxis(-10, 5);

//Exercise 4 Section
console.log("Exercise 4: \n==========\n");
function triangle(x,y,z){
    if(x + y <= z || x + z <= y || y + z <= x){
        console.log("This is an invalid triangle.");
    }else if(x===y || x===z || y===z){
        console.log("This is an isosceles triangle.");
    }else if(x === y && x === z){
        console.log("This is an equilateral triangle.");
    }else{
        console.log("This is a scalene triangle");
    }

}
triangle();