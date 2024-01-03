const fetchSuggestions = async (searchTerm) => {
  try {
    const response = await fetch(
      `https://suggest-maps.yandex.ru/v1/suggest?apikey=${YANDEX_API_KEY}&text=${searchTerm}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    return [];
  }
};

export { fetchSuggestions };
