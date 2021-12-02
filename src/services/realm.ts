import Realm from 'realm';

import CompanySchema from '../schemas/Company';
import SallerSchema from '../schemas/Saller';
import UserSchema from '../schemas/User';

export default function getRealm() {
  console.log(Realm.defaultPath);
  return Realm.open({
    schema: [CompanySchema, SallerSchema, UserSchema],
  });
}
