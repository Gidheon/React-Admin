import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  DeleteButton,
  EditButton,/* 
  ReferenceInput,
  TextInput,
  SelectInput, */
} from 'react-admin';
/* import { PostFilterSidebar } from './PostFilterSidebar'; */
/* const postFilters = [
  <TextInput source='q' label='Search' alwaysOn />,
  <ReferenceInput source='title' label='Title' reference='books' allowEmpty>
    <SelectInput optionText='title' />
  </ReferenceInput>,
]; */

const BookList = (props) => {
  return (
    <List /* filters={postFilters} */ {...props}>
      <Datagrid
      /*     sx={{
          '.RaDatagrid-rowEven': {
            backgroundColor: '#F0F3F4',
          },
          '.RaDatagrid-headerCell': {
            backgroundColor: '#F0F3F4',
          },
        }} */
      >
        <TextField source='id' />
        <TextField source='title' />
        <TextField source='authorId' />
        <DateField source='publicationYear' />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default BookList;
