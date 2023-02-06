div11 = document.getElementById('div1')
div22 = document.getElementById('div2')
show = document.getElementById('show')
hide = document.getElementById('hide')

show.addEventListener('click',function(){

    div11.style.display="block"
    div22.style.display="none"
})


hide.addEventListener('click',function(){

    div1.style.display="none"
    div2.style.display="block"
})



