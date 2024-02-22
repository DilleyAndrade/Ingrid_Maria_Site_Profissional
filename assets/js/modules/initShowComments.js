export function initShowComments() {

  let timer = 0

  const buttonComment1 = document.querySelector('.buttonComment1')
  const buttonComment2 = document.querySelector('.buttonComment2')
  const buttonComment3 = document.querySelector('.buttonComment3')

  const comment1 = document.querySelector('.comment1')
  const comment2 = document.querySelector('.comment2')
  const comment3 = document.querySelector('.comment3')

  buttonComment1.addEventListener('click', showComment1)
  buttonComment2.addEventListener('click', showComment2)
  buttonComment3.addEventListener('click', showComment3)

  function showComment1() {
    comment1.classList.remove('hide')
    comment2.classList.add('hide')
    comment3.classList.add('hide')
    timer = 0
  }

  function showComment2() {
    comment1.classList.add('hide')
    comment2.classList.remove('hide')
    comment3.classList.add('hide')
    timer = 5
  }

  function showComment3() {
    comment1.classList.add('hide')
    comment2.classList.add('hide')
    comment3.classList.remove('hide')
    timer = 10
  }

  
  

    setInterval(()=>{
      timer++
      if(timer <=5) {
        comment1.classList.remove('hide')
        comment2.classList.add('hide')
        comment3.classList.add('hide')
        buttonComment1.classList.add('active')
        buttonComment2.classList.remove('active')
        buttonComment3.classList.remove('active')
      }else if(timer > 5 && timer < 10) {
        comment1.classList.add('hide')
        comment2.classList.remove('hide')
        comment3.classList.add('hide')
        buttonComment1.classList.remove('active')
        buttonComment2.classList.add('active')
        buttonComment3.classList.remove('active')
      }else if(timer > 10 && timer <= 15){
        comment1.classList.add('hide')
        comment2.classList.add('hide')
        comment3.classList.remove('hide')
        buttonComment1.classList.remove('active')
        buttonComment2.classList.remove('active')
        buttonComment3.classList.add('active')
      }

      if(timer === 15) {
        timer = 0
      }
    },1000)

}
