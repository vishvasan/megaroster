$(document).foundation()

const megaroster = {
    students:[],

    init(listSelector) {
        this.studentList = document.querySelector('#new-student')
        this.max = 0
        document 
            .querySelector('#new-student')
            .addEventListener('submit', this.addStudent.bind(this))
    },

    addStudent(ev) {
        ev.preventDefault()
        const f = ev.target
        const student = {
            id: this.max + 1,
            name: f.studentName.value,
        }
        this.buildListItem(student)
        this.max++
    },

    buildListItem(student) {

    },
}
megaroster.init('#studentList')
