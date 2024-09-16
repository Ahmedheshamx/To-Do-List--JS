let btn =document.querySelector('#btn')
let input = document.querySelector('#text')
let notComplet = document.querySelector('#not-complet')
let complet = document.querySelector('#complet')

btn.addEventListener('click',btnclick)




    let delbtn =document.createElement('button')
    delbtn.classList = "delbtn"
    delbtn.innerHTML='<i class="fa-solid fa-trash"></i>'
    let checkbtn =document.createElement('button')
    checkbtn.classList = "checkbtn"
    checkbtn.innerHTML='<i class="fa-solid fa-check"></i>'








function btnclick() {
    if (input.value.length>1){
     
    let text = input.value
    input.value=""

    
    let delbtn =document.createElement('button')
    delbtn.classList = "delbtn"
    delbtn.innerHTML='<i class="fa-solid fa-trash"></i>'

    delbtn.addEventListener('click',function(){
        delbtn.parentNode.parentNode.remove()

    })
    let checkbtn =document.createElement('button')
    checkbtn.classList = "checkbtn"
    checkbtn.innerHTML='<i class="fa-solid fa-check"></i>'

    checkbtn.addEventListener('click',function(){
        // delbtn.parentNode.parentNode.classList.add('complet')
        checkbtn.remove()
        complet.appendChild(li)


    })

    let li = document.createElement('li')
    let containetli = document.createElement('div')
    containetli.textContent = text

    li.appendChild(containetli)
    let containetbtn = document.createElement('div')
    containetbtn.appendChild(checkbtn)
    containetbtn.appendChild(delbtn)
    
    li.appendChild(containetbtn)

notComplet.appendChild(li)

    console.log(text)
}
}


// console.log(delbtn);
