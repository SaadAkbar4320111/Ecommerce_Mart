import products from "../data/products.js";
import ProductCard from "./ProductCard.js";

function Products({ selectedCategory, searchTerm , addToCart }) {

    const filteredProducts = products.filter((product) => {

        const categoryMatch =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        const searchMatch =
            product.name.toLowerCase().includes(searchTerm.toLowerCase());

        return categoryMatch && searchMatch;
    });

    return (
        <div className="products-container" id="products">
            {filteredProducts.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                />
            ))}
        </div>
    );
}

export default Products;