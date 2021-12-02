import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import CompanyData from './utils/Company.json';
import SallerData from './utils/Saller.json';
import UserData from './utils/User.json';

import getRealm from './services/realm';
import CompanySchema from './schemas/Company';
import {UpdateMode} from 'realm';
import {v4} from 'uuid';
import SallerSchema from './schemas/Saller';
// import { Container } from './styles';

interface ICompanyProps {
  name: string;
  code: number;
  erpCode: string;
  source: string;
}

interface ISallerProps {
  code: number;
  companyCode: number;
  commissionPercentage: number;
  erpCode: string;
  source: string;
}

interface IUserProps {
  name: string;
  login: string;
  password: string;
  sallers: Array<number>;
  source: string;
}

function App() {
  async function saveCompany(company: ICompanyProps) {
    const data = {
      id: v4(),
      name: company.name,
      code: company.code,
      erpCode: company.erpCode,
      source: company.source,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const realm = await getRealm();

    realm.write(() => {
      realm.create<CompanySchema>('Company', data, UpdateMode.Modified);
    });

    console.log(data);
  }

  async function saveSaller(saller: ISallerProps) {
    const realm = await getRealm();

    const company = realm
      .objects<CompanySchema>('Company')
      .filtered(`code = ${saller.companyCode} LIMIT(1)`);
    console.log('COMPANY => ', company);
    const data = {
      id: v4(),
      code: saller.code,
      erpCode: saller.erpCode,
      source: saller.source,
      company: company[0],
      commissionPercentage: saller.commissionPercentage,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    realm.write(() => {
      realm.create<SallerSchema>('Saller', data, UpdateMode.Modified);
    });

    console.log(data);

    // console.log('Company => ', company);
  }

  async function handleInsert() {
    CompanyData.forEach(async (c: ICompanyProps) => await saveCompany(c));
    SallerData.forEach(async (s: ISallerProps) => await saveSaller(s));
  }

  return (
    <View>
      <TouchableOpacity onPress={handleInsert}>
        <Text>Button</Text>
      </TouchableOpacity>
    </View>
  );
}

export default App;
