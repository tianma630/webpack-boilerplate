type RefCallback = () => void;

export class Ref<T = unknown> {
  private _value: T;
  private cb: RefCallback;

  constructor(value: T, cb: RefCallback) {
    this._value = value;
    this.cb = cb;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    if (value !== this._value) {
      this._value = value;
      this.cb();
    }
  }
}
