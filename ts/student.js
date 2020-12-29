var Students = /** @class */ (function () {
    function Students(id, fname, faveNumber, favColor) {
        this.id = id;
        this.fname = fname;
        this.faveNumber = faveNumber;
        this.favColor = favColor;
    }
    Students.prototype.print = function () {
        console.log(this.id + "|" + this.fname + "|" + this.faveNumber + "|" + this.favColor);
    };
    return Students;
}());
//declaring instance object,
//then adding them into an array of type student
var ron = new Students(1, "Ron", 7, "green");
var chris = new Students(2, "Chris", 43, "red");
var julie = new Students(3, "julie", 15, "pink");
var phil = new Students(4, "Phil", 13, "pink");
var sean = new Students(5, "sean", 14, "orange");
var students = [ron, chris, julie, phil, sean];
console.log(students);
for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
    var student_2 = students_1[_i];
    student_2.print();
}
// creating the array and the instance inside of it
var student = [
    new Students(1, "Ron", 7, "green"),
    new Students(2, "Chris", 43, "red"),
    new Students(3, "julie", 15, "pink"),
    new Students(4, "Phil", 13, "pink"),
    new Students(5, "sean", 14, "orange"),
];
for (var _a = 0, student_1 = student; _a < student_1.length; _a++) {
    var students_2 = student_1[_a];
    students_2.print();
}
