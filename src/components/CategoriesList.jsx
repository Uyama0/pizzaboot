function CategoriesList({ onSelectCategory }) {
  const categories = ["all", "pizza1", "pizza2", "pizza3"]; // и другие категории
  return (
    <div className="my-5">
      <ul className="flex group gap-5 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className="p-2 rounded-lg border-2 border-red-500"
          >
            {category}
          </button>
        ))}
      </ul>
    </div>
  );
}

export default CategoriesList;
