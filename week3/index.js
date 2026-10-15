const EmpSkills= (skills,Name,LabGrp)=> {
    console.log(" 1232312"+ Name+ "Expert in "+ skills)
    console.log("Lab Group Name:",LabGrp)
}
EmpSkills('Javascript', 'John', 19)





const student= require('./Studentinfo')
const person = require('./Person')

console.log("Student Name:" +student.getName())
console.log(student.Location())
console.log(student.dob)// because dob is a variable so we do nt use ()
console.log(student.Studentgrade())
console.log("grade is "+student.Studentgrade(55) )


person1= new person("Jim","70","myemail@gmail.com")
console.log("using Person Module",person1.getPersonInfo())
console.log("Programe ended")