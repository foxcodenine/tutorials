console.log('___________________________________________________________\n')

class Elements {
    constructor (name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Parks extends Elements {
    constructor (name, buildYear, area, trees) {

        super(name, buildYear);
        this.area = area;
        this.trees = trees;
    }
    calTreeDensity() {
        
        const density = Math.round(this.trees / this.area * 100) / 100;
        console.log(
            `Park ${this.name}, has a tree density of ${density}/km sq.`
        )
    }    
};

class Streets extends Elements {
    constructor (name, buildYear, _length) {
        super(name, buildYear);
        this._length = _length;
    }
}




class Town {
    static calParksAvgAge(...parks) {
        
        let numberOfParks = 0;
        let totalAge = 0;

        parks.forEach(park => {
            numberOfParks += 1;
            totalAge += new Date().getFullYear() - park.buildYear;
        });

        let avgAgeParks = Math.round(totalAge/numberOfParks);
        console.log(
            `Our town has ${numberOfParks} parks with an average age of ${avgAgeParks} years` 
        );
    }

    static parkTreeDensity(...parks ) {
        
        parks.forEach(park => {
            park.calTreeDensity()
        });
    }

    static calParks1000Trees(...parks) {
        
        parks.forEach(park => {
            if (park.trees >= 1000) {
                console.log(
                    `${park.name} park has more than 1000 trees.`
                )
            }
        });
    }

    static calAvgStrLength(...streets) {
        let numStr = 0;
        let totLength = 0;

        streets.forEach(str => {
            numStr += 1;
            totLength += str._length        
        });
        let avgLenght = Math.round(totLength / numStr * 100) / 100;
        console.log(
            `Our town has ${numStr} streets with an average length of ${avgLenght} meters`
        )        
    }
    static strClassification(...streets) {

        streets.forEach(str => {
            const len = str.lenght;
            let  type = ''
            if (len === undefined) {
                type = 'unknown'
            } else if (len < 20) {
                type = 'small'
            } else if (len < 50) {
                type = 'normal'
            } else if (len < 100) {
                type = 'big'
            } else {
                type = 'huge'
            }

            console.log(
                `${str.name} street, was build in ${str.buildYear}, and it is a ${type} street.`
            )

        });
    }
}

const PetersPool = new Parks('Peter\'s Pool', 1960, 4, 800);
const stChristopherPark = new Parks('St.Christopher', 1800, 12, 2200);
const westIslandPark = new Parks('West Island', 1900, 16, 1000);

const alexander = new Streets('Alexander', 1984, 200);
const royal = new Streets('Royal', 1565, 900);
const stedward = new Streets('St Edward', 1960, 30);
const sparrow = new Streets('Sparrow', 200, 60);

console.log('_________Parks_Report_________')
Town.calParksAvgAge(PetersPool, stChristopherPark, westIslandPark);
Town.parkTreeDensity(PetersPool, stChristopherPark, westIslandPark);
Town.calParks1000Trees(PetersPool, stChristopherPark, westIslandPark);
console.log('________Streets_Report________')
Town.calAvgStrLength(alexander, royal, stedward, sparrow);
Town.strClassification(alexander, royal, stedward, sparrow);

console.log('___________________________________________________________\n')

