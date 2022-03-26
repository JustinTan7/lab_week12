//part 2
function single_element() {
    const element = document.querySelector(".container");
    console.log(element)
}


//part 3
const students = [
  { name: "Tasha", grades: [ 80, 67, 75, 62 ] },
  { name: "Tuvok", grades: [ 90, 88, 91, 92 ] },
  { name: "Dax", grades: [ 88, 90, 89, 85 ] },
  { name: "Neelix", grades: [ 60, 54, 48, 50 ] }
]

const studentsScholarship = []

function get_total(student) {
  let gradeTotal = 0
  for (const grade of student.grades) {
      gradeTotal += grade
  }
  return gradeTotal
}

function add_to_array(student, gradeAvg) {
  if (gradeAvg >= 80) {
      studentsScholarship.push({name: student.name, gradeAvg: gradeAvg})
  }
}

function turn_to_list(student_array){
  let gradeAvg = 0
  for (const student of student_array) {
      gradeAvg = get_total(student) / student.grades.length
      add_to_array(student, gradeAvg)
  }
  return studentsScholarship
}

turn_to_list(students)

console.log(studentsScholarship)

//part 4
function darkmode(){
  const dark = document.querySelector(".container");     
  dark.classList.replace("light-theme", 'dark-theme');  
}

function lightmode(){
  const light = document.querySelector(".container");             
  light.classList.replace("dark-theme", "light-theme");
}