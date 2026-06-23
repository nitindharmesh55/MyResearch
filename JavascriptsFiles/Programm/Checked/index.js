// Checked = proptry that determine the checked state of an HTML checkbox or radiobutton;

const myCheckBox = document.getElementById("mycheckBox");
const VisaBtn = document.getElementById("visaBtn")
const MasterBtn = document.getElementById("masterBtn")
const PaypalBtn = document.getElementById("paypalBtn")
const mySubmit = document.getElementById("mySubmit");
const SubResult = document.getElementById("subResult")
const paymentStatus = document.getElementById("paymentResult");
mySubmit.onclick = function () {
    if (myCheckBox.checked) {
        SubResult.textContent = `You are Subscribed!`
    }
    else {
        SubResult.textContent = `You are not Subscribed!`
    }

    if (VisaBtn.checked) {
        paymentStatus.textContent = `You are Paying with Visa`
    }
    else if (MasterBtn.checked) {
        paymentStatus.textContent = `You are Paying with MasterCard`
    }
    else if (PaypalBtn.checked) {
        paymentStatus.textContent = `You are Paying with PayPal`
    }
    else {
        paymentStatus.textContent = `You Must select Payment Type`
    }



}