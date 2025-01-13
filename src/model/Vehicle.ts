export class Vehicle {
  licensePlate: string;
  category: string;
  fuelType: string;
  status: string;
  remarks: string;
  staffIdOnVehicle: string;

  constructor(licensePlate: string,category: string,fuelType: string,status: string,remarks: string,staffIdOnVehicle: string) {
    this.licensePlate = licensePlate;
    this.category = category;
    this.fuelType = fuelType;
    this.status = status;
    this.remarks = remarks;
    this.staffIdOnVehicle = staffIdOnVehicle;
  }
}
