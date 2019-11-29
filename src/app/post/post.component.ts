import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }
  filterPost='';
  regionPost='';
  estacion='';
   employe = [
    {
      nombre: "EFRAIN",
      apellidos: "ROBLES GONZALEZ",
      no_empleado: "465738587",
      tipo: "Interno",
      perfil: "Lider",
      estacion: "Emiliano",
      region: "Norte"

    },
    {
      nombre: "OSCAR",
      apellidos: "GONZÁLES",
      no_empleado: "465738587",
      tipo: "Interno",
      perfil: "Lider",
      estacion: "Zapata",
      region: "Norte"

    },
    {
      nombre: "MIGUEL ",
      apellidos: "JUNIOR NAVARRETE",
      no_empleado: "465738587",
      tipo: "Interno",
      perfil: "Lider",
      estacion: "Zapata",
      region: "Sur"

    },
    {
      nombre: "MARIA",
      apellidos: "DE TODOS LOS ANGELES",
      no_empleado: "465738587",
      tipo: "Interno",
      perfil: "Lider",
      estacion: "Zapata",
      region: "Bajio"

    },
    {
      nombre: "VICTOR",
      apellidos: "NAVARRO",
      no_empleado: "465738587",
      tipo: "Interno",
      perfil: "Lider",
      estacion: "Zapata",
      region: "Norte"

    },
    {
      nombre: "JUAN MANUEL",
      apellidos: "GARZA GONZÁLES",
      no_empleado: "465738587",
      tipo: "Interno",
      perfil: "Lider",
      estacion: "Zapata",
      region: "Centro"

    },
    {
      nombre: "JUAN MANUEL",
      apellidos: "GARZA GONZÁLES",
      no_empleado: "465738587",
      tipo: "Interno",
      perfil: "Lider",
      estacion: "Zapata",
      region: "Norte"

    },
    {
      nombre: "JUAN MANUEL",
      apellidos: "GARZA GONZÁLES",
      no_empleado: "465738587",
      tipo: "Interno",
      perfil: "Lider",
      estacion: "Zapata",
      region: "Norte"

    },
    {
      nombre: "JUAN MANUEL",
      apellidos: "GARZA GONZÁLES",
      no_empleado: "465738587",
      tipo: "Interno",
      perfil: "Lider",
      estacion: "Carranza",
      region: "Norte"

    },
    {
      nombre: "JUAN MANUEL",
      apellidos: "GARZA GONZÁLES",
      no_empleado: "465738587",
      tipo: "Interno",
      perfil: "Lider",
      estacion: "Zapata",
      region: "Norte"

    },
    {
      nombre: "JUAN MANUEL",
      apellidos: "GARZA GONZÁLES",
      no_empleado: "465738587",
      tipo: "Interno",
      perfil: "Lider",
      estacion: "Zapata",
      region: "Norte"

    },
  ];
  ngOnInit() {
  }

}
