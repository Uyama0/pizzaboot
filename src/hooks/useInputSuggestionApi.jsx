import { useState, useEffect } from "react";
import { fetchSuggestions } from "../api/yandexSuggestions";

const useInputSuggestionApi = (initialSearchTerm) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSuggestionClick = (suggestionText) => {
    setSearchTerm(suggestionText);
    setSuggestions([]);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm.trim() !== "") {
        const suggestionsData = await fetchSuggestions(searchTerm);
        setSuggestions(suggestionsData);
      } else {
        setSuggestions([]);
      }
    };

    fetchData();
  }, [searchTerm]);

  return {
    searchTerm,
    suggestions,
    handleInputChange,
    handleSuggestionClick,
  };
};

export default useInputSuggestionApi;
