document.getElementById('btn').addEventListener('click' , function(event){
    event.preventDefault();
    const numInput = document.getElementById('number-input').value;
    const pinInput = document.getElementById('pin-input').value;

    // if(numInput.includes('017') && pinInput === '1234'){
    //     console.log('correct');
    // }
    if(numInput.includes('017') && pinInput === '017'){
        console.log('correct');
        window.location.href = './home.html';
    }
    else{
        alert('enter a valid number and pin');
    }
})