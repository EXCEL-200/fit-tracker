// Get current logged in user
const savedUser =
JSON.parse(localStorage.getItem("user"));

if(!savedUser){
    window.location.href = "login.html";
}

// User-specific storage keys
const exerciseKey =
`exercises_${savedUser.email}`;

const workoutKey =
`completedWorkouts_${savedUser.email}`;

const goalKey =
`goal_${savedUser.email}`;

// Load exercises
let exercises =
JSON.parse(localStorage.getItem(exerciseKey)) || [];

const activityList =
document.getElementById("activityList");

const workouts =
document.getElementById("workouts");

const form =
document.getElementById("exerciseForm");

// Welcome User
document.getElementById("welcome").textContent =
`Welcome Back, ${savedUser.fullname} 👋`;

// Display Exercises
displayExercises();

// Add Exercise
form.addEventListener("submit", (e) => {

    e.preventDefault();

    let exerciseName =
    document.getElementById("exerciseName").value.trim();

    let duration =
    document.getElementById("duration").value.trim();

    if(exerciseName === "" || duration === ""){
        alert("Fill all fields");
        return;
    }

    let exercise = {
        name: exerciseName,
        duration: duration
    };

    exercises.push(exercise);

    localStorage.setItem(
        exerciseKey,
        JSON.stringify(exercises)
    );

    let completedWorkouts =
    Number(localStorage.getItem(workoutKey)) || 0;

    completedWorkouts++;

    localStorage.setItem(
        workoutKey,
        completedWorkouts
    );

    form.reset();

    displayExercises();
});

// Show Exercises
function displayExercises(){

    activityList.innerHTML = "";

    exercises.forEach((exercise,index)=>{

        let li =
        document.createElement("li");

        li.innerHTML = `
        ${exercise.name} - ${exercise.duration} mins

        <button onclick="editExercise(${index})">
        Edit
        </button>

        <button onclick="deleteExercise(${index})">
        Delete
        </button>
        `;

        activityList.appendChild(li);
    });

    workouts.textContent =
    exercises.length;
}

// Edit Exercise
function editExercise(index){

    let newName =
    prompt(
        "Edit Exercise Name",
        exercises[index].name
    );

    let newDuration =
    prompt(
        "Edit Duration",
        exercises[index].duration
    );

    if(newName && newDuration){

        exercises[index].name =
        newName;

        exercises[index].duration =
        newDuration;

        localStorage.setItem(
            exerciseKey,
            JSON.stringify(exercises)
        );

        displayExercises();
    }
}

// Delete Exercise
function deleteExercise(index){

    if(confirm("Delete this exercise?")){

        exercises.splice(index,1);

        localStorage.setItem(
            exerciseKey,
            JSON.stringify(exercises)
        );

        displayExercises();
    }
}

// Load Goal
window.addEventListener("DOMContentLoaded",()=>{

    const dashboardGoal =
    document.getElementById("dashboardGoal");

    const goal =
    JSON.parse(localStorage.getItem(goalKey));

    if(goal){

        dashboardGoal.textContent =
        `${goal.name} (${goal.target} workouts)`;
    }
});

// Sidebar Navigation
function showSection(sectionId){

    const sections = [
        "dashboardSection",
        "exerciseSection",
        "goalSection",
        "progressSection",
        "profileSection"
    ];

    sections.forEach((id)=>{

        const section =
        document.getElementById(id);

        if(section){
            section.style.display = "none";
        }
    });

    const currentSection =
    document.getElementById(sectionId);

    if(currentSection){
        currentSection.style.display = "block";
    }
}

// Open dashboard by default
showSection("dashboardSection");