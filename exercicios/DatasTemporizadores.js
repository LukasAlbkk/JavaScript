function calcularTempoRestante(dataFutura) {
    const agora = new Date();  
    const diferenca = new Date(dataFutura) - agora;
  
    if (diferenca <= 0) {
      return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
    }
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24)); 
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60)); 
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000); 
 
    return {
      dias,
      horas,
      minutos,
      segundos
    };
  };

  function atualizarTemporizador() {
    const dataFutura = '2024-12-31T23:59:59'; 
    const tempoRestante = calcularTempoRestante(dataFutura);
    console.log(`Faltam ${tempoRestante.dias} dias, ${tempoRestante.horas} horas, ${tempoRestante.minutos} minutos e ${tempoRestante.segundos} segundos.`);
  };

  setInterval(atualizarTemporizador,1000);
  
  