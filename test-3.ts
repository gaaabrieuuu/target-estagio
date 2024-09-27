import data from "./src/faturamento.json";

interface Data {
  dia: number;
  valor: number;
}

const dataSan: Data[] = data.filter((data) => data.valor > 0);

const minValueIndex = dataSan.findIndex(
  (item, index, array) =>
    item.valor === Math.min(...array.map((item) => item.valor))
);

const maxValueIndex = dataSan.findIndex(
  (item, index, array) =>
    item.valor === Math.max(...array.map((item) => item.valor))
);

const minValue = dataSan[minValueIndex].valor;
const minValueDay = dataSan[minValueIndex].dia;

const maxValue = dataSan[maxValueIndex].valor;
const maxValueDay = dataSan[maxValueIndex].dia;

const avg =
  dataSan.map((item) => item.valor).reduce((prev, curr) => prev + curr, 0) /
  dataSan.length;
const aboveAverageDays: Data[] = data.filter((data) => data.valor > avg);

console.log(`Dia com menor valor: ${minValueDay}. Valor: ${minValue.toFixed(2)}`);
console.log(`Dia com maior valor: ${maxValueDay}. Valor: ${maxValue.toFixed(2)}`);
console.log(`Média mensal: ${avg.toFixed(2)}. Dias com valor acima da média: ${aboveAverageDays.length}`);