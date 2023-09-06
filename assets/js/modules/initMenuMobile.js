export function initMenuMobile() {
  const openTheMenuMobile = document.querySelector('.openMenuMobile')
  const closeTheMenuMobile = document.querySelector('.closeMenuMobile')
  const navMenuMobile = document.querySelector('.navMenuMobile')
  const blackMenuMobile = document.querySelector('.blackMenuMobile')
  
  openTheMenuMobile.addEventListener('click', openMenuMobile)

  closeTheMenuMobile.addEventListener('click', openMenuMobile)

  navMenuMobile.addEventListener('click', closeNavMenu)
 
  function openMenuMobile() {
    openTheMenuMobile.classList.toggle('hide')
    closeTheMenuMobile.classList.toggle('hide')
    navMenuMobile.classList.toggle('hide')
    blackMenuMobile.classList.toggle('hide')
  }
  
  function closeNavMenu(event) {
    navMenuMobile.classList.add('hide')
    openTheMenuMobile.classList.toggle('hide')
    closeTheMenuMobile.classList.toggle('hide')
    blackMenuMobile.classList.toggle('hide')
    console.log(event.target)
  }
 
}