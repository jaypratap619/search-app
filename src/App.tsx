import React, { useState } from 'react';
import './App.scss';
import Homepage from './pages/Homepage';
import SearchResults from './pages/SearchResults';

const App: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');

  const onSearchSubmit = async (text: string) => {
    // Your search logic here
    setSearchText(text)
  };

  return (
    <div className="App">
      <div className="">
        {
          searchText === '' ?
            <Homepage onSearchSubmit={onSearchSubmit} />
            :
            <SearchResults searchText={searchText} />
        }
      </div>
    </div>
  );
};

export default App;
