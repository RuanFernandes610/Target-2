const dadosFaturamento = [
    {"dia": "2022-01-01", "valor": 1050},
    {"dia": "2022-01-02", "valor": 1200},
    {"dia": "2022-01-03", "valor": 860},
    {"dia": "2022-01-04", "valor": 1300},
    {"dia": "2022-01-05", "valor": 940},
    {"dia": "2022-01-06", "valor": 4100},
    {"dia": "2022-01-07", "valor": 1450},
    {"dia": "2022-01-08", "valor": 0},
    {"dia": "2022-01-09", "valor": 0},
    {"dia": "2022-01-10", "valor": 1540},
    {"dia": "2022-01-11", "valor": 1300},
    {"dia": "2022-01-12", "valor": 850},
    {"dia": "2022-01-13", "valor": 900},
    {"dia": "2022-01-14", "valor": 3040},
    {"dia": "2022-01-15", "valor": 1240},
    {"dia": "2022-01-16", "valor": 0},
    {"dia": "2022-01-17", "valor": 0},
    {"dia": "2022-01-18", "valor": 700},
    {"dia": "2022-01-19", "valor": 1300},
    {"dia": "2022-01-20", "valor": 1360},
    {"dia": "2022-01-21", "valor": 1650},
    {"dia": "2022-01-22", "valor": 2200},
    {"dia": "2022-01-23", "valor": 2300},
    {"dia": "2022-01-24", "valor": 800},
    {"dia": "2022-01-25", "valor": 1500},
    {"dia": "2022-01-26", "valor": 800},
    {"dia": "2022-01-27", "valor": 1200},
    {"dia": "2022-01-28", "valor": 1700},
    {"dia": "2022-01-29", "valor": 1340},
    {"dia": "2022-01-30", "valor": 0},
    {"dia": "2022-01-31", "valor": 0}
  ]

const valoresFaturamento = dadosFaturamento.map((dia) => dia.valor);
const menorFaturamento = valoresFaturamento.reduce(
  (menor, valor) => (valor < menor ? valor : menor),
  
)
const maiorFaturamento = valoresFaturamento.reduce(
  (maior, valor) => (valor > maior ? valor : maior),
  
)

const diasComFaturamento = dadosFaturamento.filter((dia) => dia.valor > 0);
const mediaMensal = diasComFaturamento.reduce(
  (soma, dia) => soma + dia.valor,
  0
) / diasComFaturamento.length;

let diasAcimaDaMedia = 0;
for (let i = 0; i < dadosFaturamento.length; i++) {
  if (dadosFaturamento[i].valor > mediaMensal) {
    diasAcimaDaMedia++;
  }
}
console.log('Menor valor de faturamento:', menorFaturamento);
console.log('Maior valor de faturamento:', maiorFaturamento);
console.log('Número de dias com faturamento acima da média:', diasAcimaDaMedia);