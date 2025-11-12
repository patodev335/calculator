let result = 0
let pressed = 0;
textResult = document.querySelector("#result");
sumButton = document.querySelector("#sum");
resButton = document.querySelector("#res");
multButton = document.querySelector("#mul");
divButton = document.querySelector("#div");
clsButton = document.querySelector("#cls");

btn1 = document.querySelector("#one");
btn2 = document.querySelector("#two");
btn3 = document.querySelector("#th");
btn4 = document.querySelector("#fo");
btn5 = document.querySelector("#fi");
btn6 = document.querySelector("#si");
btn7 = document.querySelector("#se");
btn8 = document.querySelector("#ei");
btn9 = document.querySelector("#nin");

btn1.addEventListener("click", event=>{
    pressed = 1;
}
);

btn2.addEventListener("click", event=>{
    pressed = 2;
}
);

btn3.addEventListener("click", event=>{
    pressed = 3;
}
);

btn4.addEventListener("click", event=>{
    pressed = 4;
}
);

btn5.addEventListener("click", event=>{
    pressed = 5;
}
);

btn6.addEventListener("click", event=>{
    pressed = 6;
}
);

btn7.addEventListener("click", event=>{
    pressed = 7;
}
);

btn8.addEventListener("click", event=>{
    pressed = 8;
}
);

btn9.addEventListener("click", event=>{
    pressed = 9;
}
);

sumButton.addEventListener("click", sum);
resButton.addEventListener("click", res);
multButton.addEventListener("click", mul);
divButton.addEventListener("click", div);
clsButton.addEventListener("click", cls);


function sum()
{
    result += pressed;
    pressed = 0;
    display();
}

function res()
{
    result -= pressed;
    pressed = 0;
    display();
}

function mul()
{
    if(pressed == 0) return;

    result = result * pressed;
    pressed = 0;
    display();
}

function div()
{
    if(pressed == 0) return;

    result = result / pressed;
    pressed = 0;
    display();
}

function cls()
{
    pressed=0;
    result=0;
    display();
}

function display()
{
    if(textResult != null)
    {
        textResult.innerHTML = result;
    }
}
