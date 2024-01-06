function CategoriesList({ onSelectCategory }) {
  const categories = ["all", "category1", "category2", "category3"];
  return (
    <div id="productList" className="my-5">
      <ul className="flex justify-center">
        <div className="border-2 border-gray rounded-lg ">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className="py-3 px-6 hover:bg-gray"
            >
              {category}
            </button>
          ))}
        </div>
      </ul>
    </div>
  );
}

export default CategoriesList;
