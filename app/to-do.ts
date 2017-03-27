// CLASS
class Task {
  done: boolean;

// CONSTRUCTOR
  constructor(public descriptionParameter: string, public priorityParameter: string){}

// CLASS METHODS
  markDone(){
    this.done = true;
  }
}

var tasks: Task[] = [];
tasks.push(new Task ('Clean the litterboxes.', 'Medium'));
tasks.push(new Task ('Buy groceries.', 'Low'));
tasks.push(new Task ('Do laundry', 'High'));

tasks[0].markDone();

// Looping in TypeScript is:
  // for(var individualThing of listOfMultipleThings){
  //   whateverYouWantToDoWithLoop(thing);
  // };

// LOOPING
for(var task of tasks){
  console.log(task);
};
