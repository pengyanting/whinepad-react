import * as styles from '../public/scss/common.scss'
export const Tool = {}

let alertText = document.createElement('div')
alertText.setAttribute('style', 'width: 14.0rem;position: absolute;left: 50%;top: 9.6rem;margin-left: -7rem;padding: 1.25rem 0.25rem;line-height: 1.5rem;font-size: 0.8rem;text-align: center;background-color: #000;opacity: 0.8;color: #fff;border-radius: 0.25rem;')

let alertDom = document.createElement('div')
alertDom.setAttribute('style', 'position: fixed;top: 0;bottom: 0;left: 0;right: 0;z-index: 100000;display: none;')
alertDom.appendChild(alertText)

document.body.appendChild(alertDom)
let timer = null
Tool.alert = (msg1, msg2) => {
  clearTimeout(timer)
  if (msg2) {
    alertText.innerHTML = msg1 + '<div style="font-size: 0.65rem;line-height: 1.4rem;color: #b3b3b3;">' + msg2 + '</div>'
  } else {
    alertText.innerHTML = msg1
  }

  alertDom.style.display = 'block'
  alertDom.onclick = () => {
    clearTimeout(timer)
    alertDom.style.display = 'none'
  }

  timer = setTimeout(() => {
    alertDom.style.display = 'none'
    clearTimeout(timer)
  }, 2000)
}
