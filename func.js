function f1() {

    document.querySelector("#result1").innerHTML = ""
    let fil = document.querySelector("#filter1").value
    const arr1 = catalog.filter(item => item.title.includes(fil))
    for (let i = 0; i < catalog.length; i++) {
        document.querySelector("#result1").innerHTML += arr1[i]["title"] + "<br>"
    }

}

const arrc2 = catalog.map(item => item.country)
const arr2 = arrc2.filter((item, index) =>!arrc2.includes(item,index+1))
arr2.sort()
for (const item of arr2) {
    document.querySelector("#sel").innerHTML += "<option>"+ item + "</option>"
}
function f2() {
    document.querySelector("#result2").innerHTML = ""
    let c=document.querySelector("#sel").value
    const arrc = catalog.filter(item => item.country===c)
    for (let i = 0; i < catalog.length; i++) {
        document.querySelector("#result2").innerHTML += arrc[i]["title"] + "<br>"
    }
}

function f3(){
    
}