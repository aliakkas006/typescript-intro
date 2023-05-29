class User {
  readonly phone: number = 1889555445; //This prevents assignments to the field outside of the constructor.
  protected _userId = 101;

  constructor(public name: string, public city: string, private email: string) {
    (this.name = name), (this.email = email), (this.city = city);
  }

  getInfo(): { name: string; email: string; phone: number } {
    return {
      name: this.name,
      email: this.email,
      phone: this.phone,
    };
  }

  private deleteUser(email: string): void {
    // private method can not be accessible outside of this class
    if (!email) throw Error('Provide an email');
    console.log('Deleted this user!');
  }

  get userId(): number {
    return this._userId;
  }

  set userId(id) {
    //A 'set' accessor cannot have a return type annotation
    if (!id) throw Error('Must provide user id!');
    this._userId = id;
  }
}

class SubUser extends User {
  isActive: boolean = true;

  changeUserId(id: number) {
    this._userId = id;
  }
}

const ali = new User('ali', 'dhaka', 'ali@gmail.com');
const arif = new SubUser('arif', 'Chandpur', 'arif@gmail.com');

console.log('Information of Ali is:', ali.getInfo());
console.log('Information of Arif is:', arif.isActive);
