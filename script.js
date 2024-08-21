document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();

        if (taskText === '') {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'You must enter a task!',
            });
            return;
        }

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.textContent = taskText;

        // Add a remove image
        const removeImage = document.createElement('img');
        removeImage.src = 'remove.png'; // Path to your delete icon image
        removeImage.alt = 'Remove Task';
        removeImage.className = 'remove-icon';
        removeImage.addEventListener('click', () => {
            // SweetAlert confirmation dialog
            Swal.fire({
                title: 'Are you sure?',
                text: 'You won\'t be able to recover this task!',
                imageUrl: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2020/09/Tony-Stark-Obtains-The-Infinity-Gauntlet-From-Thanos.jpg', // Replace with your custom confirmation image
                imageAlt: 'Confirmation image',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'Cancel'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Remove the task if confirmed
                    taskList.removeChild(listItem);
                    
                    // SweetAlert success dialog with image
                    Swal.fire({
                        title: 'Deleted!',
                        text: 'Your task has been deleted.',
                        imageUrl: 'https://prodmoan.s3.amazonaws.com/2018/07/1532643722339-2-300x300.jpeg', // Replace with your custom success image
                        imageAlt: 'Success image',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'OK'
                    });
                }
            });
        });

        listItem.appendChild(removeImage);
        taskList.appendChild(listItem);

        // Clear the input field
        newTaskInput.value = '';
    });
});
