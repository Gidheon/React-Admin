import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DeleteButton,
  EditButton,
} from 'react-admin';

const BookList = (props) => {
  return (
    <List {...props}>
      <Datagrid
        sx={{
          '.RaDatagrid-rowEven': {
            backgroundColor: '#D6EAF8',
          },
          '.RaDatagrid-headerCell': {
            backgroundColor: '#FEF9E7',
          },
        }}
      >
        <TextField source='name' />
        <TextField source='birthYear' />
        <TextField label='Nationality' source='nationality' />
        <EditButton basePath='/authors' />
        <DeleteButton basePath='/authors' />
      </Datagrid>
    </List>
  );
};

export default BookList;
