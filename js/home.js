/*
btn-add-money
input-pin
input-amount
add-money

out-money
output-amount
output-pin
btn-out-money
*/

// btns 
const balanceText = document.getElementById('balance').innerText;
const balance = Number(balanceText);

const addBtn = document.getElementById('btn-add-money');
const outBtn = document.getElementById('btn-out-money');


// divs 
const addMoneyDiv = document.getElementById('add-money');
const outMoneyDiv = document.getElementById('out-money');
const demoDiv = document.getElementById('demo');

// divider 
const divider = document.getElementById('divider');

document.getElementById('add-money-btn').addEventListener('click', function () {
    addMoneyDiv.classList.remove('hidden');
    demoDiv.classList.add('hidden');
    outMoneyDiv.classList.add('hidden');
    divider.classList.add('bg-green-500');
    divider.classList.remove('bg-orange-500');
})
document.getElementById('out-money-btn').addEventListener('click', function () {
    addMoneyDiv.classList.add('hidden');
    outMoneyDiv.classList.remove('hidden');
    demoDiv.classList.add('hidden');
    divider.classList.add('bg-orange-500');
    divider.classList.remove('bg-green-500');
})

document.getElementById('logo').addEventListener('click', function () {
    addMoneyDiv.classList.add('hidden');
    outMoneyDiv.classList.add('hidden');
    demoDiv.classList.remove('hidden');

})

// calculations 

// inPin inMoney 

addBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const inPin = document.getElementById('input-pin').value;
    let inMoney = document.getElementById('input-amount').value;
    inMoney = Number(inMoney);
    if (inPin === '017') {
        let newBalance = balance + inMoney;
        document.getElementById('balance').innerText = newBalance;
        document.getElementById('container').style.opacity = '100%';
    }
    else {
        window.location.href = './index.html';
    }

})

outBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const outPin = document.getElementById('output-pin').value;
    let outMoney = document.getElementById('output-amount').value;
    outMoney = Number(outMoney);
    if (outPin === '017') {
        let newBalance = balance - outMoney;
        document.getElementById('balance').innerText = newBalance;
        document.getElementById('container').style.opacity = '100%';
    }
    else {
        window.location.href = './index.html';
    }

})