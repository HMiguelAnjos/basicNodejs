const day: number = 3;
let nomeDoDia;

switch (day) {
  case 1:
    nomeDoDia = 'Domingo';
    break;
  case 2:
    nomeDoDia = 'Segunda-feira';
    break;
  case 3:
    nomeDoDia = 'Terça-feira';
    break;
  case 4:
    nomeDoDia = 'Quarta-feira';
    break;
  case 5:
    nomeDoDia = 'Quinta-feira';
    break;
  case 6:
    nomeDoDia = 'Sexta-feira';
    break;
  case 7:
    nomeDoDia = 'Sábado';
    break;
  default:
    nomeDoDia = 'Dia inválido';
}

console.log(nomeDoDia); // Terça-feira
