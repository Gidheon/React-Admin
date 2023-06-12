import { Filter, SearchInput } from 'react-admin';

const CustomerFilter = (props) => (
  <Filter {...props}>
    <SearchInput source='q' alwaysOn />
  </Filter>
);

export default CustomerFilter;
