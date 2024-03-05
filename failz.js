const modules = [
  "./script/bindData.js",
  "./script/lazy.js",
  "./script/Rendertemples.js",
  "./script/Service_workers/index.js",
];
let modulesLoaded = [];
for (let i = 0; i < modules.length; i++) {
  loadScript(modules[i], () => {
    modulesLoaded.push(modules[i]);
    if (modulesLoaded.length === modules.length) {
      loadScript("faliz.js", () => {});
    }
  });
}
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = callback;
  document.head.appendChild(script);
}
