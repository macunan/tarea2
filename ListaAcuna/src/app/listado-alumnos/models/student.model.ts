export class Student {
  id: number;
  firstName: string;
  lastName: string;
  createdAt: Date;
  presente: boolean;
  constructor(
    id: number,
    firstName: string,
    lastName: string,
    createdAt: Date,
    presente: boolean
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.createdAt = createdAt;
    this.presente = presente;
  }
}
