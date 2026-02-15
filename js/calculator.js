function calculateFootprint() {

    // 1. Transportation
    let transportFactor = parseFloat(document.getElementById("transport").value);
    let distance = parseFloat(document.getElementById("distance").value) || 0;
    let transportEmission = transportFactor * distance;

    // 2. Home Energy Usage
    let acHours = parseFloat(document.getElementById("ac").value) || 0;
    let fanHours = parseFloat(document.getElementById("fan").value) || 0;
    let geyserHours = parseFloat(document.getElementById("geyser").value) || 0;

    let acEmission = acHours * 1.5;
    let fanEmission = fanHours * 0.05;
    let geyserEmission = geyserHours * 1.2;

    let energyEmission = acEmission + fanEmission + geyserEmission;

    // 3. Food (Diet Type)
    let dietEmission = parseFloat(document.getElementById("diet").value);

    // 4. Cooking Fuel
    let fuelEmission = parseFloat(document.getElementById("fuel").value);

    // 5. Flight Travel (Yearly to Daily Conversion)
    let flightsPerYear = parseFloat(document.getElementById("flights").value) || 0;
    let flightEmissionYearly = flightsPerYear * 250; 
    let flightEmissionDaily = flightEmissionYearly / 365;

    // 6. Online Shopping (Monthly to Daily Conversion)
    let ordersPerMonth = parseFloat(document.getElementById("shopping").value) || 0;
    let shoppingEmissionMonthly = ordersPerMonth * 5;
    let shoppingEmissionDaily = shoppingEmissionMonthly / 30;

    // Total Carbon Footprint (Daily)
    let totalDaily = transportEmission + energyEmission + dietEmission + fuelEmission + flightEmissionDaily + shoppingEmissionDaily;

    // Monthly and Yearly Calculation
    let totalMonthly = totalDaily * 30;
    let totalYearly = totalDaily * 365;

    // Category Classification
    let category = "";
    if (totalDaily < 5) {
        category = "Low Carbon Footprint";
    } else if (totalDaily < 10) {
        category = "Moderate Carbon Footprint";
    } else {
        category = "High Carbon Footprint";
    }

    // Display Result
    document.getElementById("result").innerHTML = `
        Estimated Daily Footprint: ${totalDaily.toFixed(2)} kg CO2/day <br><br>
        Estimated Monthly Footprint: ${totalMonthly.toFixed(2)} kg CO2/month <br><br>
        Estimated Yearly Footprint: ${(totalYearly / 1000).toFixed(2)} tons CO2/year <br><br>
        Footprint Category: ${category}
    `;
}
