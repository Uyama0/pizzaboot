import React from "react";
import { useDispatch } from "react-redux";
import { setChoosenLocation } from "../../redux/reducers/locationSlice";

import useInputSuggestionApi from "../../hooks/useInputSuggestionApi";

const SuggestionWindow = ({ setModalOpen }) => {
  const { searchTerm, suggestions, handleInputChange, handleSuggestionClick } =
    useInputSuggestionApi("");
  const dispatch = useDispatch();

  const isSearchTermValid = searchTerm.match(/\d+$/);

  const handleChooseClick = () => {
    setModalOpen(false);
    dispatch(setChoosenLocation(searchTerm));
  };

  return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-black bg-opacity-80 z-10 flex justify-center items-center">
      <section className="flex h-1/2 justify-center">
        <div className="bg-black border-2 rounded-lg border-gray p-3 flex flex-col">
          <div className="flex items-center gap-2">
            <label htmlFor="">Location</label>
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Type to search..."
                className="outline-none h-10 p-2 bg-black border-2 rounded-md border-gray focus:border-white"
              />
              {suggestions && suggestions.length > 0 && (
                <ul className="absolute left-0 mt-2 max-h-40 overflow-y-auto space-y-1 w-full">
                  {suggestions.map((suggestion) => (
                    <li
                      key={suggestion.distance.value}
                      className="hover:bg-gray "
                      onClick={() =>
                        handleSuggestionClick(suggestion.title.text)
                      }
                    >
                      <button className="w-full text-start leading-5">
                        {suggestion.title.text}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="flex-1"></div>
          <button
            onClick={handleChooseClick}
            disabled={!isSearchTermValid}
            className={`p-2 font-bold rounded-lg ${
              isSearchTermValid
                ? "bg-white text-black"
                : "border-2 border-gray cursor-not-allowed"
            }`}
          >
            Choose
          </button>
        </div>
      </section>
    </div>
  );
};

export default SuggestionWindow;
