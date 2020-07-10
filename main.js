let input
function greaterThan() {
    console.log("working")
    event.preventDefault()
    input = document.getElementById("input").value
    console.log(input)
    if (input >= 18) {
        document.getElementById("output").innerHTML = "Ja. Du kannst Shisha rauchen."
    } else {
        document.getElementById("output").innerHTML = "Du darfst noch nicht Shisha rauchen."
    }
}