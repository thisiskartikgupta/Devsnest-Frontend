
const setVolume = obj => {
    obj.volume = (Math.PI * obj.radius * obj.radius * obj.height).toFixed(4);
}

const Cylinder = {
    radius : 2,
    height : 3,
}

setVolume(Cylinder);
console.log(Cylinder.volume)