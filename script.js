// Add Task Functionality
function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = taskInput;

    // Create Delete Button for Task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'delete';
    deleteBtn.style.backgroundColor = 'red';
    deleteBtn.style.color = 'white';
    deleteBtn.style.border = 'none';
    deleteBtn.style.cursor = 'pointer';
    deleteBtn.style.marginLeft = '10px';

    // Event Listener for Deleting a Task
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    // Event Listener for Marking Task as Completed
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
       
        // Change button label based on task completion status
        if (li.classList.contains('completed')) {
            deleteBtn.textContent = 'Complete'; // Change label to Complete
            deleteBtn.style.backgroundColor = 'green'; // Optional: Change button color to green
        } else {
            deleteBtn.textContent = 'Delete'; // Change label back to Delete
            deleteBtn.style.backgroundColor = 'red'; // Change button color back to red
        }
    });
    // Append Delete Button to Task
    li.appendChild(deleteBtn);

    // Add Task to Task List
    taskList.appendChild(li);

    // Clear the Input Field
    document.getElementById('taskInput').value = '';
}

function navigateTo(page) {
  // Hide all sections except the requested one
  document.querySelectorAll('section').forEach((section) => {
      section.style.display = 'none';
  });

  // Show the requested section
  document.getElementById(page).style.display = 'block';

  // Change "Features" to "Home" if navigating away from 'features' page
  const featuresLink = document.getElementById('featuresLink');
  
  if (page === 'features') {
      featuresLink.textContent = 'Features'; // Change back to "Features"
      featuresLink.setAttribute('onclick', "navigateTo('features')"); // Ensure it navigates to features
  } else {
      featuresLink.textContent = 'Home'; // Change to "Home"
      featuresLink.setAttribute('onclick', "navigateTo('features')"); // Set to navigate back to features when clicked
  }
}

// Default to show only the features section when page loads
window.onload = function() {
  navigateTo('features');
};


