// Function to suggest colors based on the skin tone selected
function getColorSuggestions() {
    const skinTone = document.getElementById("skinTone").value;
    const colorSuggestionsList = document.getElementById("colorSuggestions");

    // Clear previous suggestions
    colorSuggestionsList.innerHTML = '';

    let colors = [];

    // Determine outfit colors based on skin tone
    if (skinTone === "fair") {
        colors = ["Pastel shades", "Soft pink", "Light blue", "Emerald green", "White"];
    } else if (skinTone === "medium") {
        colors = ["Warm earth tones", "Royal blue", "Olive green", "Deep red", "Mustard yellow"];
    } else if (skinTone === "dark") {
        colors = ["Vibrant colors", "Bright yellow", "Cobalt blue", "Rich burgundy", "Bold orange"];
    }

    // Display color suggestions
    colors.forEach(color => {
        const li = document.createElement("li");
        li.textContent = color;
        colorSuggestionsList.appendChild(li);
    });
}
