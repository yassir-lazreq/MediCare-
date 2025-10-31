const darkModeToggle = document.getElementById("checkbox");


darkModeToggle.addEventListener("change", function () {

    if (this.checked) {
        document.documentElement.classList.add("dark");
		localStorage.setItem("theme", "dark");
		
	} else {
	
        document.documentElement.classList.remove("dark");
		localStorage.setItem("theme", "light");
	}
}); 
