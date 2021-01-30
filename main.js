//getting button, coach and checking if the button is incrementing or decrementing
function buttonClicked(buttonId, classId, increment) {
    const button = document.getElementById(buttonId).addEventListener('click', function () {
        const ticketQty = document.getElementById(classId).value; //ticketQty = ticketQuantity.
        const convertQty = parseFloat(ticketQty); //convertQty = convertQuantity.
        let newCount = convertQty;
        //incrementing and decrementing ticket quantity and setting limit to decreaseButton
        if (increment == true) {
            newCount = convertQty + 1;
        }
        else if (increment == false && convertQty > 0) {
            newCount = convertQty - 1;
        }

        //checking coach for subTotal function.
        if (classId == 'firstClass') {
            const first = subTotal('subTotal', newCount, 150);
        }
        else {
            const economy = subTotal('subTotal', newCount, 50);
        }
        document.getElementById(classId).value = newCount;
        calculateCost();
    })
}

//calculating subTotal.
function subTotal(id, quantity, cost) {
    const initialSub = document.getElementById(id).innerText;
    const convertSubValue = parseFloat(initialSub);
    const subtotal = quantity * cost;
    document.getElementById(id).innerText = subtotal;
}

//calculating ticket cost.
function calculateCost() {
    const firstClass = getCoach('firstClass');
    const economyClass = getCoach('economyClass');
    const totalCost = firstClass * 150 + economyClass * 100;
    document.getElementById('subTotal').innerText = totalCost;

    const vat = totalCost * 0.1; //calculating vat.
    document.getElementById('vat').innerText = vat;

    const grandTotal = vat + totalCost; //calculating Total.
    document.getElementById('totalCost').innerText = grandTotal;
}

//getting coachClass for calculateCost Function.
function getCoach(classId) {
    const coachInput = document.getElementById(classId).value;
    const coachCount = parseInt(coachInput);
    return coachCount;
}

//calling firstClassCoach button function.
buttonClicked('minusButton', 'firstClass', false);
buttonClicked('plusButton', 'firstClass', true);

//calling economyCoach button function.
buttonClicked('minusButtonE', 'economyClass', false);
buttonClicked('plusButtonE', 'economyClass', true);

const bookNowBtn = document.getElementById('submitButton').addEventListener('click', function () {

})