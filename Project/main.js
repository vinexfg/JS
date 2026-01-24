

const h1 = document.querySelector('#texto');

const texto_2 = document.querySelector('#texto_2')
const data = new Date()
h1.innerHTML = data.toString()

const dia = data.getDay()



switch (dia) {
    case (0):
        texto_2.innerHTML = 'Domingo'
        break
    case (1):
        texto_2.innerHTML = 'Segunda'
        break;
    default:
        texto_2.innerHTML('')
}      