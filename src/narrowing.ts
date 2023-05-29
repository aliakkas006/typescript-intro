function checkType(val: number | string) {
  if (typeof val === 'string') return val.length;
  return val + 5;
}

console.log('length of this string = ', checkType('akkas'));
console.log('sum = ', checkType(5));

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === 'object') {
      for (const s of strs) {
        console.log('strs inside string[]: ', s);
      }
    } else if (typeof strs === 'string') {
      console.log('strs inside string: ', strs);
    }
  }

  console.log('strs inside null condition');
}

printAll('akkas');
printAll(['akkas', 'arif', 'anis']);
printAll('');

interface User {
  uid: number;
  name: string;
  gmail: string;
}

interface Admin {
  uid: number;
  name: string;
  gmail: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
  if ('isAdmin' in account) return account.isAdmin;
  return false;
}

console.log(
  'is admin account: ',
  isAdminAccount({
    uid: 23,
    name: 'akkas',
    gmail: 'akkas@gmail.com',
    isAdmin: true,
  })
);

// console.log(
//   'is admin account: ',
//   isAdminAccount({
//     uid: 23,
//     name: 'akkas',
//     gmail: 'akkas@gmail.com',
//   })
// );

function logValue(x: Date | string) {
  if (x instanceof Date) console.log(x.toUTCString());
  else console.log(x.toLowerCase());
}

logValue(new Date());
logValue('only date string');

type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };

function isFish(animal: Fish | Bird | Human): animal is Fish {
  return (animal as Fish).swim() !== undefined;
}

function isBird(animal: Fish | Bird | Human): animal is Bird {
  return (animal as Bird).fly() !== undefined;
}

function getFood(animal: Fish | Bird | Human) {
  if (isFish(animal)) {
    animal;
    return "fish's food";
  } else if (isBird(animal)) {
    animal;
    return "bird's food";
  } else {
    animal;
    return "human's food";
  }
}

interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  side: number;
}

interface Rectangle {
  kind: 'rectangle';
  length: number;
  width: number;
}

type Shape = Circle | Square | Rectangle;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;

    case 'square':
      return shape.side ** 2;

    case 'rectangle':
      return shape.length * shape.width;

    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
