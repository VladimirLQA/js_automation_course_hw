import {Team, QA, Manager, Developer, Task} from "./classes.fabric";


const projectManager = new Manager('Robin Scherbatsky', 'senior', 4, 25, 'Canada', 12000, true)
const frontendDeveloper = new Developer('Ted Mosby', 'middle', 2, 27, 'USA', 7000, false)
const backendDeveloper = new Developer('Barney Stinson', 'senior', 7, 30, 'NDA', 20000, true)
const aQA = new QA('Marshall Eriksen', 'middle', 2, 27, 'USA', 6000, true)
const manualQA = new QA('Lily Aldrin', 'junior', 1, 27, 'USA', 3000, false)

const highPriorityTask = new Task('Force update functinality', 44, 8)
const mediumPriorityTask = new Task('Server errors handling', 58, 12)
const lowPriorityTask = new Task('New design for splash screen', 13, 2)

const myTeam = new Team('DreamTeam', 2)

myTeam.teammates = [projectManager, frontendDeveloper, backendDeveloper, aQA, manualQA]
myTeam.tasks = [highPriorityTask, mediumPriorityTask, lowPriorityTask]



const dataWrapper = document.getElementById("getInfo");
const div = document.createElement("div");
div.innerHTML += `
    <h1>Information about our team</h1>
        <p>${myTeam.teamName}</p>
        <p>${myTeam.sprintDuration}</p>
        <p>${myTeam.releaseDate}</p>
        <p>${myTeam.dailyStandup}</p>
        <p>${myTeam.numberOfTeammates}</p>
        <p>${myTeam.showAllTeammates()}</p>
        <p>${myTeam.showAllTasks()}</p>
        <h1>Teammates we've got:</h1>
        <h2>Manager:</h2>
        <p>${projectManager.getAllInfo()}</p>
        <h2>Developers:</h2>
        <p>${frontendDeveloper.getAllInfo()}</p>
        <p>${backendDeveloper.getAllInfo()}</p>
        <h2>QAs:</h2>
        <p>${aQA.getAllInfo()}</p>
        <p>${manualQA.getAllInfo()}</p>

`;

dataWrapper.append(div);