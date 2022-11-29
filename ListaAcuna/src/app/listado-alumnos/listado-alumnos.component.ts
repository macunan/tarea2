import { Component, OnInit } from '@angular/core';
import { Student } from './models/student.model';
@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent implements OnInit {


students: Student[] = [

  new Student(1,'Mauricio','Acuna',new Date('1982-11-09'),true),
  new Student(1,'Marcella','Acuna',new Date('1985-11-11'),true),
  new Student(1,'Mauricio','Acuna',new Date('1987-11-11'),false),
  new Student(1,'William','Riker',new Date('1989-11-11'),true),


]

constructor() {}
ngOnInit(): void {
  
}



}

