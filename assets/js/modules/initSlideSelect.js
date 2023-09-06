export function initSlideSelect() {

  const bigSlide1 = document.querySelector('.bigSlide1')
  const bigSlide2 = document.querySelector('.bigSlide2')
  const bigSlide3 = document.querySelector('.bigSlide3')

  const smallSlide1 = document.querySelector('.smallSlide1')
  const smallSlide2 = document.querySelector('.smallSlide2')
  const smallSlide3 = document.querySelector('.smallSlide3')

  smallSlide1.addEventListener('click', openSlide1)
  smallSlide2.addEventListener('click', openSlide2)
  smallSlide3.addEventListener('click', openSlide3)

  function openSlide1(event) {
    event.preventDefault();
    bigSlide1.classList.remove('hide')
    bigSlide2.classList.add('hide')
    bigSlide3.classList.add('hide')
  }

  function openSlide2(event) {
    event.preventDefault();
    bigSlide1.classList.add('hide')
    bigSlide2.classList.remove('hide')
    bigSlide3.classList.add('hide')
  }

  function openSlide3(event) {
    event.preventDefault();
    bigSlide1.classList.add('hide')
    bigSlide2.classList.add('hide')
    bigSlide3.classList.remove('hide')
  }



}