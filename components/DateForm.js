
let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
let time = new Date
let day = time.getDate()
let year = time.getFullYear()
let month = months[time.getMonth()]

export default `${month} ${day}, ${year}`