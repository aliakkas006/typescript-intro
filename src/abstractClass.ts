// Cannot create an instance of an abstract class
abstract class TakePic {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getFeed(): void;

  getShorts(): Array<string> {
    return ['foods video', 'fruits video', 'skills video'];
  }
}

class Insta extends TakePic {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getFeed(): void {
    console.log('Insta feed here');
  }
}

const media = new Insta('blur', 'background', 3);
media.getFeed();
media.getShorts();
