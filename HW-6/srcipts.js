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

  arr.forEach((item) => {
      sum += item;
  });

  return sum/arr.length;
}

// №1
const SIGN = "_";
function getSubjects(arr) {
  let subjectNamesArr = Object.keys(arr.subjects);

  return capitalizedArr =  subjectNamesArr.map( val => {
    let capitalized = val.charAt(0).toUpperCase() + val.slice(1);

    if(capitalized.includes(SIGN)) {
      // let arr = capitalized.split(SIGN);
      let arr = capitalized.replace(SIGN, " ");

      return  arr;
    }
    return capitalized;
  });
}

// №2
function getAverageMark(arr) {
  let newArr = Object.values(arr.subjects).flat();
  return getAverage(newArr).toFixed(2);
}

// №3
function getStudentInfo(arr) {
  return obj = {
    "course": arr.course,
    "name": arr.name,
    "averageMark": getAverageMark(arr)
  }
}

// №4
function getStudentsNames(students) {
  // let namesArr = [];
  // for (i in students) {
  //   namesArr.push(students[i].name);
  // }
  // return namesArr.sort();

  return students.map( val => val.name).sort();
}

// №5
function getBestStudent(students) {
  let bestStudent = "";
  let highestGrade = 0;

  // for(i in students) {
  //   let grade = getAverageMark(students[i]);
  //   if(grade > highestGrade) {
  //     highestGrade = grade;
  //     bestStudent = students[i].name;
  //   }
  // }

  students.forEach( (val) => {
    let grade = getAverageMark(val);
    if(grade > highestGrade) {
      highestGrade = grade;
      bestStudent = val.name;
    }
  });

  return bestStudent;
}

// №6
function calculateWordLetters(str) {
  let obj = {};

  for(let i = 0; i < str.length; i++) {
    let letter = str[i];

    if( !obj[letter] ) obj[letter] = 0;
    obj[letter]++;
  }

  return obj;
}

console.log(getSubjects(students[0]));
console.log(getAverageMark(students[0]));
console.log(getStudentInfo(students[0]));
console.log(getStudentsNames(students));
console.log(getBestStudent(students));
console.log(calculateWordLetters("тест"));
