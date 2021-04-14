import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'

})

export class HeroeComponent{

    nombre: string = 'Juanito Alcachofa';
    edad: number = 15; 

    get nombreEnMayus(): string{
        return this.nombre.toUpperCase();
    }



    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`
    }

    cambiarNombre():void{
        this.nombre = 'Spiderman';
    }


    cambiarEdad(): void{
        this.edad = 50;
    }
}