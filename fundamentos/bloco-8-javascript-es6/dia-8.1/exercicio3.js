const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];



const hof = (right, student, points) => {
  return points(right, student);
}
const points = (right, student) => {
  let result = 0;
  right.forEach((element, index) => {
    if (student[index] === element) {
      result += 1;
    } else if (student[index] !== element && student[index] !== 'N.A')
      result -= 0.5;
  });
  return result;
}
console.log(hof(RIGHT_ANSWERS, STUDENT_ANSWERS, points));
