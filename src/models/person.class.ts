// export default class Persona {
//   id: number;
//   firstName: string;
//   lastName: string;

// constructor(id: number, firstName: string, lastName: string) {
//   this.id = id;
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// }

interface CreatePersonaData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

interface Curso {
  id: number;
  name: string;
}

/**
 * C - Create
 * R - Read
 * U - Update
 * D - Delete
 */
interface CRUDService<Entity, CreateData = any> {
  create(data: CreateData): Entity;
  update(id: number, data: any): Entity;
  read(): Entity[];
  delete(id: number): Entity;
}

class PersonaService implements CRUDService<Persona, CreatePersonaData> {
  create(data: CreatePersonaData): Persona {
    throw new Error("Method not implemented.");
  }
  update(id: number, data: any): Persona {
    throw new Error("Method not implemented.");
  }
  read(): Persona[] {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Persona {
    throw new Error("Method not implemented.");
  }
}

class CursoService implements CRUDService<Curso> {
  create(data: any): Curso {
    throw new Error("Method not implemented.");
  }
  update(id: number, data: any): Curso {
    throw new Error("Method not implemented.");
  }
  read(): Curso[] {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Curso {
    throw new Error("Method not implemented.");
  }
}

export interface IPersona {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  iniciarSesion(): void;
  cerrarSesion(): void;
  tomarDescanso(cantidadTiempo: number): void;
}

export default class Persona implements IPersona {
  constructor(
    public readonly id: number,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly email: string
  ) {}

  tomarDescanso(): void {
    throw new Error("Method not implemented.");
  }

  cerrarSesion(): void {
    //
  }

  iniciarSesion(): void {
    //
  }
}

class Student extends Persona {
  constructor(
    public readonly id: number,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly email: string,
    public readonly score: number
  ) {
    super(id, firstName, lastName, email);
  }

  entregarProyectoFinal(): void {}
}

class Teacher extends Persona {}

// class PersonasPageComponent {
//   formulario = {
//     nombre: "",
//     apellido: "",
//   };

//   createPersona() {
//     console.log(
//       new Persona(2, this.formulario.nombre, this.formulario.apellido)
//     );
//   }
// }
