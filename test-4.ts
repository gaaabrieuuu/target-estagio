import data from "./src/distribuidora.json";

interface Data {
  estado: string;
  porcentagem: number;
}

const sum = data
  .map((item) => item.valor)
  .reduce((prev, curr) => prev + curr, 0);

const percentage: Data[] = [];

data.map((item) =>
  percentage.push({
    estado: item.estado,
    porcentagem: Number(((item.valor * 100) / sum).toFixed(2)),
  })
);


percentage.forEach(item => console.log(`${item.estado} representou ${item.porcentagem}% do valor total.`))
