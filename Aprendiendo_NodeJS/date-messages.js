const days = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo'
]

const formatDate = date => '${days[(date.getDay()+6)%7]}, ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}';

const currentDateMessage = message => '${message} ${formatDate(new Date())}';

module.exports = currentDateMessage;