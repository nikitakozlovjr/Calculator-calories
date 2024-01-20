const age = document.querySelector('input[name="age"]');
const height = document.querySelector('input[name="height"]');
const weight = document.querySelector('input[name="weight"]');

const infoBlock = document.querySelector('.info');
const submit = document.querySelector('.submit');
const reset = document.querySelector('.reset');

reset.addEventListener('click', () => {
    [age, height, weight].map((param) => param.value = '');
    submit.disabled = true;
    reset.disabled = true;
    infoBlock.style.display = 'none';
})

export default () => {
    if(age.value !== '' && height.value !== '' && weight.value !== '') {
        submit.disabled = false;
    }
    if(age.value !== '' || height.value !== '' || weight.value !== '') {
        reset.disabled = false;
    }
};