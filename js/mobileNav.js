const hamburger = document.getElementById("hamburgerBtn);
const mobileMenu = document.getElementById("mobileMenu);
const hamburgericon = document.getElementById("iconHamburger");
const closeicon = document.getElementById("iconClose);

let is Open = false;

hamburgerBtn.addEventListener("Click",() {
    isOpen = !isOpen;

    if(isOpen){
        mobileMenu.classlist.remove("translate-x-full");
        mobileMenu.classlist.add("translate-x-0");

        hamburgericon.classlist.add("hidden");
        closeicon.classlist.remove("hidden");

        document.body.style.overflow = "hidden";
    }
    else {
        mobileMenu.classlist.remove("translate-x-0");
        mobileMenu.classlist.add("translate-x-full");
        hamburgericon.classlist.remove("hidden");

        document.body.style.overflow = "auto";
    }
})