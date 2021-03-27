let switchButton = document.getElementById("switch");
let slider = document.querySelector('.slider')

// // Init button
// browser.storage.sync.get("state", ({ state }) => {
//     if (state) {
//         switchButton.classList.add('activeSwitch')
//         slider.classList.add('activeSlider')
//     } else {
//         switchButton.classList.remove('activeSwitch')
//         slider.classList.remove('activeSlider')
//     }
// });

switchButton.addEventListener('click', (e)=> {
    console.log('Hola desde el botón')
})

// function setLayout() {
//     let container = document.querySelector('.MaterialView');
//     container.style.height = "auto"
//     container.style.gridTemplateAreas = '"video" "content" "community"'
//     container.style.gridTemplateColumns = '1fr'
//     container.style.maxHeight = "none"
//     container.style.maxWidth = "100%"

//     let videoWrapper = document.querySelector('.MaterialView-video')
//     videoWrapper.style.maxHeight = 'none';
//     videoWrapper.style.height = 'auto';
//     videoWrapper.style.overflowY = 'inherit';

//     let community = document.querySelector('.MaterialView-community')
//     community.style.maxHeight = 'none';
//     community.style.height = 'auto';
//     community.style.overflowY = 'inherit';

//     let communityWrapper = document.querySelector('.MaterialView-community-wrapper');
//     communityWrapper.style.maxHeight = 'none';
//     communityWrapper.style.height = 'auto';
//     communityWrapper.style.overflowY = 'inherit';
// }

// function removeLayout() {
//     let container = document.querySelector('.MaterialView');
//     container.style.gridTemplateAreas = '"video community" "content community"'
//     container.style.gridTemplateColumns = '65% 35%'
//     container.style.maxHeight = "calc(100vh - 52px)"
//     container.style.maxWidth = "1440px"

//     let videoWrapper = document.querySelector('.MaterialView-video')
//     videoWrapper.style.maxHeight = 'calc(100vh - 52px)';
//     videoWrapper.style.height = 'inherit';
//     videoWrapper.style.overflowY = 'scroll';

//     let community = document.querySelector('.MaterialView-community')
//     community.style.maxHeight = 'calc(100vh - 52px)';
//     community.style.height = 'inherit';
//     community.style.overflowY = 'visible';

//     let communityWrapper = document.querySelector('.MaterialView-community-wrapper');
//     communityWrapper.style.maxHeight = 'calc(100vh - 52px)';
//     communityWrapper.style.height = 'inherit';
//     communityWrapper.style.overflowY = 'scroll';
// }
