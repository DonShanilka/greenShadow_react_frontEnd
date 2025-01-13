export class Equipment {
  name: string;
  type: string;
  availableCount: number;
  status: string;
  staffIdOnEquipment: string;
  fieldIdOnEquipment: string;

  constructor(name: string, type: string, availableCount: number, status: string, staffIdOnEquipment: string , fieldIdOnEquipment: string) {
    this.name = name;
    this.type = type;
    this.availableCount = availableCount;
    this.status = status;
    this.staffIdOnEquipment = staffIdOnEquipment;
    this.fieldIdOnEquipment = fieldIdOnEquipment;
  }
}
