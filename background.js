let state = false;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ state });
  console.log('Default state of the app is', `state: ${state}`);
});