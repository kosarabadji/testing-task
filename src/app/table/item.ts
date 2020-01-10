export class Item implements IItem {
  public firstName?: string;
  public lastName?: string;
  public email?: string;
  public isCreate?: boolean;
  constructor(data?: IItem) {
    this.firstName = data.hasOwnProperty("firstName") ? data.firstName : "";
    this.lastName = data.hasOwnProperty("lastName") ? data.lastName : "";
    this.email = data.hasOwnProperty("email") ? data.email : "";
    this.isCreate = data.hasOwnProperty("isCreate") ? data.isCreate : true;
  }
}

export interface IItem {
  firstName?: string;
  lastName?: string;
  email?: string;
  isCreate?: boolean;
}
