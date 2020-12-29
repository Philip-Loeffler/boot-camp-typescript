class Customer {
  id: number;
  name: string;

  print(): void {
    console.log(this);
  }

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
