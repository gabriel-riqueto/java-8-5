/*
//retorna a data
let data = new Date()
document.write(data)
document.write('<br><br>');

//Data padrão americano
let data1 = new Date()
document.write(data1.toDateString());
document.write('<br><br>');

//Data padrão navegador
let data2 = new Date()
document.write(data2.toDateString());
document.write('<br><br>');

//Retorna a data com array
let data3 = new Date()
let diaSemana=['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta']
document.write(diaSemana[data3.getDay()]);
document.write('<br><br>');

//Horas
let hour = new Date()
document.write(hour.getHours());
document.write('<br><br>');
hour.setHours(hour.getHours()+2);
document.write(hour.getHours());
document.write('<br><br>');

//Minutos
let minutes = new Date()
document.write(minutes.getMinutes());
document.write('<br><br>');

//Segundos
let segundos = new Date()
document.write(segundos.getSeconds());
document.write('<br><br>');
*/

//Data padrão americano
msg = document.getElementById('msgData')
let data1 = new Date()
//document.write(data1.toDateString());
//document.write('<br><br>');

msg.innerHTML +=`<p> ${data1}</p>`

//Tempo
function BemVindo(){
    alert('Olá,Pessoal')
}
setTimeout(BemVindo,1000)