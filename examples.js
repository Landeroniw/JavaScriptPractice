//Example #1
function multiply(a, b){
    return a * b;
}
//Arrow function
 multiply = (a,b) => a * b;

//Example 2: Switch case
function getPlanetName(id){
    var name;
    switch(id){
        case 1:
            name = 'Mercury'
            break;
        case 2:
            name = 'Venus'
            break;
        case 3:
            name = 'Earth'
            break;
        case 4:
            name = 'Mars'
            break;
        case 5:
            name = 'Jupiter'
            break;
        case 6:
            name = 'Saturn'
            break;
        case 7:
            name = 'Uranus'
            break;
        case 8:
            name = 'Neptune' 
            break;
    }
    return name;
}

//Example 3: Reverse a String
function reverseString(s){
    //Convert to array an reverse x = [1, 2, 3]
    const arr = s.split("");
    //Reverse the array 
    const reversed = arr.reversed();
    //Convert array to an String
    const finalString = reversed.join("");
    //All in one return s.split("").reversed().join("");
    return finalString;
}

//Example 4: Even or odd
function even_or_odd(number){
    //Using module
    if(number%2 === 0){
        return 'Even';
    }else{
        return 'Odd';
    }
}