let course = {
  name: '',
  description: '',
  students: [],
  addStudents(studentName) {
    this.students.push(studentName)
    console.log(`${studentName} added to ${this.name} course`)
  },
  date: '12/12/2021'
};

let english = {
  name: "english course",
  description: "this is good course",
  students: []
}

let math = {
  name: "math course",
  description: "this is very good course",
  students: []
}

let addStudents = course.addStudents;
//add("asaf")//its will not work.
//this function will referance to undefined 
addStudents.apply(english, ["asaf"])
addStudents.apply(math, ["Dani"])
addStudents.apply(english, ["asaf"])
addStudents.apply(math, ["Ron"])

console.log(math);
console.log(english);

course.addStudents('Bruno');
