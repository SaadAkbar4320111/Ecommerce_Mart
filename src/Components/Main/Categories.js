import categories from "../data/categories.js";

function Categories({setSearchTerm, selectedCategory, setSelectedCategory }) {

     const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setSearchTerm("");
    };

    return (
        <div className="categories">
            <h2>Choose Your Category</h2>
            {categories.map((category) => (
                <button
    key={category}
    className={selectedCategory === category ? "active" : ""}
    onClick={() => handleCategoryClick(category)}
>
    {category}
</button>
            ))}
        </div>
    );
}

export default Categories;