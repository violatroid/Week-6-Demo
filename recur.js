
let counter = 0;

function grow(c){
    if(c > limit){
        return; //no recursion
    }
    return grow(c + 1);
}

console.log(grow(1));




fruit = ["apple", "banana", "cherry"]
// console.log(fruit.pop())
// console.log(fruit.pop())
// console.log(fruit.pop())
// console.log(fruit.pop())

function show(list){
    const one = list.pop();
    if(one !== undefined){
        console(one);
        show(list);
    }
}
show(fruit);