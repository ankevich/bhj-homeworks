let checkboxes = Array.from(document.getElementsByClassName("interest__check"))

checkboxes.map(parentCheckbox => {
    parentCheckbox.onclick = () => {
        let innerCheckboxes = parentCheckbox.closest("li.interest").querySelectorAll(".interest__check")
        Array.from(innerCheckboxes).map(checkbox => {
            console.log(checkbox)
            if (parentCheckbox.checked == true) {
                checkbox.checked = true
            } else {
                checkbox.checked = false
            }
            
        })
    }
})
