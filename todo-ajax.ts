import * as $ from 'jquery';

class TodoAjax {
   private urlApi:string = 'http://localhost:3000/todo';

   getAllTodos():Promise<string[]> {
       return $.ajax({
           url: this.urlApi
       });
   }
}