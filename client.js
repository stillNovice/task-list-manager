import { EventEmitter } from 'events';
import readline from 'readline';
import serverFunc from './server';

class myEmitter extends EventEmitter {}

const client = new myEmitter();
const server = serverFunc(client);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', input => {
  let command, args;
  [command, ...args] = input.split(' ');
  client.emit('command', command, args);
});

server.on('response', resp => {
  process.stdout.write('\u001b[2J\u001b[0:0f');  // this line clears the terminal in Linux
  process.stdout.write(resp);
  process.stdout.write('\n\> ');
});

process.on('uncaughtException', err => {
  console.error(err);
  process.exit(1);
})
