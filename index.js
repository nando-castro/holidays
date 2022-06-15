import express from "express";
import cors from "cors";

const app = express();

const holidays = [
  { date: "1/1/2022", name: "Confraternização mundial" },
  { date: "1/3/2022", name: "Carnaval" },
  { date: "4/17/2022", name: "Páscoa" },
  { date: "4/21/2022", name: "Tiradentes" },
  { date: "5/1/2022", name: "Dia do trabalho" },
  { date: "6/16/2022", name: "Corpus Christi" },
  { date: "9/7/2022", name: "Independência do Brasil" },
  { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
  { date: "11/2/2022", name: "Finados" },
  { date: "11/15/2022", name: "Proclamação da República" },
  { date: "12/25/2022", name: "Natal" },
];

app.get("/holidays", (req, res) => {
  res.send(holidays);
});

app.get("/is-today-holiday", (req, res) => {
  let day = false;
  let feriado = "";
  const dataHoje = new Date();
  const data = (dataHoje.getMonth() + 1).toString() +
  "/" +
  dataHoje.getDate().toString() +
  "/" +
  dataHoje.getFullYear();

  for (let i = 0; i < holidays.length; i++) {
    if (holidays[i].date === data) {
      day = true;
      feriado = holidays[i].name;
    }
  }

  if (day) res.send(`Sim, hoje é ${feriado}`);
  if (!day) res.send("Não, hoje não é feriado");
});

app.get("/holidays/:mes", (req, res) => {
  res.send(`Mês: ${req.params.mes}`);
});

app.listen(5000);
