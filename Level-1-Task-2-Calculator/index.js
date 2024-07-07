let resultString = ''
let result = 0

const resultRef = document.querySelector("#result")
resultRef.innerText = result

const setResult = (newResult) => {
    resultRef.innerText = newResult
}

const btns = document.querySelectorAll("#btn")

btns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        let innerText = event.target.innerText
        if (innerText == 'AC') {
            result = 0
            resultString = ''
            setResult(result)
        } else if (innerText == '=') {
            resultString = eval(resultString)
            setResult(resultString)
        } else {
            if (innerText == 'X') {
                resultString += '*'
                setResult(resultString)
            } else if (innerText == '÷') {
                resultString += '/'
                setResult(resultString)
            } else if (innerText == '⌫') {
                resultString = resultString.replace(resultString.charAt(resultString.length - 1), '')
                resultString.length == 0 ? setResult(0) : setResult(resultString)
            } else if (innerText == '.') {
            } else if (innerText == '( )') {
            } else {
                resultString += innerText
                setResult(resultString)
            }
        }
    })
})