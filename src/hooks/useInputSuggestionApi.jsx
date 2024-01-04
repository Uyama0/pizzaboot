import { useState, useEffect } from "react";
import { fetchSuggestions } from "../api/yandexSuggestions";

const useInputSuggestionApi = (initialSearchTerm) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [suggestions, setSuggestions] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsEditing(true);
  };

  const handleSuggestionClick = (suggestionText) => {
    setSearchTerm(suggestionText);
    setIsEditing(false);
    setSuggestions([]);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
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
    isEditing,
    inputValue,
    handleInputChange,
    handleSuggestionClick,
    handleInputBlur,
    handleKeyUp,
  };
};

export default useInputSuggestionApi;
