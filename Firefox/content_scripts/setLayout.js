(function setLayout() {
    let container = document.querySelector('.MaterialView');
    container.style.height = "auto"
    container.style.gridTemplateAreas = '"video" "content" "community"'
    container.style.gridTemplateColumns = '1fr'
    container.style.maxHeight = "none"
    container.style.maxWidth = "100%"

    let videoWrapper = document.querySelector('.MaterialView-video')
    videoWrapper.style.maxHeight = 'none';
    videoWrapper.style.height = 'auto';
    videoWrapper.style.overflowY = 'inherit';

    let community = document.querySelector('.MaterialView-community')
    community.style.maxHeight = 'none';
    community.style.height = 'auto';
    community.style.overflowY = 'inherit';

    let communityWrapper = document.querySelector('.MaterialView-community-wrapper');
    communityWrapper.style.maxHeight = 'none';
    communityWrapper.style.height = 'auto';
    communityWrapper.style.overflowY = 'inherit';
})();