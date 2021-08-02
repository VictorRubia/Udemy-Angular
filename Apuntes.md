# Apuntes sobre el curso de Angular

## TypeScript

### Datatypes

```typescript
// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types parameters

// Primitives

let age: number;

age = 12.2; --> Si se pone algún otro tipo de dato, daría error

// Si pones el tipo en mayúscula es un objeto de una clase

let userName: string | string[]; // lowercase typename

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

let hobbies: null;

hobbies = 12; // error

// Arrays y tipos de objetos

let hobbies: string; // Un único string
let hobbies: string[]; // Un array de string

hobbies = ['Sports', 'Cooking', 12]; // el 12 da error

// Objeto
let person: any;

person = {
	name: 'Max',
	age: 32
};

// struct
let person: {
	isEmployee: boolean
};
person = {
	isEmployee: true
};

// Array de structs
let person: {
	isEmployee: boolean
}[];
person = {
	isEmployee: true
};


// Inferencia de tipos

let course = 'React - The Complete Guide'; // NO se pone : string porque es redundante

course = 12341; --> Error de inferencia de tipos // Sin haberle asignado un tipo

// Variables con múltiples tipos

let course: string | number = 'React - The Complete Guide'; // NO se pone : string porque es redundante
course = 12341; --> ID del curso


// Alias de tipos
type Person ={
	name: string,
	age: number
};

let person: Person;

person = {
	name: 'Victor',
	age: 22
};

// Funciones y tipos

function add(a: number, b: number): number | string{ // tipo de return
	return a + b;	// inferencia de tipo, return :number
}

function printOutput(value: any){	// Print ya existe como función
	console.log(value);		// No retorna nada
}

// Generics

function insertAtBeginning(array: any[], value: any){
	const newArray = [value, ...array]; // Copiar arrays en JS
	return newArray;
}

function insertAtBeginning<T>(array: T[], value: T){ // Cualquier tipo de dato
	const newArray = [value, ...array]; // Copiar arrays en JS
	return newArray;
}

// Clases

class Student{
	// firstName: string;
	// lastName: string;
	// age: number;
	// private courses: string[];	//	Accesibilidad

	//	Notación corta
	constructor(public first: string, public last: string, public age: number, private courses: string[]) {
		// this.firstName = first;
		// this.lastName = last;
		// this.age = age;
		// this.courses = courses;
	}

	enrol(courseName: string){
		this.course.push(courseName);
	}

	listCourses(){
		return this.courses.slice();	// Slice --> the original will not be altered
	}
}

const student = new Student('Victor', 'Rubia' , 22, ['Angular']);

student.enrol('React');

// Interfaces

interface Human {
	firstName: string;
	age: number;

	greet: () => void;  // Method no parameters and returns nothing
}

let max: Human;

max = {
	firstName: 'Max',
	age: 32,
	greet() {
		console.log('Hello!');
	},
}

class Instructor implements Human{
	firstName: string;
	age: number;
	greet(){
		console.log('Hello!!!!');
	}
}

```

