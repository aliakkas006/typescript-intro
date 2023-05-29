interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): void;
}

class Instragram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    (this.cameraMode = cameraMode),
      (this.filter = filter),
      (this.burst = burst);
  }
}

class Youtube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string
  ) {
    (this.cameraMode = cameraMode),
      (this.filter = filter),
      (this.burst = burst);
  }

  createStory(): void {
    console.log('Story created successfully!');
  }
}
