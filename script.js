let father = document.querySelector('.father')
let btns = document.querySelector('button')
let inpts_all = []
let texts_all = []


let left = father.querySelector('.left')
let inpts_left = left.querySelectorAll('input')
let text_left = left.querySelectorAll('span')


let right = father.querySelector('.right')
let inpts_right = right.querySelectorAll('input')
let text_right = right.querySelectorAll('span')

inpts_all.push(...inpts_left, ...inpts_right)
texts_all.push(...text_left, ...text_right)

let errors = 0


btns.onclick = () =>{
    error = 0
    inpts_all.forEach(item =>{
      if(item.value.length > 4){
        console.log(item.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling);
        item.nextSibling.nextSibling.style.color = "red"
        item.classList.remove("inp_p")
        item.classList.add("inp")
        btns.style.backgroundColor = "#4200FF"
        btns.style.border = "2px solid #4200FF"
        errors++
     } else {
                        item.classList.remove("inp")
                        item.classList.add("inp_p")
                        btns.style.backgroundColor = "red"
                        btns.style.border = "2px solid #4200FF"
                        btns.style.color = "white"
                    }
    })
}

