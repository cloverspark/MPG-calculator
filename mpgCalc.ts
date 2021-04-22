window.onload = function()
{
    let calcBtn = document.getElementById("calculate");  
        calcBtn.onclick = main;
    let clearBtn = document.getElementById("clear"); 
        clearBtn.onclick = byby;
    let milesClr = document.getElementById("miles")
        milesClr.ondblclick = byby2
    let gallonsClr = document.getElementById("gallons")
        gallonsClr.ondblclick = byby3
}

/**
 * Checks if form data is valid
 * @returns {boolean} Returns true is all data is valid on the form, or false is something is invalid
 */
function isValid(){
    let isAllDataValid:boolean = true;


    let milesBox:HTMLInputElement =
    <HTMLInputElement>document.getElementById("miles");
    let milesDriven:string =  milesBox.value;
    if  (milesDriven == ""||isNaN(parseFloat(milesDriven))){
        isAllDataValid = false;
        milesBox.nextElementSibling.innerHTML = "Miles Driven and Gallons Used is required and must be a number"
    }
    let gallonBox:HTMLInputElement =
    <HTMLInputElement>document.getElementById("miles");
    let gallonsUsed:string =  gallonBox.value
    if   (gallonsUsed == ""||isNaN(parseFloat(gallonsUsed))){
        isAllDataValid = false;
        gallonBox.nextElementSibling.innerHTML = "Gallons Used and Miles Driven is required and must be a number"
    }
    else {
        return isAllDataValid
    }
}
/** 
 * This function should be called when the calculate button is clicked
*/

function main(){
    if (isValid()){
            let miles:string =
                (<HTMLInputElement>document.getElementById("miles")).value;
            let gallons:string =
                (<HTMLInputElement>document.getElementById("gallons")).value;
        let mpg = calculateMPG(parseFloat(miles),parseFloat(gallons))
        displayResults(mpg)
    }
    //check if data is valid
    //if data is valid
        //calculate MPG
}

/**
 * Displays given MPG on the form
 * @param {string|number} milesPerGallon String or number containing the miles per gallon
 */
function displayResults(milesPerGallon:number):void{// void means no return
    let mpgBox:HTMLInputElement = <HTMLInputElement>document.getElementById("mpg");// is textbpx
    mpgBox.value = milesPerGallon.toString()//must turn into string
    //display the MPG result in a textbox
}

/**
 * Calculates miles per gallon
 * @param {string|number} milesDriven The number of miles driven
 * @param {string|number} gallonsUsed The number of gallons used
 */
function calculateMPG(milesDriven:number, gallonsUsed:number):number{
    let milesPerGallon: number = milesDriven / gallonsUsed;
    //calculate MPG
    //return the MPG as a number
    return milesPerGallon; 
}

//Creates a function that Clears all the form textboxes
function byby():void{
    /*
    let allBoxes = document.querySelectorAll("input[type=text]");
    for (let i = 0; i < allBoxes.length;i++){
        let currBox = <HTMLInputElement>allBoxes[i];
        currBox.value = ""

    }
    */
    var milebox = <HTMLInputElement>document.getElementById("miles");
    milebox.value = "";
    milebox.nextElementSibling.innerHTML = "";
    var gallonbox = <HTMLInputElement>document.getElementById("gallons");
    gallonbox.value = "";
    gallonbox.nextElementSibling.innerHTML = "";
    var mpgBox = <HTMLInputElement>document.getElementById("mpg");
    mpgBox.value = "";
    mpgBox.nextElementSibling.innerHTML = "";

    
}
// Adds a function to Miles Driven and Gallons of gas used to clear out the inputs
//      They can clear out just the textbox that triggers the double click event
function byby2():void{
    var mileBox = <HTMLInputElement>document.getElementById("miles");
    mileBox.value = "";
    mileBox.nextElementSibling.innerHTML = "";
}
function byby3():void{
    var gallonbox = <HTMLInputElement>document.getElementById("gallons");
    gallonbox.value = "";
    gallonbox.nextElementSibling.innerHTML = "";
}