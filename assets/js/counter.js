  $(function() {

  function getTime(tempofinal){
  var t = Date.parse(tempofinal) - Date.parse(new Date());
  var segundos = Math.floor((t/1000)%60);
  var minutos = Math.floor((t/(1000*60))%60);
  var horas = Math.floor((t/(1000*60*60))%24);
  var dias = Math.floor(t/(1000*60*60*24));
  return{
    'dias': dias,
    'horas': horas,
    'minutos': minutos,
    'segundos': segundos,
    'total': t
  };
  }

  function initCounter(id, tempofinal){
  var counter = document.getElementById(id);
  var mostrarDias = counter.querySelector('.dias');
  var mostrarHoras = counter.querySelector('.horas');
  var mostrarMinutos = counter.querySelector('.minutos');
  var mostrarSegundos = counter.querySelector('.segundos');

  function atualizarCounter(){
    var t = getTime(tempofinal)
    mostrarDias.innerHTML = t.dias;
    mostrarHoras.innerHTML = ('0' + t.horas).slice(-2);
    mostrarMinutos.innerHTML = ('0' + t.minutos).slice(-2);
    mostrarSegundos.innerHTML = ('0' + t.segundos).slice(-2);

    if (t.total <=0){
      clearInterval(intervalo);
    }
  }

  atualizarCounter();
  var intervalo = setInterval(atualizarCounter, 1000);
  }

  var deadline = '2016-09-23';
  initCounter('tempo',deadline);
});
