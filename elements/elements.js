
const monsters = [
    { name: "Frankstein's Monster" },
    { name: "The mummy" },
    { name: "Vlad the Implar (Dracula)" }
];

function getMonster(m, i){
    return `<div id="${i}">${m.name}</div>` 
}



console.log(monsters.map(getMonster).join())