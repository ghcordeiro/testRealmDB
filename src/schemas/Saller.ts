export default class SallerSchema {
  static schema = {
    name: 'Saller',
    primaryKey: 'id',
    properties: {
      id: {type: 'string', indexed: true},
      code: {type: 'int', indexed: true},
      company: 'Company',
      commissionPercentage: 'int',
      erpCode: {type: 'string', indexed: true},
      source: {type: 'string', indexed: true},
      createdAt: {type: 'date', default: new Date(), indexed: true},
      updatedAt: {type: 'date', default: new Date(), indexed: true},
    },
  };
}
