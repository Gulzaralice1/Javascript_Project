    // Get references to elements
    const inputBox = document.getElementById('input-box');
    const listContainer = document.getElementById('task-list');
    const taskCount = document.getElementById('task-count');
    
    // Function to update the task count
    function updateTaskCount() {
      const totalTasks = listContainer.childElementCount; // Count the number of tasks
      if(totalTasks >= 7){
        alert(`You have reached the maximum number of tasks. Total Tasks: ${totalTasks - 1}`);
        taskCount.textContent = `Total Tasks: ${totalTasks}`;
      }
      taskCount.textContent = `Total Tasks: ${totalTasks}`;
    }
    
    // Function to add a new task
    function addTask() {
      // Check if the input is empty
      if (inputBox.value.trim() === '') {
        alert('Please enter a task');
        return;
      }
    
      // Create a new task item
      const li = document.createElement('li');
      li.style.display = 'flex';
      li.style.alignItems = 'center';
    
      // Create the checkbox
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.style.marginRight = '10px';
    
      // Create the label
      const checkboxLabel = document.createElement('label');
      checkboxLabel.innerHTML = inputBox.value.trim();
      checkboxLabel.style.flexGrow = '1';
    
      // Append checkbox and label to the list item
      li.appendChild(checkbox);
      li.appendChild(checkboxLabel);
    
      // Create the delete button (cross symbol)
      const span = document.createElement('span');
      span.innerHTML = '\u00d7'; // Cross symbol
      span.style.cursor = 'pointer';
      span.style.marginLeft = '10px';
      
      // Add delete functionality
    
      span.addEventListener('click', () => {
        if(checkbox.checked){
            li.remove();
            saveData();
    
        }
      });
    
      // Append the delete button to the list item
      li.appendChild(span);
    
      // Add the list item to the task list
      listContainer.appendChild(li);
    
      // Remove bullets from the list
      listContainer.style.listStyleType = 'none';
    
      // Update the task count
      updateTaskCount();
    
      // Clear the input field
      inputBox.value = '';
    }
    
    // save data
    function saveData() {
        localStorage.setItem("data",listContainer.innerHTML);
    }
    
    
    function showData(){
        listContainer.innerHTML = localStorage.getItem("data");
    }
    // showData();