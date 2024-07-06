let resultString = ''
let result = 0

const resultRef = document.querySelector("#result")
resultRef.innerHTML = result

const setResult = (newResult) => {
    resultRef.innerHTML = newResult
}

const btns = document.querySelectorAll("#btn")

btns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        let innerHTML = event.target.innerHTML
        if (innerHTML == 'AC') {
            result = 0
            resultString = ''
            setResult(result)
        } else if (innerHTML == '=') {
            resultString = eval(resultString)
            setResult(resultString)
        } else {
            if (innerHTML == 'X') {
                resultString += '*'
                setResult(resultString)
            } else if (innerHTML == '÷') {
                resultString += '/'
                setResult(resultString)
            } else if (innerHTML == '⌫') {
                resultString = resultString.replace(resultString.charAt(resultString.length - 1), '')
                resultString.length == 0 ? setResult(0) : setResult(resultString)
            } else if (innerHTML == '.') {
            } else if (innerHTML == '( )') {
            } else {
                resultString += innerHTML
                setResult(resultString)
            }
        }
    })
})