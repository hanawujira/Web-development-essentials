window.onload = function() {
    const form = document.getElementById("myForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        
        // Save name and age to local storage
        localStorage.setItem("name", name);
        localStorage.setItem("age", age);
        
        // Display success message
        alert("Name and age saved to local storage!");
        
        // Clear the form
        form.reset();
    });
};
