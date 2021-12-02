import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import CompanyData from './utils/Company.json';
import SallerData from './utils/Saller.json';
import UserData from './utils/User.json';

import getRealm from './services/realm';
import CompanySchema from './schemas/Company';
import { UpdateMode } from 'realm';
import { v4 } from 'uuid';
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
    };

    const realm = await getRealm();

    realm.write(() => {
      const retorno = realm.create<CompanySchema>(
        'Company',
        data,
        UpdateMode.Modified,
      );
      console.log('Save company => ', retorno);
    });

    //console.log(data);
  }

  async function saveSaller(saller: ISallerProps) {
    const realm = await getRealm();

    const company = realm.objects<CompanySchema>('Company');
    console.log('Company => ', company);

    const data = {
      id: v4(),
      code: saller.code,
      erpCode: saller.erpCode,
      source: saller.source,
      company: company[0],
      commissionPercentage: saller.commissionPercentage,
    };

    realm.write(() => {
      const retorno = realm.create<SallerSchema>(
        'Saller',
        data,
        UpdateMode.Modified,
      );
      console.log('Save saller => ', retorno);
    });

    // console.log(data);
  }

  async function handleInsert() {
    CompanyData.forEach((c: ICompanyProps) => saveCompany(c));
    SallerData.forEach((s: ISallerProps) => saveSaller(s));
  }

  return (
    <>
      <SafeAreaView />
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <TouchableOpacity onPress={handleInsert}>
          <Text>Button</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default App;
