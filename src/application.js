import buttonSwitch from "./buttonSwitch.js";

const elementsWithListeners = {
    genders: Array.from(document.querySelectorAll('input[name="gender"]')),
    age: document.querySelector('input[name="age"]'),
    height: document.querySelector('input[name="height"]'),
    weight: document.querySelector('input[name="weight"]'),
    activities: Array.from(document.querySelectorAll('input[name="active"]'))
}

const elementsForСalculation = {
    gender: elementsWithListeners.genders.filter((input) => input.checked)[0].dataset.gender,
    age: elementsWithListeners.age.value,
    height: elementsWithListeners.height.value, 
    weight: elementsWithListeners.weight.value,
    activity: elementsWithListeners.activities.filter((input) => input.checked)[0].dataset.active
};

//-----------------------------------Listeners--------------------------------------------------------------
elementsWithListeners.genders.map((gender) => {
    gender.addEventListener('change', (event) => {
        const newCheckEl = event.target.dataset.gender;
        elementsForСalculation.gender = newCheckEl;
    });
});

elementsWithListeners.activities.map((activity) => {
    activity.addEventListener('change', (event) => {
        const newCheckEl = event.target.dataset.active;
        elementsForСalculation.activity = newCheckEl;
    });
});

[elementsWithListeners.age, elementsWithListeners.height, elementsWithListeners.weight].forEach((param) => {
    param.addEventListener('input', (event) => {
        const paramName = event.target.name;
        const value = event.target.value;
        elementsForСalculation[paramName] = Number(value);
        buttonSwitch();
    })
})
//----------------------------------------------------------------------------------------------------------


const info = document.querySelector('.info');
info.addEventListener('click', () => {
    console.log(elementsForСalculation.activity);
    console.log({
        age: elementsForСalculation.age,
        height: elementsForСalculation.height,
        weight: elementsForСalculation.weight
    })
}) 

export default elementsForСalculation;