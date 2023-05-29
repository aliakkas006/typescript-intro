// Array
const superHeros: string[] = [];
const heroPower: Array<number> = [];

type User_1 = {
  name: string;
  isActive: boolean;
};

const MLModels: number[][] = [
  [255, 255, 255],
  [10, 20, 30],
];

// Enum
enum SeatChoice {
  AISLE = 1,
  MIDDLE,
  WINDOW,
  FOURTH,
}

const aliSeat = SeatChoice.AISLE;

// Tuple
let tUser: [string, number, boolean] = ['ali', 21, false];
let rgb: [number, number, number] = [255, 123, 112];

type User_2 = [number, string];
const newUser: User_2 = [112, 'example@google.com'];

//Union
const data_1: number[] = [13, 23, 33];
const data_2: string[] = ['13', '23', '33'];
const data_3: (string | number | boolean)[] = ['1', '2', 3, true];

let seatAllotment: 'aisle' | 'middle' | 'window';
seatAllotment = 'aisle';

// Function
function add(num: number): number {
  return num + 5;
}

function getLower(str: string) {
  return str.toLowerCase();
}

function registerUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

const heros = ['thor', 'spiderman', 'ironman'];
heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}
