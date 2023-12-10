const genderConfig = { // dispatch by key (gender data)
  man: 5,
  women: -161,
};

const activityConfig = { // dispatch by key (active data)
  min: 1.2,
  low: 1.375,
  average: 1.55,
  high: 1.725,
  huge: 1.9,
};

// --------------------------------- default Value --------------------------------------------------- 
let genderCoefficient = genderConfig.man;
let activityCoefficients = activityConfig.min;
// ---------------------------------------------------------------------------------------------------

const genderChecked = document.querySelectorAll("[name=gender]");

genderChecked.forEach((gender) => {
    gender.addEventListener('input', (event) => {
        const gender = event.target.dataset.gender;
        genderCoefficient = genderConfig[gender];
        console.log(genderCoefficient);
    })
})