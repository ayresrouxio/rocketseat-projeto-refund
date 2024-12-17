const amount = document.querySelector("#amount")

amount.oninput = () => {
  let value = amount.value.replace(/\D+/g, "")

  value = Number(value) / 100 // Valor em centavos

  amount.value = formatCurrencyBRL(value)
}

function formatCurrencyBRL(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}
