const actions = ['+', '-', '*', '/']
const action = prompt(`Enter action ${actions.join(', ')}`)
const operandA = getOperand('A')
const operandB = getOperand('B')

if (!isActionTrue(action)) {
    alert('Wrong action')
} else if (!isOperandTrue(operandA) || !isOperandTrue(operandB)) {
    alert('Wrong operand')
} else {
    const result = calc(action, operandA, operandB)

    showResult(action, operandA, operandB, result)
}

function getOperand (operandName) {
    const num = prompt(`Enter operand ${operandName}`)
    return num === null ? Number.NaN : Number(num)
}

function isActionTrue(action) {
    return actions.includes(action)
}

function isOperandTrue(num) {
    return !isNaN(num)
}

function calc (act, A, B) {
    let res

    if (act === '+') {
        res = A + B
    } else if (act === '-') {
        res = A - B
    } else if (act === '*') {
        res = A * B
    } else if (act === '/') {
        res = A / B
    }
    
    return res
}

function showResult (act, A, B, res) {
    alert(`${A} ${act} ${B} = ${res}`)
}
