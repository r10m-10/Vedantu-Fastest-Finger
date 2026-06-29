async function getTabs() {
    console.log("Start");
    const tabs = await browser.tabs.query({ active: true, currentWindow: true });
    console.log("Done");
}

document.addEventListener('click', function (event) {
    const button = event.target.closest(".circle-btn")
    const selectedOption = {"option": button.dataset.option}
    console.log(selectedOption)
});