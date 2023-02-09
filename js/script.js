const rubTransitionElem = document.querySelector(".rub__transition")
const usdTransitionElem = document.querySelector(".usd__transition")

const rubInputElem = document.querySelector(".rub__input input")
const usdInputElem = document.querySelector(".usd__input input")

const rubCourse = document.querySelector(".rub__course")
const course = {}

async function getCurrencies (){
    const response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
    const data = await response.json();
    const result  = await data;
    
    course.USD = result.Valute.USD
    rubCourse.textContent =  course.USD.Value.toFixed(2)
}
getCurrencies ()

rubTransitionElem.addEventListener("click", transitionUsd);

function transitionUsd (){
    usdInputElem.value = (rubInputElem.value / course.USD.Value).toFixed(2)
}
usdTransitionElem.addEventListener("click", transitionRub)

function transitionRub (){
    rubInputElem.value = (usdInputElem.value * course.USD.Value).toFixed(2)
}
