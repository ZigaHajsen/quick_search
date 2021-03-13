import { useState } from 'react';
import Search from './components/Search';
import Result from './components/Result';

import states from './state_capitals.json';

const App = () => {
  const [search, setSearch] = useState('');

  let matches = states.filter((state) => {
    const regex = new RegExp(`^${search}`, 'gi');
    return state.name.match(regex) || state.abbr.match(regex);
  });

  if (search.length === 0) {
    matches = [];
  }

  return (
    <div>
      <Search setSearch={setSearch} />
      <Result matches={matches} />
    </div>
  );
};

export default App;
