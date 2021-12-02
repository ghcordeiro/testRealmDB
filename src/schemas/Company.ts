export default class CompanySchema {
  static schema = {
    name: 'Company',
    primaryKey: 'id',
    properties: {
      id: {type: 'string', indexed: true},
      name: {type: 'string', indexed: true},
      code: {type: 'int', indexed: true},
      erpCode: {type: 'string', indexed: true},
      source: {type: 'string', indexed: true},
      createdAt: {type: 'date', indexed: true},
      updatedAt: {type: 'date', indexed: true},
    },
  };
}
