function CategoriesList({ onSelectCategory }) {
  const categories = ["all", "category1", "category2", "category3"];

  return (
    <section className="my-5 overflow-auto">
      <ul className="flex md:justify-center list-none px-2 md:px-0">
        {categories.map((category) => (
          <li key={category} className="border-2 border-gray rounded-lg mr-2">
            <button
              onClick={() => onSelectCategory(category)}
              className="py-3 px-6 hover:bg-gray block w-full text-left"
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CategoriesList;
