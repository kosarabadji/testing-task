import { Component, OnInit } from "@angular/core";
import { Item } from "./item";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnInit {
  public enableEdit = false;
  public enableEditIndex = null;
  public itemChange: Item;
  public items: Item[] = [
    {
      firstName: "asd",
      lastName: "asdasd",
      email: "asdasd",
      isCreate: false
    }
  ];

  constructor() {}

  ngOnInit() {}

  public createItem(): void {
    const checkNewItem = this.items.findIndex(item => item.isCreate);
    if (checkNewItem === -1) {
      const newItem = new Item({});
      const index = this.items.push(newItem);
      this.editItem(index - 1, newItem);
    }
  }

  public editItem(i: number, item: Item): void {
    this.enableEdit = true;
    this.enableEditIndex = i;
    this.itemChange = Object.assign({}, item);
  }

  public saveItem(i: number, item: Item): void {
    this.itemChange.isCreate = false;
    this.items.splice(i, 1, this.itemChange);
    this.enableEditIndex = null;
  }

  public deleteItem(i: number): void {
    this.items.splice(i, 1);
  }

  public cancel(i: number): void {
    this.itemChange.isCreate
      ? this.items.splice(i, 1)
      : (this.enableEditIndex = null);
  }
}
