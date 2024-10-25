import chalk from 'chalk';
console.log(chalk.blue("Iván Rodríguez Marchán"));
console.log(chalk.bgMagenta("Tengo sueño"));
const tareas = [
    { title: 'Tarea 1', completed: true },
    { title: 'Tarea 2', completed: false},
    { title: 'Tarea 3', completed: true},
    { title: 'Tarea 4', completed: false}
  ];
tareas.forEach(tarea=>{
    if(tarea.completed==false){
        console.log(chalk.red(tarea.title));
        return;
    }
    console.log(chalk.green(tarea.title));
});