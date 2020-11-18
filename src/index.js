document.addEventListener("DOMContentLoaded", () => {
  // your code here
  handleForm()
});

const handleForm = () => {
  const taskForm = document.querySelector('#create-task-form')
  taskForm.addEventListener('submit', function(event) { 
    event.preventDefault()
    
    const description = event.target.querySelector('#new-task-description')
    const name = event.target.querySelector('#new-task-name')
    const taskLi = document.createElement('li')
    // const taskName = document.createElement('form')
    // const nameLabel = document.createElement('label')
    // const nameInput = document.createElement('input')
    // const nameInput2 = document.createElement('input')
    // const mainContentDiv = document.querySelector('#main-content')

    // mainContentDiv.appendChild(taskName)
    // taskName.appendChild(nameLabel)
    // taskName.appendChild(nameInput)
    // taskName.appendChild(nameInput2)

    // taskName.type = 'form'
    // nameLabel.type = 'label'
    // nameInput.type = 'text'
    // nameInput.placeholder = 'Task Name'
    // nameInput2.type = 'submit'

    taskLi.innerText = `${name.value}: ${description.value}`
    // console.log("Form was submitted")

    const taskParent = document.querySelector('#tasks')
    taskParent.appendChild(taskLi)

    event.target.reset()
  })
}

// function deleteTask() {
//   //access li
//   const taskParent = document.querySelector('#tasks')
//   //.remove? .delete? remove li
// }

  

  

  // const handleForm = () => {
  //   // Get the form
  //   const commentForm = document.querySelector('#comment-form')
  
  //   // Listen for an event => Submission
  //   commentForm.addEventListener('submit',(event) => {
  //     event.preventDefault()
  //     renderListItem(event)
  //     event.target.reset()
  //   })
  
  // }
  