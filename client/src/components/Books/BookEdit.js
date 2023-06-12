import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin';

const BookEdit = (props) => {
  return (
    <Edit title='Edit a Book' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='title' />
        <TextInput source='authorId' />
        <DateInput label='Published' source='publicationYear' />
      </SimpleForm>
    </Edit>
  );
};

export default BookEdit;
