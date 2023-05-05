// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string] /* Tuple - Fixed Length Array*/;
// } = {
//   name: 'CHARAN B',
//   age: 23,
//   hobbies: ['Watching Anime', 'Playing Games'],
//   role: [2, 'author'],
// };

// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// enum - global constant identifiers

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'CHARAN B',
  age: 23,
  hobbies: ['Watching Anime', 'Playing Games'],
  role: Role.ADMIN,
};

// Any -> * A kind of value no specifictype assigned

let anyArray: any[];
anyArray = [1, 'sports'];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log('Is Admin');
}

console.log(Role.READ_ONLY);
