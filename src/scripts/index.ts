import '../styles/index.scss';

const list = ['name', 'start'];

class App {
  public run(): void {
    const version = 1;
    console.log('started', version);

    list.map(item => console.log(item));
  }
}

const app = new App();
app.run();
