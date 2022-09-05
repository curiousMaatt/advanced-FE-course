
function womensNameCheck(name) {
    return name.endsWith('а');
}

function createPairs(Arr) {
    let menArr = [];
    let womenArr = [];
    let name = "";
    let newArr = [];
    
    for(let i = 0; i < Arr.length; ++i ) {
        name = students[i].toString();
        name.endsWith('а') ? womenArr.push(name) : menArr.push(name);
    }

    for(let i = 0; i < menArr.length; i++) {
        newArr.push([menArr[i], womenArr[i]]);
    }

    // - similar
    // const pairsArr = manArr.reduce( (acc, curr, i) => {
    //     acc[i] = curr + " " + womanArr[i];
    //     return acc;
    // }, []);
    // return pairsArr;

    return newArr;
}

function attachThemes(Arr, themesArr) {
    let newArr = [];
    let pairsTogetherArr = Arr.map( name => name.join(" i "));

    for(let i = 0; i < Arr.length; i++) {
        newArr.push([pairsTogetherArr[i], themesArr[i]]);
    }

    return newArr;
}

function attachGrades(Arr, gradesArr) {
    let newArr = [];

    for(let i = 0; i < Arr.length; i++) {
        newArr.push([Arr[i], gradesArr[i]]);
    }
    return newArr;
}

function pairsGetRandomMark(pairsArr) {
    let newArr = [];
    let randomMarksArr = [];

    for (let i = 0; i < pairsArr.length; i++) {
        randomMarksArr.push(Math.floor(Math.random() * 5 + 1));
        newArr.push(pairsArr[i].concat(randomMarksArr[i]));
    }
    return newArr;
}

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const pairs = createPairs(students);
const pairsWithTheme = attachThemes(pairs, themes);
const studentsWithMarks = attachGrades(students, marks);
const randomGrades = pairsGetRandomMark(pairsWithTheme);

console.log(pairs);
console.log(pairsWithTheme);
console.log(studentsWithMarks);
console.log(randomGrades);
