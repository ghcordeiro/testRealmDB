export default class SallerSchema {
  static schema = {
    name: 'Saller',
    primaryKey: 'id',
    properties: {
      id: {type: 'string', indexed: true},
      code: {type: 'int', indexed: true},
      company: 'Company',
      commissionPercentage: 'double',
      erpCode: {type: 'string', indexed: true},
      source: {type: 'string', indexed: true},
      createdAt: {type: 'date', indexed: true},
      updatedAt: {type: 'date', indexed: true},
    },
  };
}
