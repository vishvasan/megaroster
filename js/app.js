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

megaroster.init('#studentList')



// $('.liEllipsis').on('click', function () {
//     $('.selected').removeClass('selected');
//     $(this).addClass('selected');
// });

// $('.upbutton').on('click', function () {
//     var $currentElement = $('#ul_li_SubCategories .selected');
//     moveUp($currentElement);
// });
    
// $('.downbutton').on('click', function () {
//     var $currentElement = $('#ul_li_SubCategories .selected');
//     moveDown($currentElement);
// });

// var moveUp = function ($currentElement) {
//     var hook = $currentElement.prev('.liEllipsis');
//     if (hook.length) {
//         var elementToMove = $currentElement.detach();
//         hook.before(elementToMove);
//     }
// };

// var moveDown = function ($currentElement) {
//     var hook = $currentElement.next('.liEllipsis');
//     if (hook.length) {
//         var elementToMove = $currentElement.detach();
//         hook.after(elementToMove);
//     }
// };
