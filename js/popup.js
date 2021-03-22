let wideButton = document.getElementById("wide");

wideButton.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setWidth,
    });
});


function setWidth() {
    let container = document.getElementsByClassName('Live-primary');
    container[0].style.width = "auto"

    let videoBackGround = document.getElementsByClassName('Live VideoMaterialLayout-background')
    videoBackGround[0].style.display = "flex"
    videoBackGround[0].style.flexDirection = "column"

    let comments = document.getElementsByClassName('Live-chat-content')
    comments[0].style.margin = "0px 40px"
    comments[0].style.width = "auto"
}
