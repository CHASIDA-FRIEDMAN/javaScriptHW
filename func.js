function f1() {
    document.querySelector("#result1").innerHTML=""
    let fil = document.querySelector("#filter1").value
    const arr=catalog.filter(item => item.title.includes(fil))
    for (let i = 0; i < catalog.lcatalog; i++){
        document.querySelector("#result1").innerHTML+=catalog[i]["title"]+"<br>"
    }

}