const input = document.querySelector('.input')
const items = Array.from(document.querySelectorAll('.item'))

function main() {

    inputCalculator()

}

function inputCalculator() {
    let cal = []

    items.forEach((item) => {
        item.addEventListener('click', (e) => {
            if (!isNaN(e.target.innerText)) {
                if (checkbug(e, cal)) {
                } else if (e.target.innerText == 'AC') {
                    cal = []
                } else if (e.target.innerText == 'DEL') {
                    cal.pop()
                } else if (e.target.innerText == '=') {
                    cal = convert(cal)
                    return
                } else {
                    cal = checkInputAndExcute(e, cal)
                }
                input.innerText = cal.join('')
                if (cal.length == 0) {
                    input.innerText = 0
                }
            }
        })
    })
}

function convert(datas) {
    let index = datas.length - 1;
    if ((datas[index] == '.' ||
        datas[index] == '-' ||
        datas[index] == '+' ||
        datas[index] == '*' ||
        datas[index] == '/')) {
        datas.pop()
    }
    let str = datas.join('') // chuyen mang cal thanh chuoi
    let show = eval(str) // thuc hien phep tinh trong chuoi str
    input.innerText = show
    let slicestr = String(show)
    datas = slicestr.split('') // chuyen ve mang lai
    return datas
}

function checkInputAndExcute(e, datas) {
    let index = datas.length - 1;
    if ((datas[index] == '.' ||
        datas[index] == '-' ||
        datas[index] == '+' ||
        datas[index] == '*' ||
        datas[index] == '/') &&
        (e.target.innerText == '-' ||
            e.target.innerText == '+' ||
            e.target.innerText == '*' ||
            e.target.innerText == '/' ||
            e.target.innerText == '.')) {
    } else {
        datas.push(e.target.innerText)
    }
    return datas
}

function checkbug(e, datas) {
    if ((e.target.innerText == '0' ||
        e.target.innerText == '-' ||
        e.target.innerText == '+' ||
        e.target.innerText == '*' ||
        e.target.innerText == '/' ||
        e.target.innerText == '=' ||
        e.target.innerText == '00' ||
        e.target.innerText == '.') && datas.length == 0)
        return true
}

main()
