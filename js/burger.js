(() => {
  const refs = {
    openBurgerBtn: document.querySelector(".burger__open-icon"),
    closeBurgerBtn: document.querySelector(".burger__close-icon"),
    burger: document.querySelector(".burger__menu"),
  };

  refs.openBurgerBtn.addEventListener("click", toggleBurger);
  refs.closeBurgerBtn.addEventListener("click", toggleBurger);

  function toggleBurger() {
    refs.burger.classList.toggle("is-hidden");
  }
})();
