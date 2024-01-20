const elementsWithListeners = {
    genders: Array.from(document.querySelectorAll('input[name="gender"]')),
    age: document.querySelector('input[name="age"]'),
    height: document.querySelector('input[name="height"]'),
    weight: document.querySelector('input[name="weight"]'),
    activities: Array.from(document.querySelectorAll('input[name="active"]'))
}

const elementsForСalculation = {
    gender: elementsWithListeners.genders.filter((input) => input.checked)[0],
    age: elementsWithListeners.age,
    height: elementsWithListeners.height, 
    weight: elementsWithListeners.weight,
    activity: elementsWithListeners.activities.filter((input) => input.checked)[0]
};

//-----------------------------------Listeners--------------------------------------------------------------
elementsWithListeners.genders.map((gender) => {
    gender.addEventListener('change', (event) => {
        const newCheckEl = event.target;
        elementsForСalculation.gender = newCheckEl;
    });
});

elementsWithListeners.activities.map((activity) => {
    activity.addEventListener('change', (event) => {
        const newCheckEl = event.target;
        elementsForСalculation.activity = newCheckEl;
    });
});
//----------------------------------------------------------------------------------------------------------

const info = document.querySelector('.info');
info.addEventListener('click', () => {
    console.log(elementsForСalculation.activity);
}) 