const numA = document.getElementsByTagName('input')[0]
const numB = document.getElementsByTagName('input')[1]
const btn = document.querySelector('.btn')
const resultado = document.getElementsByClassName('resultado')[0]

btn.addEventListener('click', comparar)

function comparar() {
    let numero1 = Number(numA.value)
    let numero2 = Number(numB.value)
    if (numero2 > numero1) {
        resultado.innerHTML = `O número ${numero1} é menor que o número ${numero2} \u{1F604}. Parabéns! `
        resultado.style.background = 'green'
        resultado.classList.add('back')
    } else if (numero2 < numero1){
        resultado.innerHTML = `O número ${numero1} é maior que o número ${numero2} \u{1F612}. Tente novamente `
        resultado.style.background = 'red'
        resultado.classList.add('back')
    } else {
        resultado.innerHTML = `O número ${numero1} é igual ao número ${numero2} \u{1F612}. Tente novamente `
        resultado.style.background = 'red'
        resultado.classList.add('back')
    }
}
