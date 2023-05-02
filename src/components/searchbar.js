import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const SearchBar = () => {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://api.example.com/search?term=${searchTerm}`);
      const results = response.data;
      history.push({
        pathname: '/search-results',
        state: { results },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchTerm"
        placeholder="Search for job or company"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
