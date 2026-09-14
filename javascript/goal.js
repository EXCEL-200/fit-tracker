const goalForm =
document.getElementById("goalForm");

const goalDisplay =
document.getElementById("goalDisplay");

displayGoal();

goalForm.addEventListener("submit",function(e){

    e.preventDefault();

    const goalName =
    document.getElementById("goalName").value;

    const goalTarget =
    document.getElementById("goalTarget").value;

    const goal = {
        name: goalName,
        target: goalTarget
    };

    localStorage.setItem(
        "goal",
        JSON.stringify(goal)
    );

    displayGoal();

    goalForm.reset();

});

function displayGoal(){

    const goal =
    JSON.parse(localStorage.getItem("goal"));

    if(goal){

        goalDisplay.textContent =
        `${goal.name} (${goal.target} workouts)`;

    }

}



