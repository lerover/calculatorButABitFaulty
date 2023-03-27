const numberEl = document.querySelector('.input_number')
const numberEl1 = document.querySelector('.input_number1')

const resultEl = document.querySelector('.result')
const show_operatorEl = document.querySelector('.show_operator')
function add() {
   show_operatorEl.textContent = '+'
   const result = Number(numberEl.value) + Number(numberEl1.value)
  
   resultEl.textContent = result
}

function substract() {
   show_operatorEl.textContent = '-'
   const result = Number(numberEl.value) - Number(numberEl1.value)
   resultEl.textContent = result
}

function manipulate() {
   show_operatorEl.textContent = 'x'
   const result = Number(numberEl.value) * Number(numberEl1.value)
   resultEl.textContent = result
}

function divide() {
   show_operatorEl.textContent = '÷'
   const result = Number(numberEl.value) / Number(numberEl1.value)
   resultEl.textContent = result
}

