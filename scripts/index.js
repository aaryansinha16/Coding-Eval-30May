// Add the coffee to local storage with key "coffee"


async function getData(){
    let url = `https://masai-mock-api.herokuapp.com/coffee/menu`

    let res = await fetch(url)

    let data = await res.json()

    console.log(data.menu.data)
    append(data.menu.data)

}

getData()

function append(data){
    data.forEach(function(elem){
        // console.log(elem)
        let box = document.createElement("div")
        box.setAttribute('class', 'box')
        
        let img = document.createElement("img")
        img.setAttribute("src", elem.image)
        img.setAttribute("class", 'img')
        
        let name = document.createElement("p")
        name.innerText = elem.title
        name.setAttribute("class", 'name')
        
        let price = document.createElement("p")
        price.innerText = `Price: ${elem.price}Rs`
        price.setAttribute("class", 'price')
        
        let addToBucket = document.createElement("button")
        addToBucket.innerText = "Add to Bucket"
        addToBucket.setAttribute("id", 'add_to_bucket')
        addToBucket.addEventListener('click', function(){
            bucketFun(elem)
        })
        
        box.append(img, name, price, addToBucket)
        document.querySelector("#menu").append(box)
    })
}

let bucketArr = JSON.parse(localStorage.getItem("coffee")) || []

function bucketFun(elem){
    // console.log(elem)
    bucketArr.push(elem)
    console.log(bucketArr)
    localStorage.setItem('coffee', JSON.stringify(bucketArr))
    window.location.reload()
}

function coffeeCount(){
    let count = document.querySelector("#coffee_count")
    // console.log(count)
    count.innerText = `${bucketArr.length}`
}
coffeeCount()