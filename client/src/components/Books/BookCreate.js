import React from 'react';
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin';

const BookCreate = (props) => {
  return (
    <Create title='Add a Book' {...props}>
      <SimpleForm>
        <TextInput source='title' required />
        <TextInput source='authorId' required />
        <DateInput label='Published' required source='publicationYear' />
      </SimpleForm>
    </Create>
  );
};

export default BookCreate;
