window.onload = function () {
    const data = JSON.parse(localStorage.getItem("carbonData"));
    const container = document.getElementById("recommendations");

    if (!data) {
        container.innerHTML = "<div class='card'>Please calculate your carbon footprint first.</div>";
        return;
    }

    let tips = [];

    // Transport
    if (data.distance > 10 && data.transportFactor >= 0.12) {
        tips.push("Use metro, bus, or carpool for daily travel to reduce transport emissions in Indian cities.");
    }

    // AC Usage
    if (data.acHours > 4) {
        tips.push("Reduce AC usage and maintain temperature at 24-26°C to save electricity and lower carbon emissions.");
    }

    // Geyser
    if (data.geyserHours > 1) {
        tips.push("Limit geyser usage and switch to solar water heaters if possible.");
    }

    // Diet
    if (data.diet >= 2.5) {
        tips.push("Reduce non-vegetarian meals and include more plant-based foods to lower food-related emissions.");
    }

    // Cooking Fuel
    if (data.fuel >= 2) {
        tips.push("Switch from LPG to induction cooking for cleaner energy consumption.");
    }

    // Flights
    if (data.flights > 2) {
        tips.push("Reduce frequent flights and prefer trains for domestic travel to cut high aviation emissions.");
    }

    // Online Shopping
    if (data.shopping > 5) {
        tips.push("Reduce frequent online shopping and combine orders to minimize packaging and delivery emissions.");
    }

    if (tips.length === 0) {
        tips.push("Your carbon footprint is well managed. Continue using sustainable transport and energy-saving habits.");
    }

    container.innerHTML = tips.map(tip => `<div class="card">${tip}</div>`).join("");
};
