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

function add(a: Combinable, b: Combinable): number | string {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmoloyeeInfo(emp: UnknownEmployee): void {
  console.log(`Name: ` + emp.name);
  if ('privilages' in emp) {
    console.log(`Privilages: ` + emp.privilages);
  }
  if ('startDate' in emp) {
    console.log(`StartDate: ` + emp.startDate);
  }
}

printEmoloyeeInfo(el);

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a Truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ' + amount);
  }
}

type Vechile = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVechile(vechile: Vechile) {
  vechile.drive();
  if (vechile instanceof Truck) {
    vechile.loadCargo(100);
  }
}

useVechile(v1);
useVechile(v2);
