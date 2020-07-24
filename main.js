//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//

const fs = require('fs');
const studentsJSON = fs.readFileSync('../students.json', 'utf8');
const students = JSON.parse(studentsJSON)
//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//


/*********************************
 * GET STUDENT BY INDEX FUNCTION *
 *********************************/

//  given an index
//  return student located at that index
//  student located ('../students.json')



const getStudentByIndex = function (index) {

  return students.students[index]
}


//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//



/***********************
 * GET STUDENT BY NAME *
 ***********************/

//given a first name
//   return that student from the JSON 
//  if no student match input --> return -1

const getStudentByName = function (firstName) {
  for (let rows of students.students) {

    if (rows.name === firstName) {

      return rows
    }

  }
  return -1

}


//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//

/*****************************
 * GRADUATE STUDENT FUNCTION *
 *****************************/

// get student name
//  plus their term by 1
//write back to students.JSON

const graduateStudent = function (studentName) {
  let studentsArray = students.students
  for (let studentInfoObject of studentsArray) {

    if (studentName === studentInfoObject.name) {
      studentInfoObject.term = studentInfoObject.term + 1
    }

    const backToJSON = JSON.stringify(students)
    fs.writeFileSync('../students.json', backToJSON)
  }
}





//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//


if (typeof getStudentByIndex === 'undefined') {
  getStudentByIndex = undefined;
}

if (typeof getStudentByName === 'undefined') {
  getStudentByName = undefined;
}

if (typeof graduateStudent === 'undefined') {
  graduateStudent = undefined;
}


module.exports = {
  getStudentByIndex,
  getStudentByName,
  graduateStudent,
}