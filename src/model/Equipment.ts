export class Equipment {
  name: string;
  type: string;
  availableCount: number;
  eqstatus: string;
  staffIdOnEquipment: string;
  fieldIdOnEquipment: string;

  constructor(name: string,type: string,availableCount: number,eqstatus: string = "Available",staffIdOnEquipment: string = "",fieldIdOnEquipment: string = "") {
    this.name = name;
    this.type = type;
    this.availableCount = availableCount;
    this.eqstatus = eqstatus;
    this.staffIdOnEquipment = staffIdOnEquipment;
    this.fieldIdOnEquipment = fieldIdOnEquipment;
  }
}
