export class Staff {
  firstName: string;
  lastName: string;
  designation: string;
  gender: string;
  joinedDate: string;
  dob: string;
  contactNo: string;
  email: string;
  role: string;
  address1: string;
  address2: string;
  address3: string;
  address4: string;
  address5: string;
  staffFieldId: string;

  constructor(
    firstName: string,
    lastName: string,
    designation: string,
    gender: string,
    joinedDate: string,
    dob: string,
    contactNo: string,
    email: string,
    role: string,
    address1: string,
    address2: string,
    address3: string,
    address4: string,
    address5: string,
    staffFieldId: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.designation = designation;
    this.gender = gender;
    this.joinedDate = joinedDate;
    this.dob = dob;
    this.contactNo = contactNo;
    this.email = email;
    this.role = role;
    this.address1 = address1;
    this.address2 = address2;
    this.address3 = address3;
    this.address4 = address4;
    this.address5 = address5;
    this.staffFieldId = staffFieldId;
  }
}

