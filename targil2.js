//1
const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
const object = names.reduce((item, name) => {
    item[name] = (item[name] || 0) + 1
    return item
}, {})
console.log(object)

//2
const letters = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
const array = letters.reduce((item, letter) => { 
    if (!item.includes(letter)) item.push(letter) 
        return item },[])
console.log(array)

//3
const numbers=[-5,25,-19,0,16,0]

const array3 = numbers.reduce((item, num) => { 
    if (num>0) item.push(Math.sqrt(num)) 
        return item },[])
console.log(array3)