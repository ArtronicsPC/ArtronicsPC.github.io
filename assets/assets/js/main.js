function openPopup(src){
  document.getElementById("popup").classList.add("active");
  document.getElementById("popup-img").src = src;
}

function closePopup(){
  document.getElementById("popup").classList.remove("active");
}

/* Toggle = one button does BOTH:
   open when closed, close when open */
function toggleMenu(){
  const sidebar = document.getElementById("sidebar");
  if (!sidebar) return;

  if (sidebar.classList.contains("active")){
    closeMenu();
  } else {
    openMenu();
  }
}

function openMenu(){
  document.getElementById("sidebar")?.classList.add("active");
  document.getElementById("overlay")?.classList.add("active");
  document.getElementById("page")?.classList.add("menu-open");

  /* Animate hamburger into X */
  document.getElementById("menuBtn")?.classList.add("active");

  // Optional polish: stop scrolling behind sidebar
  document.body.style.overflow = "hidden";
}

function closeMenu(){
  document.getElementById("sidebar")?.classList.remove("active");
  document.getElementById("overlay")?.classList.remove("active");
  document.getElementById("page")?.classList.remove("menu-open");

  /* Animate hamburger back into ≡ */
  document.getElementById("menuBtn")?.classList.remove("active");

  // Restore scrolling
  document.body.style.overflow = "";
}

// Esc closes menu + popup (polish)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape"){
    closePopup();
    closeMenu();
  }
});
