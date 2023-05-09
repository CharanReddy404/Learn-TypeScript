// interface Admin {
//   name: string;
//   privilages: string[];
// }

// interface Employee {
//   name: string;
//   startDate: Date;
// }

// interface ElevatedEmployee extends Admin, Employee {}

type Admin = {
  name: string;
  privilages: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const el: ElevatedEmployee = {
  name: 'Charan',
  privilages: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// const u: Universal = 32;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable): number | string {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add('Charan ', 'Reddy').toString();
result.split(' ');

const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  job: {
    title: 'CEO',
    description: 'My own company',
  },
};

console.log(fetchedUserData?.job?.title);

const userInput = null;

const storedData = userInput ?? 'DEFAULT';

console.log(storedData);

// type UnknownEmployee = Employee | Admin;

// function printEmoloyeeInfo(emp: UnknownEmployee): void {
//   console.log(`Name: ` + emp.name);
//   if ('privilages' in emp) {
//     console.log(`Privilages: ` + emp.privilages);
//   }
//   if ('startDate' in emp) {
//     console.log(`StartDate: ` + emp.startDate);
//   }
// }

// printEmoloyeeInfo(el);

// class Car {
//   drive() {
//     console.log('Driving...');
//   }
// }

// class Truck {
//   drive() {
//     console.log('Driving a Truck...');
//   }

//   loadCargo(amount: number) {
//     console.log('Loading cargo ' + amount);
//   }
// }

// type Vechile = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVechile(vechile: Vechile) {
//   vechile.drive();
//   if (vechile instanceof Truck) {
//     vechile.loadCargo(100);
//   }
// }

// useVechile(v1);
// useVechile(v2);

// interface Bird {
//   type: 'bird';
//   flyingSpeed: number;
// }

// interface Horse {
//   type: 'horse';
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case 'bird':
//       speed = animal.flyingSpeed;
//       break;
//     case 'horse':
//       speed = animal.runningSpeed;
//       break;
//     default:
//       break;
//   }
//   console.log('Moving with speed: ' + speed);
// }

// moveAnimal({ type: 'bird', flyingSpeed: 100 });
// moveAnimal({ type: 'horse', runningSpeed: 80 });

// // const userInputElement = <HTMLInputElement> document.querySelector('#uesr-input')!;
// const userInputElement = document.querySelector(
//   '#uesr-input'
// )! as HTMLInputElement;

// // if (userInputElement) {
// //   (userInputElement as HTMLInputElement).value = 'Hello their';
// // }

// userInputElement.value = 'Hello their';

// interface ErrorContainer {
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: 'Not a vaild email',
//   userName: 'Must start with a captial character!',
// };
