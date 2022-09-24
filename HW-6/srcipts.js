const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
}];

function getAverage(arr) {
  let sum = 0;
  let count = 0;

  arr.forEach((item) => {
      sum += item;
      count++;
  });

  return sum/count;
}

// №1
const SIGN = "_";
function getSubjects(arr) {
    let subjectNamesArr = Object.keys(arr.subjects);

    return capitalizedArr =  subjectNamesArr.map( val => {
        if( val.includes(SIGN)) {
            let arr = val.split(SIGN);
            for (let i in arr) {
                arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
            }
            const capitalized = arr.join(" ");
            return capitalized;
        }

        const capitalized = val.charAt(0).toUpperCase() + val.slice(1);
        return capitalized;
    });
    // не знаю як зробити без вкладеною ітерації 
}

// №2
function getAverageMark(arr) {
  let newArr = [];

  Object.values(arr.subjects).forEach( val => newArr = newArr.concat(val));
  return getAverage(newArr).toFixed(2);
}

// №3
function getStudentInfo(arr) {
  const obj = {
    "course": arr.course,
    "name": arr.name,
    "averageMark": getAverageMark(arr)
  }
  return obj;
}

// №4
function getStudentsNames(students) {
  let namesArr = [];

  for (i in students) {
    namesArr.push(students[i].name);
  }

  return namesArr.sort();
}

// №5
function getBestStudent(students) {
  let bestStudent = "";
  let highestGrade = 0;

  for(i in students) {
    let grade = getAverageMark(students[i]);
    if(grade > highestGrade) {
      highestGrade = grade;
      bestStudent = students[i].name;
    }
  } 

  return bestStudent;
}

// №6
function calculateWordLetters(str) {
  let obj = {};

  for(let i = 0; i < str.length; i++) {
    if( !obj[str[i]] ) obj[str[i]] = 0;
    obj[str[i]]++;
  }

  return obj;
}

console.log(getSubjects(students[0]));
console.log(getAverageMark(students[0]));
console.log(getStudentInfo(students[0]));
console.log(getStudentsNames(students));
console.log(getBestStudent(students));
console.log(calculateWordLetters("тест"));
