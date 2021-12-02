export default class UserSchema {
  static schema = {
    name: 'User',
    primaryKey: 'id',
    properties: {
      id: {type: 'string', indexed: true},
      name: {type: 'string', indexed: true},
      login: {type: 'string', indexed: true},
      password: 'string',
      saller: 'Saller',
      erpCode: {type: 'string', indexed: true},
      source: {type: 'string', indexed: true},
      createdAt: {type: 'date', indexed: true},
      updatedAt: {type: 'date', indexed: true},
    },
  };
}
