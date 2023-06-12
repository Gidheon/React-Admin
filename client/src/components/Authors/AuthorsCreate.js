import React from 'react';
import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin';

const AuthorsCreate = (props) => {
  return (
    <Create title='Add a Author' {...props}>
      <SimpleForm>
        <TextInput source='name' required />
        <NumberInput source='birthYear' required />
        <TextInput label='nationality' source='nationality' required />
      </SimpleForm>
    </Create>
  );
};

export default AuthorsCreate;
