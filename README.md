# Tast List Manager
This is a command line utility, made with love using Node.js and Babel. It exploits Node's Event Loop by using instanciating EventEmitter Class and emitting / catching named events.

There are 5 unique user inputs (commands), each performing different jobs.
```c
1. help: Lists all the valid commands and there syntax.
2. add: Add a task in the task list. The syntax can be found by hitting help.
3. del: Delete a task from the list. The syntax can be found by hitting help.
4. ls: Display all the tasks in the list. The syntax can be found by hitting help.
5. flushall: Deleta the whole list. The syntax can be found by hitting help.
6. exit: exit the command line interface.

```

# Installation
### Windows
```sh
$ git clone https://github.com/stillNovice/task-list-manager.git
$ cd task-list-manager
$ npm install
$ npm start

```

### Linux
```sh
$ git clone https://github.com/stillNovice/task-list-manager.git
$ cd task-list-manager
$ npm install
$ sudo npm install -g babel-cli
$ npm start

```

# Screenshots
## CLI starts
<img src="./screenshots/initial-window.PNG" alt="start" width="100%" height="80%"/>

## help command
<img src="./screenshots/help-1.PNG" alt="help command" width="48%" height="70%"/>
<img src="./screenshots/help-2.PNG" alt="help command" width="48%" height="70%"/>

## add command
<img src="./screenshots/add-1.PNG" alt="add command" width="48%" height="70%"/>
<img src="./screenshots/add-2.PNG" alt="add command" width="48%" height="70%"/>

## ls command
<img src="./screenshots/ls-1.PNG" alt="ls command" width="48%" height="70%"/>
<img src="./screenshots/ls-2.PNG" alt="ls command" width="48%" height="70%"/>

## del command
<img src="./screenshots/del-1.PNG" alt="del command" width="48%" height="70%"/>
<img src="./screenshots/del-2.PNG" alt="del command" width="48%" height="70%"/>

## flushall command
<img src="./screenshots/flushall-1.PNG" alt="flushall command" width="48%" height="70%"/>
<img src="./screenshots/flushall-2.PNG" alt="flushall command" width="48%" height="70%"/>

## exit command
<img src="./screenshots/exit.PNG" alt="exit command" width="100%" height="80%"/>