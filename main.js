input = document.getElementsByTagName("input")[0]
addButton = document.getElementsByClassName("b1")[0]
items = document.getElementsByClassName("it")
clearButton = document.getElementsByClassName("button")[0]
listItems = document.getElementsByClassName('sec-3')[0]
allButton = document.getElementsByClassName("it")[0]
pendButton = document.getElementsByClassName("it")[1]
compButton = document.getElementsByClassName("it")[2]



input.addEventListener("focus",function() {
    input.value=""
})
let len=0

let click = 0 

let index = 0
window.addEventListener("load",function() {
    
    while(localStorage.getItem(`text-${index}`)||localStorage.getItem(`finish-${index}`)){
        li = document.createElement("div")
        li.setAttribute("class","list")
        text = document.createElement("div")
        text.setAttribute("class","text")
        if (localStorage.getItem(`finish-${index}`)) {
            text.innerHTML=localStorage.getItem(`finish-${index}`)
            text.style.textDecoration =  "line-through"
        } else {
            text.innerHTML=localStorage.getItem(`text-${index}`)
        }
        childOne = document.createElement("div")
        childOne.textContent="Done"
        childOne.setAttribute("class", "done")
        li.appendChild(text)
        li.appendChild(childOne)
        listItems.appendChild(li)
        index++
        click = 0
    }

})


allButton.addEventListener("click",function() {
    if (localStorage.length!==0) {
        if (click>0) {
            let length =listItems.children.length
            for (let i=0;i<length;i++) {
                listItems.removeChild(listItems.firstChild)
            }
            for (let i = 0 ; i < index ; i++) {
                li = document.createElement("div")
                li.setAttribute("class","list")
                text = document.createElement("div")
                text.setAttribute("class","text")
                if (localStorage.getItem(`finish-${i}`)) {
                    text.innerHTML=localStorage.getItem(`finish-${i}`)
                    text.style.textDecoration =  "line-through"
                } else {
                    text.innerHTML=localStorage.getItem(`text-${i}`)
                }
                childOne = document.createElement("div")
                childOne.textContent="Done"
                childOne.setAttribute("class", "done")
                li.appendChild(text)
                li.appendChild(childOne)
                listItems.appendChild(li)
            } 
        }
    }
    click=0
})

pendButton.addEventListener("click",function() {
    click+=1
    let length =listItems.children.length
    for (let i=0;i<length;i++) {
        listItems.removeChild(listItems.firstChild)
    }
    for (let i = 0 ; i < index ; i++) {
        if (!localStorage.getItem(`finish-${i}`)) {
            li = document.createElement("div")
            li.setAttribute("class","list")
            text = document.createElement("div")
            text.setAttribute("class","text")
            text.innerHTML=localStorage.getItem(`text-${i}`)
            li.appendChild(text)
            listItems.appendChild(li)
        } 
    } 
})

compButton.addEventListener("click", function() {
    click+=1
    let length =listItems.children.length
    for (let i=0;i<length;i++) {
        listItems.removeChild(listItems.firstChild)
    }
    for (let i = 0 ; i < index ; i++) {
        if (localStorage.getItem(`finish-${i}`)) {
            li = document.createElement("div")
            li.setAttribute("class","list")
            text = document.createElement("div")
            text.setAttribute("class","text")
            text.innerHTML=localStorage.getItem(`finish-${i}`)
            li.appendChild(text)
            listItems.appendChild(li)
        } 
    } 
})


addButton.addEventListener("click",function() {
    if (input.value!="") {
        li = document.createElement("div")
        li.setAttribute("class","list")
        text = document.createElement("div")
        text.setAttribute("class","text")
        text.innerHTML=input.value
        childOne = document.createElement("div")
        childOne.textContent="Done"
        childOne.setAttribute("class", "done")
        li.appendChild(text)
        li.appendChild(childOne)
        listItems.appendChild(li)
        localStorage.setItem(`text-${index}`,`${input.value}`)
        index++
        len +=1
    } 
})

clearButton.addEventListener("click",function() {
    let length =listItems.children.length
    for (let i=0;i<length;i++) {
        listItems.removeChild(listItems.firstChild)
        localStorage.clear()
    }
})


listItems.addEventListener("mouseenter" ,function() {
    doneButton = document.getElementsByClassName("done")
    lis = document.getElementsByClassName("text")
    for (let i=0;i<index;i++) {    
        doneButton[i].addEventListener("click",function() {
            lis[i].style.textDecoration= "line-through"
            lis[i].setAttribute("id","finish")
            localStorage.setItem(`finish-${i}`,`${lis[i].textContent}`)
            localStorage.removeItem(`text-${i}`)
        })
    }
})


