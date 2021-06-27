(function setLayout() {
  let container = document.querySelector(".MaterialView");
  container.style.display = "grid";
  container.style.height = "auto";
  container.style.gridTemplateAreas = '"video" "content" "community"';
  container.style.gridTemplateColumns = "1fr";
  container.style.maxHeight = "none";
  container.style.maxWidth = "1920px";

  let videoWrapper = document.querySelector(".MaterialView-video");
  videoWrapper.style.maxHeight = "none";
  videoWrapper.style.height = "auto";
  videoWrapper.style.overflowY = "inherit";

  let community = document.querySelector(".MaterialView-community");
  community.style.maxHeight = "none";
  community.style.height = "auto";
  community.style.overflowY = "inherit";
  community.style.width = "70%";
  community.style.margin = "0 auto";
  community.style.maxWidth = "none";

  let communityWrapper = document.querySelector(
    ".MaterialView-community-wrapper"
  );
  communityWrapper.style.maxHeight = "none";
  communityWrapper.style.height = "auto";
  communityWrapper.style.overflowY = "inherit";
})();
