function Stopwatch() {
  let startTime, endTime, running, duration = 0;

  this.start = () => {
    if (running)
      throw new Error('You already started it.');
    
    startTime = new Date();
    running = true;
  }

  this.stop = () => {
    if(!running)
      throw new Error("You didn't started it yet.");

    running = false;
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  }

  this.reset = () => {
    startTime, endTime = null; 
    duration = 0;
    running = false;
  }

  Object.defineProperty(this, 'duration', {
    get: () => duration
  });
}