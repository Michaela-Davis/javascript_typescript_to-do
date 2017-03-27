class Task {
  done: boolean;

  constructor(public descriptionParameter: string, public priorityParameter: string){}
}

var tasks: Task[] = [];
tasks.push(new Task ('Clean the litterboxes.', 'Medium'));
console.log(tasks);
