var colorSelect = document.getElementById("color-select");

colorSelect.addEventListener("change", function() {
  var selectedOption = this.options[this.selectedIndex];
  if (selectedOption.value == "option1") {
    selectedOption.style.color = "red";
  } else if (selectedOption.value == "option2") {
    selectedOption.style.color = "blue";
  } 
});
