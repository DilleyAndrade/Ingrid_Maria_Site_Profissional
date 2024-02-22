export function initAccordion() {
    const accordion1 = document.querySelector('.accordion1')
    const accordion1Text = document.querySelector('.accordion1Text')

    const accordion2 = document.querySelector('.accordion2')
    const accordion2Text = document.querySelector('.accordion2Text')

    const accordion3 = document.querySelector('.accordion3')
    const accordion3Text = document.querySelector('.accordion3Text')

    const accordion4 = document.querySelector('.accordion4')
    const accordion4Text = document.querySelector('.accordion4Text')

    accordion1.addEventListener('click', showAccordion1)
    accordion2.addEventListener('click', showAccordion2)
    accordion3.addEventListener('click', showAccordion3)
    accordion4.addEventListener('click', showAccordion4)

    function showAccordion1() {
        accordion1Text.classList.remove('hide')
        accordion2Text.classList.add('hide')
        accordion3Text.classList.add('hide')
        accordion4Text.classList.add('hide')
    }

    function showAccordion2() {
        accordion1Text.classList.add('hide')
        accordion2Text.classList.remove('hide')
        accordion3Text.classList.add('hide')
        accordion4Text.classList.add('hide')
    }

    function showAccordion3() {
        accordion1Text.classList.add('hide')
        accordion2Text.classList.add('hide')
        accordion3Text.classList.remove('hide')
        accordion4Text.classList.add('hide')
    }

    function showAccordion4() {
        accordion1Text.classList.add('hide')
        accordion2Text.classList.add('hide')
        accordion3Text.classList.add('hide')
        accordion4Text.classList.remove('hide')
    }
}