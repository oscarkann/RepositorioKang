const diasSemana = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes'];

// Pedir al usuario el día y la hora
const diaUsuario = prompt('Introduce un día de la semana (lunes a viernes):');
const horaUsuario = prompt('Introduce la hora (en formato HH:MM):');

// Convertir la hora del usuario a minutos
const horaMinutos = horaUsuario.split(':');
const hora = parseInt(horaMinutos[0]);
const minutos = parseInt(horaMinutos[1]);
const minutosUsuario = hora * 60 + minutos;

// Calcular cuántos minutos faltan hasta el fin de semana
const minutosFinSemana = 45 * 60 + 0; // 45 horas después de las 15:00 del viernes
const diaFinSemana = 4; // el fin de semana comienza el viernes
const minutosDiaFinSemana = diaFinSemana * 24 * 60 + 15 * 60; // convertir a minutos

const diaUsuarioIndex = diasSemana.indexOf(diaUsuario.toLowerCase());
const minutosDiaUsuario = diaUsuarioIndex * 24 * 60 + minutosUsuario;

let minutosFaltantes;

if (diaUsuarioIndex === -1) {
  console.log('Día inválido');
} else if (diaUsuarioIndex === 4 && minutosUsuario >= 15 * 60) {
  console.log('Ya es fin de semana');
} else {
  minutosFaltantes = minutosDiaFinSemana - minutosDiaUsuario;
  console.log(`Faltan ${minutosFaltantes} minutos para el fin de semana`);
}