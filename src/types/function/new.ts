type SomeConstructor = {
    new (s: string): {};
};

let constructor: SomeConstructor;

constructor = function (name: string){
    this.name = name;
}
