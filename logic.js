if (user.role == "none") {
  console.log(user.role);
  setInterval(() => {
    window.location.href = "login.html";
  }, 999000);
}
///redirects
const main = document.getElementById("main");
const nav = document.getElementById("nav");
const footer = document.getElementById("footer");
const res = document.getElementById("result");

let sidebarTog = 0;
let inner = 0;
window.addEventListener("load", () => {
  setTimeout(() => {
    nav.style.top = "0px";
    footer.style.bottom = "0px";
  }, 100);
});
function applyScale() {
  if (window.innerWidth < window.innerHeight) {
    inner = window.innerWidth;
    sidebarTog = 1;
  } else {
    inner = window.innerHeight;
  }
  const scaleVal = inner / 700;
  main.style.transform = `scaleX(${scaleVal})`;
}
applyScale();
main.style.transition = "ease 200ms";
function sidebar(a, event) {
  if (event) {
    event.stopPropagation();
  }
  if (window.innerWidth / window.innerHeight >= 2) {
    return;
  }
  if (a && sidebarTog) {
    return;
  }
  if (sidebarTog) {
    main.style.left = `${(-450 * inner) / 700}px`;
    sidebarTog = 0;
  } else {
    main.style.left = "0px";
    sidebarTog = 1;
  }
  addEventListener("resize", () => {
    if (window.innerWidth / window.innerHeight >= 2) {
      if (!sidebarTog) {
        sidebarTog = 1;
        main.style.left = "0px";
        main.style.width = "75%";
      }
    } else {
      main.width = "100vw";
    }
  });
}
function resultapply() {}
