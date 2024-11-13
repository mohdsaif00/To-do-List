// Get references to the input box and list container elements from the HTML
const inputbox = document.getElementById("inputbox");
const listcontainer = document.getElementById("list-container");

// Function to add a new task
function addtask() {
    // Check if the input box is empty
    if (inputbox.value === "") {
        alert("You must write something"); // Show alert if the input is empty
    } else {
        // Create a new list item element (li)
        let li = document.createElement("li");
        li.innerHTML = inputbox.value; 
        listcontainer.appendChild(li); 

        // Create a "close" button (span) for each task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; 
        li.appendChild(span);
    }
    inputbox.value = "";
    savedata();
}

// Event listener for clicks within the list container
listcontainer.addEventListener('click', function(e) {
    // If a list item (li) is clicked, toggle the "checked" class to mark it
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    }
    // If the "close" button (span) is clicked, remove the task
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata(); 
    }
}, false);

// Function to save the current state of the list to local storage
function savedata() {
    localStorage.setItem("data", listcontainer.innerHTML); 
}

// Function to load tasks from local storage and display them
function showtask() {
    listcontainer.innerHTML = localStorage.getItem("data");
}

// Call showtask() to load any saved tasks when the page loads
showtask();
