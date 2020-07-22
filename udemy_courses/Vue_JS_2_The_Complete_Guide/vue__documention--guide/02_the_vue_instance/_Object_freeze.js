// The Object.freeze() method freezes an object. A frozen object can no
// longer be changed; freezing an object prevents new properties from
// being added to it, existing properties from being removed ... etc


const vehicle = {
    
    type: 'car',
    model: 'toyota'

}

console.log(vehicle);


vehicle.year = 2006;
console.log(vehicle);


Object.freeze(vehicle);
vehicle.color = 'red';
console.log(vehicle);