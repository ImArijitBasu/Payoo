

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
    divider.classList.remove('bg-slate-500');
    document.getElementById('history-part').classList.add('hidden')
})
document.getElementById('out-money-btn').addEventListener('click', function () {
    addMoneyDiv.classList.add('hidden');
    outMoneyDiv.classList.remove('hidden');
    demoDiv.classList.add('hidden');
    divider.classList.add('bg-orange-500');
    divider.classList.remove('bg-green-500');
    divider.classList.remove('bg-slate-500');
    document.getElementById('history-part').classList.add('hidden')
})
document.getElementById('history').addEventListener('click', function () {
    addMoneyDiv.classList.add('hidden');
    outMoneyDiv.classList.add('hidden');
    demoDiv.classList.add('hidden');
    document.getElementById('history-part').classList.remove('hidden')
    divider.classList.add('bg-slate-500');
    divider.classList.remove('bg-green-500');
    divider.classList.remove('bg-orange-500');
})

document.getElementById('logo').addEventListener('click', function () {
    addMoneyDiv.classList.add('hidden');
    outMoneyDiv.classList.add('hidden');
    demoDiv.classList.remove('hidden');
    document.getElementById('history-part').classList.add('hidden')
})

// calculations 
const history = document.getElementById('history-box');
let newBalance = balance;
addBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const inPin = document.getElementById('input-pin').value;
    let inMoney = document.getElementById('input-amount').value;
    inMoney = Number(inMoney);
    if(isNaN(inPin)){
        alert('Pin only consists of numbers');
    }
    if (inPin === '017') {
        newBalance = newBalance + inMoney;
        document.getElementById('balance').innerText = newBalance;

        // history management

        const p = document.createElement('p')
        p.innerHTML = `
             Money added ${inMoney} , total : ${newBalance}
        `
        p.classList.add("text-slate-400", "bg-lime-200");
        history.append(p);

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
    if(isNaN(outPin)){
        alert('Pin only consists of numbers');
    }
    if(balance < outMoney){
        alert('তুমি খয়রাতি 😐');
        return;
    }
    if (outPin === '017') {
        newBalance = newBalance - outMoney;
        document.getElementById('balance').innerText = newBalance;
        // history management

        const p = document.createElement('p')
        p.innerHTML = `
                     Money out ${outMoney} , total : ${newBalance}
                `
        p.classList.add("text-slate-400", "bg-yellow-200");
        history.append(p);
    }
    else {
        window.location.href = './index.html';
    }

})