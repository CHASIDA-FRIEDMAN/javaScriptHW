function f1() {

    document.querySelector("#result1").innerHTML = ""
    let fil = document.querySelector("#filter1").value
    const arr1 = catalog.filter(item => item.title.includes(fil))
    for (let i = 0; i < catalog.length; i++) {
        document.querySelector("#result1").innerHTML += arr1[i]["title"] + "<br>"
    }
    f4(result1)

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
    document.querySelector("#result3").innerHTML = ""
    let year1 = document.querySelector("#year1").value
    let year2 = document.querySelector("#year2").value
    const ob3 = catalog.find(item=>item.year>year1&&item.year<year2)
    document.querySelector("#result3").innerHTML = ob3.title
}

function f4(x){
    document.querySelector("#tab").innerHTML=""
    const t=x.map(item=>
    `<tr>
        <td>${item.title}</td>
        <td>${item.company}</td>
        <td>${item.country}</td>
        <td>${item.id}</td>
        <td>${item.price}</td>
        <td>${item.artist}</td>
        <td>${item.year}</td>
    </tr>`)
    document.querySelector("#tab").innerHTML+=t.join('')

}


function f5(){
    let newdisk={
        title:document.getElementById("title").value,
        artist:document.getElementById("artist").value,
        company:document.getElementById("company").value,
        country:document.getElementById("country").value,
        price:document.getElementById("price").value,
        year:document.getElementById("year").value,
        id: (catalog.length+100)
    }
    catalog.push(newdisk)
    alert("new disk added!")
}

function f6(){
    let remove=document.querySelector("#rem").value
    let ind=catalog.findIndex(item=>item.id==remove)
    if(ind>-1)
    {
        catalog.splice(ind,1)
        alert("this disk removed!")
    }
    else{
        alert("this disk not exist!")

    }

}