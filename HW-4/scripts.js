
function womensNameCheck(name) {
    return name.endsWith('а');
}

function createPairs(arr) {
    let menArr = [];
    let womenArr = [];
    let newArr = [];
    
    for(let i = 0; i < arr.length; ++i ) {
        let name = students[i];

        if(womensNameCheck(name)){
            womenArr.push(name);
        }
        else
            menArr.push(name);
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

function attachThemes(arr, themesArr) {
    let newArr = [];
    let pairsTogetherArr = [];
    
    // other variant of joining
    // let pairsTogetherArr = arr.map( name => name.join(" i "));

    for(let i = 0; i < arr.length; i++) {
        pairsTogetherArr = arr[i].join(" i ");
        newArr.push([pairsTogetherArr, themesArr[i]]);
    }

    return newArr;
}

function attachGrades(arr, gradesArr) {
    let newArr = [];

    for(let i = 0; i < arr.length; i++) {
        newArr.push([arr[i], gradesArr[i]]);
    }
    return newArr;
}

function pairsGetRandomMark(pairsArr) {
    let newArr = [];

    for (let i = 0; i < pairsArr.length; i++) {
        let randomMark =  Math.floor(Math.random() * 5 + 1);
        newArr.push(pairsArr[i].concat(randomMark));

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

