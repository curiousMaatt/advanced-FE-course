
class Student {
    constructor(university, course, fullName, mark) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.mark = mark;
        this.isLearning = true;
    }

    getInfo() {
        console.log(`Студент ${this.course}-го курсу, ${this.university}, ${this.fullName}`);
    }

    get marks(){
        return this.isLearning ? this.mark : null;
    }

    set marks(mark) {
        if(this.isLearning) this.mark.push(mark);
    }

    getAverageMark() {
        if(this.isLearning) {
            let sum = 0;
        
            this.mark.forEach((item) => {
                sum += item;
            });
        
            return sum/this.mark.length;
        }
        return null;
    }

    dissmiss() {
        this.isLearning = false;
    }

    recover() {
        this.isLearning = true;
    }
}

class BudgetStudent extends Student {
    constructor(university, course, fullName, mark){
        super(university, course, fullName, mark);
        this.isLearning = true;

        setInterval( () => { this.getScholarship(); }, 30000);
    }

    getScholarship() {
        const MinMarkForScholarship = 4;

        if((this.isLearning) && this.getAverageMark() >= MinMarkForScholarship) {
            console.log("Ви отримали 1400 грн. стипендії");
        }
    }
}

let student = new Student("Вища Школа Психотерапії м.Одеса", 1, "Остап Бендер", [5, 4, 4, 5]);
student.getInfo();

console.log(student.marks);

student.marks = 5;
console.log(student.marks);

console.log(`The average is ${student.getAverageMark()}`);

student.dissmiss();
console.log(student.marks);
student.marks = 5;
console.log(student.getAverageMark());

student.recover();
console.log(student.marks);
console.log(student.getAverageMark());

let student1 = new BudgetStudent("Вища Школа Психотерапії м.Одеса", 1, "Остап Бендер", [5, 4, 4, 5]);
