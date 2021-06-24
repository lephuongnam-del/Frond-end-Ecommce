import { BehaviorSubject, Observable } from "rxjs";

export class Store<T>{
    private readonly _state;
    readonly state$: Observable<T>;

    constructor(initState: T) {
        this._state = new BehaviorSubject<T>(initState);
        this.state$ = this._state.asObservable();
    }

    get state(){
      return  this._state.getValue();
    }

    set setState(val:T){
        this._state.next(val);
    }
}
