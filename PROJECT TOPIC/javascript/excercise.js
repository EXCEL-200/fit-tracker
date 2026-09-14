const savedUser =
JSON.parse(localStorage.getItem("user"));

if(!savedUser){
    window.location.href = "login.html";
}

function addExercise(exerciseName){

    const exerciseKey =
    `exercises_${savedUser.email}`;

    const workoutKey =
    `completedWorkouts_${savedUser.email}`;

    let exercises =
    JSON.parse(
        localStorage.getItem(exerciseKey)
    ) || [];

    let exercise = {
        name: exerciseName,
        duration: 30
    };

    exercises.push(exercise);

    localStorage.setItem(
        exerciseKey,
        JSON.stringify(exercises)
    );

    let completedWorkouts =
    Number(
        localStorage.getItem(workoutKey)
    ) || 0;

    completedWorkouts++;

    localStorage.setItem(
        workoutKey,
        completedWorkouts
    );

    alert(exerciseName + " added successfully!");
}