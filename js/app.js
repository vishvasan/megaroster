$(document).foundation()

const megaroster = {
  students: [],

  init(listSelector) {
    this.studentList = document.querySelector(listSelector)
    this.max = 0
    this.setupEventListeners()  
  },

  setupEventListeners() {
    document
      .querySelector('#new-student')
      .addEventListener('submit', this.addStudent.bind(this))
  },

  removeStudent(ev) {
    const btn = ev.target
    btn.closest('.student').remove()

    // Remove it from the this.students array
    // this.students.splice(?, 1)
    for (let i = 0; i < studentList.length; i++) {
      if (index > -1) {
        this.students.splice(i,1);
      }
    }
  },

  addStudent(ev) {
    ev.preventDefault()
    const f = ev.target
    const student = {
      id: this.max + 1,
      name: f.studentName.value,
    }
    this.students.unshift(student)

    const listItem = this.buildListItem(student)
    this.prependChild(this.studentList, listItem)

    this.max ++
    f.reset()
  },

  prependChild(parent, child) {
    parent.insertBefore(child, parent.firstChild)
  },

  buildListItem(student) {
    const template = document.querySelector('.student.template')
    const li = template.cloneNode(true)
    this.removeClassName(li, 'template')
    li.querySelector('.student-name').textContent = student.name
    li.dataset.id = student.id

    li
      .querySelector('button.remove')
      .addEventListener('click', this.removeStudent.bind(this))
    return li
  },

  removeClassName(el, className){
    el.className = el.className.replace(className, '').trim()
  }
}

myStorage = localStorage;
localStorage.setItem('student', 'v');

// $('.upbutton').on('click', function () {
//     var hook = $(this).closest('.liEllipsis').prev('.liEllipsis');
//     if (hook.length) {
//         var elementToMove = $(this).closest('.liEllipsis').detach();
//         hook.before(elementToMove);
//     }
// });
// $('.downbutton').on('click', function () {
//     var hook = $(this).closest('.liEllipsis').next('.liEllipsis');
//     if (hook.length) {
//         var elementToMove = $(this).closest('.liEllipsis').detach();
//         hook.after(elementToMove);
//     }
// });


megaroster.init('#studentList')
