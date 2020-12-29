class Students {
  id: number;
  fname: string;
  faveNumber: number;
  favColor: string;

  constructor(id: number, fname: string, faveNumber: number, favColor: string) {
    this.id = id;
    this.fname = fname;
    this.faveNumber = faveNumber;
    this.favColor = favColor;
  }

  print(): void {
    console.log(`${this.id}|${this.fname}|${this.faveNumber}|${this.favColor}`);
  }
}

//declaring instance object,
//then adding them into an array of type student
let ron = new Students(1, "Ron", 7, "green");
let chris = new Students(2, "Chris", 43, "red");
let julie = new Students(3, "julie", 15, "pink");
let phil = new Students(4, "Phil", 13, "pink");
let sean = new Students(5, "sean", 14, "orange");
let students: Students[] = [ron, chris, julie, phil, sean];
console.log(students);
for (let student of students) {
  student.print();
}

// creating the array and the instance inside of it
let student: Students[] = [
  new Students(1, "Ron", 7, "green"),
  new Students(2, "Chris", 43, "red"),
  new Students(3, "julie", 15, "pink"),
  new Students(4, "Phil", 13, "pink"),
  new Students(5, "sean", 14, "orange"),
];
for (let students of student) {
  students.print();
}
