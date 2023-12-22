class Key {
    constructor(private readonly signature: number = Math.random()) {}
  
    getSignature(): number {
      return this.signature;
    }
  }
  
  class Person {
    constructor(private readonly key: Key) {}
    getKey(): Key {
      return this.key;
    }
  }
  
  abstract class House {
    protected tenants: Person[] = [];
    constructor(protected door: boolean, protected key: Key) {}
  
    comeIn(person: Person): void {
      if (this.door) {
        this.tenants.push(person);
      }
      return;
    }
  
    abstract openDoor(key: Key): void;
  }
  
  class MyHouse extends House {
    constructor(key: Key, door: boolean = false) {
      super(door, key);
    }
  
    openDoor(key: Key): void {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
      }
      return;
    }
  }

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
