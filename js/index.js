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

let params = {}; // dispatch by key (param data)

// --------------------------------- default Value --------------------------------------------------- 
let genderCoefficient = genderConfig.man;
let activityCoefficients = activityConfig.min;
// ---------------------------------------------------------------------------------------------------

const paramValues = (paramsData) => {
  const keys = Object.keys(paramsData);
  const result = keys.every((key) => {
    return (paramsData[key] !== '' && /^-?\d+(\.\d+)?$/.test(paramsData[key]));
  })

  return result;
}

const submit = document.querySelector('.submit');
const reset = document.querySelector('.reset');

const genderChecked = document.querySelectorAll("[name=gender]");

genderChecked.forEach((gender) => {
    gender.addEventListener('input', (event) => {
        const gender = event.target.dataset.gender;
        genderCoefficient = genderConfig[gender];
        console.log(genderCoefficient);
    })
})

const age = document.querySelector('.age');
const height = document.querySelector('.height');
const weight = document.querySelector('.weight');

[age, height, weight].forEach((param) => {
  param.addEventListener('input', (event) => {
    const param = event.target.classList[0];
    const value = event.target.value;
    params[param] = value;

    if(Object.keys(params).length === 3 && paramValues(params)) {
      submit.disabled = false;
    }

    if(Object.keys(params).length !== 3 || !paramValues(params)) {
      submit.disabled = true;
    }

  })
})