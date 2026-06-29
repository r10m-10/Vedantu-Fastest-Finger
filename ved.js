function checkForQuiz() {
console.log("Mutation callback")
const selectedElement = document.querySelector(`[data-option="${selection}"]`)
if (selectedElement) {
    selectedElement.click()
    console.log("Clicking");
    observer.disconnect()
}}

const observer = new MutationObserver(checkForQuiz)

observer.observe(document.body, {
    childList: true,
    subtree: true
})
console.log(document.body)