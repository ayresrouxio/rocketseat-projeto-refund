const form = document.querySelector("form")
const amount = document.querySelector("#amount")
const expense = document.querySelector("#expense")
const category = document.querySelector("#category")

const expenseList = document.querySelector("ul")

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

form.onsubmit = (event) => {
  event.preventDefault()

  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date(),
  }

  expenseAdd(newExpense)
}

function expenseAdd(newExpense) {
  try {
    // item da lista
    const expenseItem = document.createElement("li")
    expenseItem.classList.add("expense")

    // ícone do item
    const expenseIcon = document.createElement("img")
    expenseIcon.setAttribute("src", `./img/${newExpense.category_id}.svg`)
    expenseIcon.setAttribute("alt", newExpense.category_name)

    // informações da despesa
    const expenseInfo = document.createElement("div")
    expenseInfo.classList.add("expense-info")

    const expenseName = document.createElement("strong")
    expenseName.textContent = newExpense.expense

    const expenseCategory = document.createElement("span")
    expenseCategory.textContent = newExpense.category_name

    const expenseAmount = document.createElement("span")
    expenseAmount.classList.add("expense-amount")
    expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount
      .toUpperCase()
      .replace("R$", "")}`

    // monta o html
    expenseInfo.append(expenseName, expenseCategory)

    expenseItem.append(expenseIcon, expenseInfo, expenseAmount)

    expenseList.append(expenseItem)
  } catch (error) {
    alert("Não foi possível atualizar a lista de despesas.")
    console.log(error)
  }
}
