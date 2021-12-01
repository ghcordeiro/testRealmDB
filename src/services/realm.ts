import Realm from 'realm';

import CompanySchema from '../schemas/Company';
import SallerSchema from '../schemas/Saller';
import UserSchema from '../schemas/User';

export default function getRealm() {
  return Realm.open({
    schema: [CompanySchema, SallerSchema, UserSchema],
  });
}
