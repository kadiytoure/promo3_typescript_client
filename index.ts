import {Compteur} from './compteur';
import { TodoAjax } from './todo-ajax';
import * as $ from 'jquery';


const compteur = new Compteur();
const para = document.querySelector("#para");

document.querySelector("#increment").addEventListener('click', (event)=> {
    compteur.increment();
    para.textContent = compteur.showCount().toString();
});

const todoAjax = new TodoAjax();
todoAjax.getAllTodos().then(function(response) {
   let todo = $('#todo');
   //TODO: créer une boucle for qui ajoute un li pour chaque élément de réponse.
   for (let str of response) {
       let li = $('<li>'+str+'</li>');
       todo.append(li);
   }
}); 


