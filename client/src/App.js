import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import BookList from './components/Books/BookList';
import BookCreate from './components/Books/BookCreate';
import BookEdit from './components/Books/BookEdit';
import AuthorsList from './components/Authors/AuthorsList';
import AuthorsCreate from './components/Authors/AuthorsCreate';
import AuthorsEdit from './components/Authors/AuthorsEdit';
import { authProvider } from './components/authProvider';
import { AppLayout } from './layouts/AppLayout';

const dataProvider = restProvider('http://localhost:3000');

function App() {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      layout={AppLayout}
    >
      <Resource
        name='books'
        list={BookList}
        create={BookCreate}
        edit={BookEdit}
      />
      <Resource
        name='authors'
        list={AuthorsList}
        create={AuthorsCreate}
        edit={AuthorsEdit}
      />
    </Admin>
  );
}

export default App;
