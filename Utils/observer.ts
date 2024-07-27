class Observable {
  static instance: {};
  handlers: { [key: string]: Function } = {};
  constructor() {
    if (Observable.instance instanceof Observable) {
      return Observable.instance;
    }
    Observable.instance = Object.freeze(this);
  }
  subscribe<T extends string>(fnName: T, callback: Function) {
    this.handlers[fnName] = callback;
  }
  unsubscribe(fnName: string) {
    delete this.handlers[fnName];
  }
  fire<T extends string, K>(fnName: T, data?: K) {
    if (this.handlers[fnName]) {
      return this.handlers[fnName](data);
    }
  }
  isExit(handlerKey: string) {
    if (this.handlers[handlerKey]) {
      return true;
    }
  }
}

export const observer = new Observable();
