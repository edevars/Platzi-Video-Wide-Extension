let switchButton = document.getElementById("switch");
let slider = document.querySelector('.slider')

browser.storage.sync.get("state", ({ state }) => {
    if (state) {
        switchButton.classList.add('activeSwitch')
        slider.classList.add('activeSlider')
    } else {
        switchButton.classList.remove('activeSwitch')
        slider.classList.remove('activeSlider')
    }
});

switchButton.addEventListener("click", () => {

    browser.storage.sync.get("state", ({ state }) => {
        if (state) {
            switchButton.classList.remove('activeSwitch')
            slider.classList.remove('activeSlider')
            browser.tabs.executeScript({ file: "/content_scripts/removeLayout.js" })
                .then(() => {
                    console.log('Layout Changed')
                })
                .catch((error) => {
                    console.log(error)
                });
        } else {
            switchButton.classList.add('activeSwitch')
            slider.classList.add('activeSlider')
            browser.tabs.executeScript({ file: "/content_scripts/setLayout.js" })
                .then(() => {
                    console.log('Layout Changed')
                })
                .catch((error) => {
                    console.log(error)
                });
        }
        let newState = !state;

        browser.storage.sync.set({ state: newState });

    });
}
)