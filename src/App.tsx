import React, { useState } from 'react';
import './App.scss';
import Homepage from './pages/Homepage';
import SearchResults from './pages/SearchResults';
import generateProduct from './components/helperFunctions/CreateRandomProduct';

const App: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');

  const onSearchSubmit = async (text: string) => {
    // Your search logic here
    setSearchText(text)
  };

  console.log(generateProduct());


  return (
    <div className="App">
      <div className="">
        {
          searchText === '' ?
            <Homepage onSearchSubmit={onSearchSubmit} />
            :
            <SearchResults searchText={searchText} onSearchSubmit={onSearchSubmit} />
        }
      </div>
    </div>
  );
};

export default App;
