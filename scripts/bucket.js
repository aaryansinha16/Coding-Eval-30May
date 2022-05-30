// On clicking remove button the item should be removed from DOM as well as localstorage.

let bucketData = JSON.parse(localStorage.getItem('coffee')) || []

// console.log(bucketData)
append(bucketData)

function append(data){
    data.forEach(function(elem, index){
        // console.log(elem)
        let box = document.createElement("div")
        box.setAttribute("class", 'box')
        
        let img = document.createElement("img")
        img.setAttribute("src", elem.image)
        img.setAttribute("class", 'img')
        
        let name = document.createElement("p")
        name.innerText = elem.title
        name.setAttribute("class", 'name')
        
        let price = document.createElement("p")
        price.innerText = `Price: ${elem.price}Rs`
        price.setAttribute("class", 'price')
        
        let remove = document.createElement("button")
        remove.innerText = "Remove"
        remove.setAttribute("id", 'remove_coffee')
        remove.addEventListener('click', function(){
            removeFun(elem, index)
        })
        
        box.append(img, name, price, remove)
        document.querySelector("#bucket").append(box)
    })
}

function removeFun(elem, index){
    bucketData.splice(index, 1)
    console.log(bucketData)

    localStorage.setItem("coffee", JSON.stringify(bucketData))

    window.location.reload()
}

function price(){
    let price = document.querySelector("#total_amount")

    let sum = 0
    // console.log(bucketData)
    for(var i = 0; i<bucketData.length; i++){
        sum+= bucketData[i].price
    }

    console.log(sum)

    price.innerText = `Total Price: ${sum}`
}

price()