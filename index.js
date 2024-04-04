#! /usr/bin/env node
import inquirer from "inquirer";
//array
const TodoList = [];
//function
async function mainMenu() {
    const { action } = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'what would you like to do?',
        choices: ['Add Task', 'View Task', 'Mark as Completed', 'Delete Task', 'Exit'],
    });
    switch (action) {
        case 'Add Task':
            await addTask();
            break;
        case 'View Task':
            viewTask();
            break;
        case 'Mark as Completed':
            await markAsCompleted();
            break;
        case 'Delete Task':
            await deleteTask();
            break;
        case 'Exit':
            console.log("Good Bye!");
            return;
    }
    mainMenu();
}
let addTask = async () => {
    let { task } = await inquirer.prompt({
        type: 'input',
        name: 'task',
        message: 'Enter the task',
    });
    TodoList.push({ task, completed: false });
    console.log("Task Added Successfully");
};
let viewTask = () => {
    console.log("**** To Do List ****");
    TodoList.forEach((item, index) => {
        console.log(`${index + 1}.[${item.completed ? 'x' : ''}] ${item.task}`);
    });
    console.log("************");
};
let markAsCompleted = async () => {
    let { index } = await inquirer.prompt({
        type: 'number',
        name: 'index',
        message: 'Which task do you want to mark as completed?',
    });
    if (index < 1 || index > TodoList.length) {
        console.log("Invalid task number. Please try again.");
        return;
    }
    TodoList[index - 1].completed = true;
    console.log("Task mark as completed");
};
let deleteTask = async () => {
    let { index } = await inquirer.prompt({
        type: 'number',
        name: 'index',
        message: 'Which task do you want to Deleted?',
    });
    if (index < 1 || index > TodoList.length) {
        console.log("Invalid task number. Please try again.");
        return;
    }
    TodoList.splice(Math.floor(deleteTask.length / index - 1));
    console.log("Task Deleted Sucessfully");
};
mainMenu();
