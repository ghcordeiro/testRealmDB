import Realm from 'realm';

import CompanySchema from '../schemas/Company';
import SallerSchema from '../schemas/Saller';
import UserSchema from '../schemas/User';

export default async function getRealm() {
  return await Realm.open({
    schema: [CompanySchema, SallerSchema, UserSchema],
  });
}
