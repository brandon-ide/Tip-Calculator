document.getElementById('awful').addEventListener('click', function() {
    const bill = document.getElementById('bill').value;
    if (!bill) {
        alert("You forgot to enter your bill. Try again!")
    }
    
    const tip = .10;
    const result = bill * tip;
    document.getElementById('tipResult').innerText = "$" + result.toFixed(2);
    document.getElementById('message').innerText = "Sorry your service was so bad. Better luck next time!"
});

document.getElementById('okay').addEventListener('click', function() {
    const bill = document.getElementById('bill').value;
    if (!bill) {
        alert("Either you got a freebie, or you forgot to enter your bill. Try again!")
    }
    const tip = .14;
    const result = bill * tip;
    document.getElementById('tipResult').innerText = "$" + result.toFixed(2);
    document.getElementById('message').innerText = "You had an okay time. Be thankful!"
});

document.getElementById('good').addEventListener('click', function() {
    const bill = document.getElementById('bill').value;
    if (!bill) {
        alert("Either you got a freebie, or you forgot to enter your bill. Try again!")
    }
    const tip = .18;
    const result = bill * tip;
    document.getElementById('tipResult').innerText = "$" + result.toFixed(2);
    document.getElementById('message').innerText = "You had a good experience. Come back soon!"
});

document.getElementById('excellent').addEventListener('click', function() {
    const bill = document.getElementById('bill').value;
    if (!bill) {
        alert("Either you got a freebie, or you forgot to enter your bill. Try again!")
    }
    const tip = .21;
    const result = bill * tip;
    document.getElementById('tipResult').innerText = "$" + result.toFixed(2);
    document.getElementById('message').innerText = "Wow! This service deserves exceptional compensation!"
});

