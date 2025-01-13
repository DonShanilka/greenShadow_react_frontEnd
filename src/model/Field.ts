export class Field {
  fieldId: string;
  fieldName: string;
  location: string;
  extentSize: string;
  fieldImage1: File | null;
  fieldImage2: File | null;

  constructor(fieldId: string,fieldName: string,location: string,extentSize: string,fieldImage1: File | null = null,fieldImage2: File | null = null) {
    this.fieldId = fieldId;
    this.fieldName = fieldName;
    this.location = location;
    this.extentSize = extentSize;
    this.fieldImage1 = fieldImage1;
    this.fieldImage2 = fieldImage2;
  }
}

