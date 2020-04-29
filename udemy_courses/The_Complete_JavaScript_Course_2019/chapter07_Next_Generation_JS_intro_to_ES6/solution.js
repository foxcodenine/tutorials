class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}


class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area;
        this.numTrees = numTrees;
    }

    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(
`${this.name} has a tree density of ${Math.round(density * 100) / 100} \
trees per sq km.`
        )
    }
}



class Street extends Element {
    constructor(name, buildYear, length, size=3) {
        super (name, buildYear);
        this.length = length;
        this.size = size;
    }
    
    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(
`${this.name}, build in ${this.buildYear}, is a\
 ${classification.get(this.size)} street.`
        );
    }
}  


// array.reduce()
/*  
// https://www.w3schools.com/jsref/jsref_reduce.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
function calc(arr) {

    const sum = arr.reduce(function(prev, curr, index) {
        return prev + curr }, 0);   

    return [sum, sum / arr.length];
}
*/

// ES6
function calc(arr) {
    const sum = arr.reduce((prev, curr, index) => prev + curr, 0);
    return [
        Math.round(sum * 100) / 100, 
        Math.round(sum / arr.length * 100) / 100
    ];
}



const allParks = [
    new Park('Green Park', 1987, 0.2, 215),
    new Park('Natioal Park', 1894, 2.9, 3541),
    new Park('Oak Park', 1953, 0.4, 949)
];


const allStreets = [
    new Street('Ocean Avenue', 1999, 1.1, 4),
    new Street('Evergreen Street', 2008, 2.7, 2), 
    new Street('4th Street', 2015, 0.8), 
    new Street('Sunset Boulevard', 1982, 2.5, 5)
];


function reportParks(p) {
    console.log('--------PARKS REPORT--------');

    // Density
    p.forEach(el =>  el.treeDensity());

    // Average age
    const ages = p.map((cur, ind, arr) => new Date().getFullYear() - cur.buildYear)
    const [totalAge, avgAge] = calc(ages);
    console.log(
        `Our ${p.length} parks has an average age of ${avgAge} years.`)
    
        // Which park has more than 1000 trees
    
    /*
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);
    */

    const maxTrees = 900;
    const i = p.map(el => el.numTrees >= maxTrees);
    i.forEach((cur, ind) => {
        if(cur) {
            console.log(`${p[ind].name} has more than ${maxTrees} trees.`);
        }
    });
}


function reportStreets(s) {
    console.log('--------STREETS REPORT--------');

    // Total and avrage length of the town's streets 

    
    const [totalLen, avgLen] = calc(s.map(el => el.length));

    console.log(
`Our ${s.length}km streets have a total length of ${totalLen}km with an \
average length of ${avgLen}km`
    )
    // Clasify sizes
    s.forEach(el => {
        el.classifyStreet();
    });

}

reportParks(allParks);
reportStreets(allStreets);