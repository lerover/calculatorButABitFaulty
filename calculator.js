const numberEl = document.querySelector('.input_number')
const numberEl1 = document.querySelector('.input_number1')

const resultEl = document.querySelector('.result')
const show_operatorEl = document.querySelector('.show_operator')

const no1El = document.querySelector('.no1')
const no2El = document.querySelector('.no2')
const no3El = document.querySelector('.no3')
const no4El = document.querySelector('.no4')

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

function number() {
   numberEl.value = no1El.textContent

}

function number1() {
   numberEl.value = no2El.textContent
}

function number2() {
   numberEl.value = no3El.textContent
}

function number3() {
   numberEl.value = no4El.textContent
}
