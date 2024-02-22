export function initMovePhoto() {

  const photo1 = document.querySelector('.photo1')
  const photo2 = document.querySelector('.photo2')
  const photo3 = document.querySelector('.photo3')

  let counter = 0

  setInterval(()=>{
    counter++
    if(counter <= 4) {
      photo1.classList.remove('hide')
      photo2.classList.add('hide')
      photo3.classList.add('hide')

    }else if(counter > 4 && counter < 8) {
      photo1.classList.add('hide')
      photo2.classList.remove('hide')
      photo3.classList.add('hide')

    }else if(counter > 8 && counter <= 12){
      photo1.classList.add('hide')
      photo2.classList.add('hide')
      photo3.classList.remove('hide')
    }

    if(counter === 12) {
      counter = 0
    }
  },1000)

}