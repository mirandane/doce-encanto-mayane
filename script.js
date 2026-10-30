function simularCompra() {
  const precoBrownie = 8.50;
  const precoBrigadeiros = 25.00;
  const precoTorta = 12.00;

  let qtdBrownie = Number(prompt("Quantos Brownies Recheados (R$ 8,50) você quer? Digite 0 se não quiser."));
  let qtdBrigadeiros = Number(prompt("Quantas Caixinhas de Brigadeiros (R$ 25,00) você quer?"));
  let qtdTorta = Number(prompt("Quantas Tortas no Pote (R$ 12,00) você quer?"));

  if (isNaN(qtdBrownie)) qtdBrownie = 0;
  if (isNaN(qtdBrigadeiros)) qtdBrigadeiros = 0;
  if (isNaN(qtdTorta)) qtdTorta = 0;

  if (qtdBrownie === 0 && qtdBrigadeiros === 0 && qtdTorta === 0) {
    alert("Nenhum produto foi selecionado. Volte quando sentir vontade de um docinho!");
    return;
  }

  let totalBrownie = precoBrownie * qtdBrownie;
  let totalBrigadeiros = precoBrigadeiros * qtdBrigadeiros;
  let totalTorta = precoTorta * qtdTorta;
  let totalGeral = totalBrownie + totalBrigadeiros + totalTorta;

  let mensagem = "🍰 RESUMO DA SUA COMPRA - Doce Encanto da Mayane 🍰\n\n";
  mensagem += `Brownie Recheado: ${qtdBrownie} x R$ 8,50 = R$ ${totalBrownie.toFixed(2)}\n`;
  mensagem += `Caixinha de Brigadeiros: ${qtdBrigadeiros} x R$ 25,00 = R$ ${totalBrigadeiros.toFixed(2)}\n`;
  mensagem += `Torta no Pote: ${qtdTorta} x R$ 12,00 = R$ ${totalTorta.toFixed(2)}\n\n`;
  mensagem += `TOTAL: R$ ${totalGeral.toFixed(2)}\n\nObrigada pela preferência!`;

  alert(mensagem);
}
