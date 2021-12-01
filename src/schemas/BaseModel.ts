import {uuid} from 'uuidv4';

class BaseModel {
  id: string;
  erpCode: string;
  source: string;
  createdAt: Date;
  updatedAt: Date;

  constructor() {
    this.createdAt = new Date();
    this.erpCode = '';
    this.id = uuid();
    this.source = '';
    this.updatedAt = new Date();
  }
}

export default BaseModel;
