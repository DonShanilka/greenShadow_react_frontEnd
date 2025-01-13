export class LogEntry {
  logDate: string;
  logDetails: string;
  logImage: File | null;

  constructor(logDate: string, logDetails: string, logImage: File | null = null) {
    this.logDate = logDate;
    this.logDetails = logDetails;
    this.logImage = logImage;
  }
}

