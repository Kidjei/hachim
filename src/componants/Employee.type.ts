export interface IEmployee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  Numéro: any;
  password: any;
}

export const dummyployeeList: IEmployee[] = [
  {
    id: new Date().toJSON().toString(),
    firstName: "Ibrahim",
    lastName: "hachim",
    email: "hachimkidjei99@gmail.com",
    Numéro: +79202309240,
    password: "ki@%$#d53#%&#*",
  },
];

export enum PageEnum {
  list,
  add,
}
