var topButton = $(".top button");
var numberButton = $(".number button");
var symbols = $(".right button");
var input = $(".input");
var number = "";
var sum = "";
var result = 0;

// top button logic
topButton.click(function(){
    if($(this).text() == "AC"){
        sum = "";
        number = "";
        result = 0;
        input.text("0");
        symbols.css('background-color', 'rgb(254, 158, 12)');
    }else if($(this).text() == "%" && number !== ""){
        number = number/100;
        sum = number.toString();
        input.text(number)
    }else if($(this).text() !== "%" && $(this).text() !== "AC" && number !== ""){
        number = number.slice(0, -1);
        sum = number;
        input.text(number);
    }
})

topButton.mousedown(function(){
    $(this).css('background-color', 'rgb(225, 225, 225)');
})

topButton.mouseup(function(){
    $(this).css('background-color', 'rgb(165, 165, 165)');
})
// top button logic


// number buttons logic
numberButton.click(function(){
    var text = $(this).text();

    if(text === "." && number.includes('.')) return
    number += text;
    input.text(number);

    if(sum.includes("/") || sum.includes("*") || sum.includes("+") || sum.includes("-") || sum == "" ){
        if(number.length > 1){
            sum += number.slice(number.length-1, number.length);
        }else{
            sum += number;
        }
    }
    else{
        symbols.css('background-color', 'rgb(254, 158, 12)');
        sum = "";
        sum += number;
    }
})

numberButton.mousedown(function(){
    $(this).css('background-color', 'rgb(100, 100, 100)');
})

numberButton.mouseup(function(){
    $(this).css('background-color', 'rgb(55, 55, 55)');
})

// number buttons logic


//calculator logic
symbols.click(function(){
    symbols.css('background-color', 'rgb(254, 158, 12)');
    $(this).css('background-color', 'rgb(255, 205, 125)');


    if(sum !==""){
    switch($(this).text()){
        case "/":

            if(sum.slice(-1) !== "/" && sum.slice(-1) !== "*" && sum.slice(-1) !== "+" && sum.slice(-1) !== "-"  ){
                sum += "/";
            }else{
                sum = sum.slice(0, -1) + "/";
            }
            break;
        case "*":

            if(sum.slice(-1) !== "/" && sum.slice(-1) !== "*" && sum.slice(-1) !== "+" && sum.slice(-1) !== "-"  ){
                sum += "*";
            }else{
                sum = sum.slice(0, -1) + "*";            }
            break;
        case "-":

            if(sum.slice(-1) !== "/" && sum.slice(-1) !== "*" && sum.slice(-1) !== "+" && sum.slice(-1) !== "-"  ){
                sum += "-";
            }else{
                sum = sum.slice(0, -1) + "-";
            }
            break;
        case "+":

            if(sum.slice(-1) !== "/" && sum.slice(-1) !== "*" && sum.slice(-1) !== "+" && sum.slice(-1) !== "-"  ){
                sum += "+";
            }else{
                sum = sum.slice(0, -1) + "+";
            }
            break;
        case "=":
            if(sum.slice(-1) !== "/" && sum.slice(-1) !== "*" && sum.slice(-1) !== "+" && sum.slice(-1) !== "-"  ){
                result = eval(sum);
            }else{
                sum = sum.slice(0, -1);
                result = eval(sum);
            }
            input.text(result);
            sum = result.toString();
            break;
    }}

    number = "";
})

//calculator logic