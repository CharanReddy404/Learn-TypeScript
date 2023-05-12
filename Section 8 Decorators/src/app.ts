function Logger(logString: string) {
  console.log('Logger Factory');
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    console.log('Template Factory');
    const hookEl = document.querySelector(`#${hookId}`);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  };
}

@Logger('LOGGING - PERSON')
@WithTemplate('<h1>Hello World!</h1>', 'app')
class Person {
  name = 'Charan';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();

console.log(pers);
