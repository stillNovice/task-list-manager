import { EventEmitter } from 'events';

class Server extends EventEmitter {
  constructor(client) {
    super();

    this.tasks = {};
    this.id = 1;

    process.nextTick(() => {
      this.emit('response', 'type a command (help to list commands)');
    });

    client.on('command', (command, args) => {
      command = command.trim();

      switch(command) {
        case 'help':
          this.help();
          break;
        case 'ls':
          this.ls();
          break;
        case 'add':
          this.add(args);
          break;
        case 'del':
          this.del(args);
          break;
        case 'flushall':
          this.flushall();
          break;
        case 'exit':
          this.exit();
          break;
        default:
          this.emit('response', 'unknown command... (type help to list commands)');
      }
    });
  }

  getTasksStr() {
    let str = ``;
    Object.keys(this.tasks).forEach(key => {
      str += `${key}. ${this.tasks[key]} \n`;
    });

    if(str == '') return 'no active tasks yet... (type help to list commands)'

    str = str.slice(0, -1);
    return str;
  }

  help() {
    this.emit('response', `available commands:
    ls -> to list all the active tasks
    del :id -> to delete a task with particular id
    add :task -> to add a task
    flushall -> to delete all the tasks
    exit -> to exit the window`);
  }

  ls() {
    this.emit('response', this.getTasksStr());
  }

  del(args) {
    if(!args.length) {
      this.emit('response', 'please add something... (type help to list commands)');
      return;
    }

    if(!this.tasks.hasOwnProperty(args[0])) {
      this.emit('response', 'no such task exists... (type help to list commands)');
      return;
    }

    delete this.tasks[args[0]];
    this.emit('response', `deleted task ${args[0]} successfully!`);
  }

  add(args) {
    if(!args.length) this.emit('response', 'please add something... (type help to list commands)');
    else {
      this.tasks[this.id] = args.join(' ');
      this.emit('response', `task no. ${this.id} is added successfully!`);
      this.id++;
    }
  }

  flushall() {
    this.tasks = new Object();
    this.id = 1;
    this.emit('response', 'all tasks are deleted successfully!');
  }

  exit() {
    process.stdout.write('\u001b[2J\u001b[0:0f');  // this line clears the terminal in Linux
    process.exit(0);  // process.exit(0) = succes exit, process.exit(1) = exit with failure code.
  }
}

export default (client) => {
  return new Server(client);
};