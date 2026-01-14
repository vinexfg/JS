

const data = new Date()

let diaSemana = data.getDay()
let DiaSemanaTexto;


switch (diaSemana) {
    case (0):
        DiaSemanaTexto = 'Domingo'
        break;
    case (1):
        DiaSemanaTexto = 'Segunda'
        break;
    case (2):
        DiaSemanaTexto = 'teca-feira'
        break;
    default:
        DiaSemanaTexto = ''
        break;
}
