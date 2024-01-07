import { Dropdown, Input } from "react-daisyui";
import { url } from "../../../constants/api";
import useApi from "../../../hooks/useApi";
import { useState } from "react";
import { Link } from "react-router-dom";

function ProductFilter() {
  const { data: products, isLoading, isError } = useApi(url);
  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading || !products) {
    return <div>Loading products...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  function searchHandler(event) {
    setSearchTerm(event.target.value.trim());
  }

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="my-4">
      <Dropdown>
        <Input
          onChange={searchHandler}
          value={searchTerm}
          bordered
          type="text"
          placeholder="Search"
          className="w-24 md:w-auto"
        />
        {filteredProducts.length > 0 && searchTerm.length > 0 && (
          <Dropdown.Menu className="w-52 absolute z-30">
            {filteredProducts.map((product) => (
              <div className="my-1" key={product.id}>
                <Link
                  className="block p-4 hoover:bg-gray-300"
                  to={`product/${product.id}`}
                >
                  {product.title}
                </Link>
              </div>
            ))}
          </Dropdown.Menu>
        )}
      </Dropdown>
    </div>
  );
}

export default ProductFilter;
