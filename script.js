function generatePlan(){

    let name = document.getElementById("name").value;
    let screenTime = parseFloat(document.getElementById("screenTime").value);
    let sleepHours = parseFloat(document.getElementById("sleepHours").value);
    let apps = document.getElementById("apps").value;

    let result = document.getElementById("result");

    if(name == ""){
        result.innerHTML = "<h3>Please enter your name</h3>";
        return;
    }

    let analysis = "";
    let detoxPlan = "";

    if(screenTime >= 8){

        analysis = "High Screen Usage Detected";

        detoxPlan = `
            <ul>
                <li>Reduce screen time by 2 hours daily</li>
                <li>Take a 15-minute break every hour</li>
                <li>Avoid screens before sleep</li>
                <li>Spend time on outdoor activities</li>
                <li>Limit social media usage</li>
            </ul>
        `;
    }

    else if(screenTime >= 5){

        analysis = "Moderate Screen Usage";

        detoxPlan = `
            <ul>
                <li>Reduce entertainment app usage</li>
                <li>Follow a fixed sleep routine</li>
                <li>Read books or exercise daily</li>
            </ul>
        `;
    }

    else{

        analysis = "Healthy Screen Usage";

        detoxPlan = `
            <ul>
                <li>Maintain current digital habits</li>
                <li>Continue balanced screen usage</li>
            </ul>
        `;
    }

    let sleepMessage = "";

    if(sleepHours < 6){
        sleepMessage = "Poor Sleep Pattern Detected";
    }

    else{
        sleepMessage = "Good Sleep Schedule";
    }

    result.innerHTML = `

        <h2>User Analysis</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Screen Time:</b> ${screenTime} hours</p>
        <p><b>Sleep Hours:</b> ${sleepHours} hours</p>
        <p><b>Most Used Apps:</b> ${apps}</p>

        <h2>Analysis Result</h2>

        <p>${analysis}</p>
        <p>${sleepMessage}</p>

        <h2>Personalized Detox Plan</h2>

        ${detoxPlan}

        <h2>Lifestyle Recommendations</h2>

        <ul>
            <li>Practice meditation</li>
            <li>Exercise regularly</li>
            <li>Avoid screens during meals</li>
            <li>Spend time with family and friends</li>
            <li>Follow a proper sleep schedule</li>
        </ul>
    `;
}
