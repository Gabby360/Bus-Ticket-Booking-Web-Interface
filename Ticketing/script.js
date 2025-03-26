document.getElementById("ticketForm").addEventListener("input", function () {
    const route = document.getElementById("route").value; 
    const quantity = document.getElementById("quantity").value; 

    const totalCost = document.getElementById("totalCost");

  
    if (route && quantity) {
        const cost = route * quantity;
        totalCost.textContent = `Total Cost: Ghc${cost.toFixed(2)}`;
    } else {
        totalCost.textContent = "Total Cost: Ghc 0.00";
    }
});

document.getElementById("ticketForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for now
    const route = document.getElementById("route").value;
    const quantity = document.getElementById("quantity").value;

    if (route && quantity) {
        alert(`Booking successful! Total Cost: Ghc${(route * quantity).toFixed(2)}`);
        this.reset(); // Reset the form
        document.getElementById("totalCost").textContent = "Total Cost: Ghc 0.00"; // Reset cost display
    } else {
        alert("Please fill in all the fields.");
    }
});
