(function removeLayout() {
    let container = document.querySelector('.MaterialView');
    container.style.gridTemplateAreas = '"video community" "content community"'
    container.style.gridTemplateColumns = '65% 35%'
    container.style.maxHeight = "calc(100vh - 52px)"
    container.style.maxWidth = "1440px"

    let videoWrapper = document.querySelector('.MaterialView-video')
    videoWrapper.style.maxHeight = 'calc(100vh - 52px)';
    videoWrapper.style.height = 'inherit';
    videoWrapper.style.overflowY = 'scroll';

    let community = document.querySelector('.MaterialView-community')
    community.style.maxHeight = 'calc(100vh - 52px)';
    community.style.height = 'inherit';
    community.style.overflowY = 'visible';

    let communityWrapper = document.querySelector('.MaterialView-community-wrapper');
    communityWrapper.style.maxHeight = 'calc(100vh - 52px)';
    communityWrapper.style.height = 'inherit';
    communityWrapper.style.overflowY = 'scroll';
})();