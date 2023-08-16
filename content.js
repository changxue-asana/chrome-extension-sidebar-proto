function injectContent() {
  console.log(">>>>>>>>> V8 main::injectContent")
  const rootElement = document.createElement("div")
  // remove potential global styles
  rootElement.style.setProperty("all", "initial")

  const id = "asana-sidebar"
  const width = 400
  rootElement.innerHTML = `
    <style>
      #${id} {
        height: 100vh;
        width: ${width}px;
        position: fixed;
        top: 0px;
        background-color: rgb(173, 216, 230);
        transition: right 0.15s ease-in;
        transition-delay: 0.3s;
        z-index: ${Number.MAX_SAFE_INTEGER}
      }
    </style>
    <div id="${id}">
      <h3>Welcome to Asana Chrome Extension</h3>
      <div>The index.tsx component should go here </div>
    </div>
  `
  const sidebar = rootElement.querySelector(`#${id}`)
  sidebar.style.setProperty("right", "0px")

  return rootElement;
}

function main() {
  const sidebarId = "asana-sidebar";

  const sidebarElemnent = document.getElementById(sidebarId);
  if (sidebarElemnent) {
    sidebarElemnent.remove();
  } else {
    const rootElement = injectContent();
    document.body.appendChild(rootElement);
  }
}

main()

