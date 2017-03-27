// CLASS
var Task = (function () {
    // CONSTRUCTOR
    function Task(descriptionParameter, priorityParameter) {
        this.descriptionParameter = descriptionParameter;
        this.priorityParameter = priorityParameter;
    }
    // CLASS METHODS
    Task.prototype.markDone = function () {
        this.done = true;
    };
    return Task;
}());
var tasks = [];
tasks.push(new Task('Clean the litterboxes.', 'Medium'));
tasks.push(new Task('Buy groceries.', 'Low'));
tasks.push(new Task('Do laundry', 'High'));
tasks[0].markDone();
// Looping in TypeScript is:
// for(var individualThing of listOfMultipleThings){
//   whateverYouWantToDoWithLoop(thing);
// };
// LOOPING
for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
    var task = tasks_1[_i];
    console.log(task);
}
;
