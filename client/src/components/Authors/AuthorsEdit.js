import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const AuthorsCreate = (props) => {
  return (
    <Edit title='Edit a Author' {...props}>
      <SimpleForm>
        <TextInput source='name' />
        <TextInput source='birthYear' />
        <TextInput label='nationality' source='nationality' />
      </SimpleForm>
    </Edit>
  );
};

export default AuthorsCreate;
