export default class ErrorRepository {
  constructor() {
    this.map = new Map([
      ['404', 'Not Found'],
      ['500', 'Server error'],
      ['400', 'Bad Request'],
    ]);
  }

  translate(code) {
    if (this.map.get(code)) {
      return this.map.get(code);
    }
    return 'Unknown error';
  }
}
