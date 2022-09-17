const switchingNavigation = () => {
  const links = document.querySelectorAll(".nav-link");
  const contents = document.querySelectorAll(".contents");
  const ACTIVE_CLASS = "active";

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", tabToggle);
  }

  function tabToggle() {
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove(ACTIVE_CLASS);
    }
    for (let i = 0; i < contents.length; i++) {
      contents[i].classList.remove(ACTIVE_CLASS);
    }
    this.classList.add(ACTIVE_CLASS);
    const arrayLinks = Array.prototype.slice.call(links);
    const index = arrayLinks.indexOf(this);
    contents[index].classList.add(ACTIVE_CLASS);
  }
};

document.addEventListener("DOMContentLoaded", switchingNavigation);
