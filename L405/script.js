let students = [
    {
        id: 1,
        name: 'beso',
        gpa: 3
    },
    {
        id: 2,
        name: 'givi',
        gpa: 1.7
    },
    {
        id: 3,
        name: 'jemala',
        gpa: 2.4
    },
    {
        id: 4,
        name: 'lavrenti',
        gpa: 1.2
    },
    {
        id: 5,
        name: 'chemikainikalai',
        gpa: 2.9
    }
];

function List(array, mingpa = 2) {
    let Array = array.filter(x => x.gpa > mingpa).map((x) => x.gpa);
    let sum = 0;
    for (var i = 0; i < Array.length; i++) {
        sum += Array[i];

    }
    let avg = sum / (Array.length > 0 ? Array.length : 1);

    return avg;
}

console.log(myList(students, 1));
