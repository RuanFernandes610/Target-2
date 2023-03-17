const faturamentoMensal = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  }
  
const faturamentoTotal = Object.values(faturamentoMensal).reduce(
    (soma, valor) => soma + valor,
    0
  )
  
  const percentuais = {}
  for (const estado in faturamentoMensal) {

    const faturamentoEstado = faturamentoMensal[estado];

    const percentual = (faturamentoEstado / faturamentoTotal) * 100;

    percentuais[estado] = percentual;
  }
  

  console.log('Percentual de representação do faturamento mensal por estado:')
  for (const estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado].toFixed(2)}%`)
  }