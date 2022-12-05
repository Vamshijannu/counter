const counter=document.querySelector('#counter')
const btns=document.querySelectorAll('.btn') 
let count=0

btns.forEach((btn)=> {
   btn.addEventListener('click', (e) =>{
       const styles=e.currentTarget.classList

       if(styles.contains('increase')){
           count++
       }

       if(styles.contains('reset')){
           count=0
       }
       counter.textContent= count

       if(styles.contains('decrease')){
           count--
       }
       counter.textContent= count
       if(count==70){
        alert('I know why you stopped ')
       }

       
   })
})