

export class Todo{

    //instacia de Todo 
    static fromJson({ id, tarea, completado, creado }) {

        const tempTodo = new Todo( tarea );

        tempTodo.id         = id;
        tempTodo.completado = completado;
        tempTodo.creado     = creado;

        return tempTodo;
    }

    //recibimos la tarea
    constructor(tarea){

        this.tarea = tarea;
        
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }

    imprimirClase(){
        console.log(`${this.id} - ${this.tarea}`);
    }
}