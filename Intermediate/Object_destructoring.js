/*

*/

const course = {
    course_name : "JS full length course",
    course_tutor : "Vignesh",
    course_duration : "5 hours"
}

// Object Destructoring
const {course_tutor:tutor} = course;
const {course_name : naam} = course;
const {course_duration : duration} = course;

// console.log(course.course_tutor) // Vignesh
// console.log(course_tutor); // Vignesh
console.log(tutor); // Vignesh
console.log(naam); // JS full length course
console.log(duration); // 5 hours

