/* this function is callded when the ''calculate'' button is clicked */
function calculateBill() {
    /* parseFloat function converts the string from the inpus to a floating point number, allowing to handle decimal values*/
    const totalBill = parseFloat(document.getElementById("totalBill").value);
    
    /*Get the selected service level percentage by extracting the value of the checked radio button,which contains the percentage in decimal form*/
    const serviceLevel = parseFloat(document.querySelector('input[name="service"]:checked').value);
    
    // Get the number of people sharing the bill from dropdown menu
    // parseInt function converts the dropdown value into an integer 
    const numberOfPeople = parseInt(document.getElementById("people").value);
    
    // Calculate the total amount including the tip by selecteng the total bill and appropriate percentage based on the selected service level
    const totalAmount = totalBill + (totalBill * serviceLevel);
    
    // Calculate the amount per person
    // divding the total amount to be paid into the number of people
    // toFixed rounds the result to 2 decimal places 
    const amountPerPerson = (totalAmount / numberOfPeople).toFixed(2);
    
    // Display the result 
    document.getElementById("result").innerText = `Each person should pay: $${amountPerPerson}`;
}