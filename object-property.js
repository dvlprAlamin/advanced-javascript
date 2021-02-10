const students = [
    { id: 21, name: 'Omar Sunny' },
    { id: 41, name: 'Manna' },
    { id: 51, name: 'Moyori' },
    { id: 61, name: 'Dipjol' }
];
const studentName = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    studentName.push(element.name);
}
// console.log(studentName);
const names = students.map(x => x.name);
console.log(names);