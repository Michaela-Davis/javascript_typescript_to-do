var Task = (function () {
    function Task(descriptionParameter, priorityParameter) {
        this.descriptionParameter = descriptionParameter;
        this.priorityParameter = priorityParameter;
    }
    return Task;
}());
var tasks = [];
tasks.push(new Task('Clean the litterboxes.', 'Medium'));
tasks.push(new Task('Buy groceries.', 'Low'));
tasks.push(new Task('Do laundry', 'High'));
for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
    var task = tasks_1[_i];
    console.log(task);
}
