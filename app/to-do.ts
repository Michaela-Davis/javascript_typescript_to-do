class Task {
  done: boolean;

  constructor(public descriptionParameter: string, public priorityParameter: string){}
}

var tasks: Task[] = [];
tasks.push(new Task ('Clean the litterboxes.', 'Medium'));
tasks.push(new Task ('Buy groceries.', 'Low'));
tasks.push(new Task ('Do laundry', 'High'));

// Looping in TypeScript is:
  // for(var individualThing of listOfMultipleThings){
  //   whateverYouWantToDoWithLoop(thing);
  // };

for(var task of tasks){
  console.log(task);
};
