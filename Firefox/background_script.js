let state = false;

browser.runtime.onInstalled.addListener(() => {
  browser.storage.sync.set({ state });
  console.log('Default state of the app is', `state: ${state}`);
});