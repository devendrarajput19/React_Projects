export const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      Price: 49000,
    },
    {
      id: 1,
      name: "Phone",
      Price: 25000,
    },
    {
      id: 1,
      name: "Tablet",
      Price: 38000,
    },
  ];

  return (
    <div>
      <h2>Our Products</h2>
      {products.map((product) => {
        return (
          <div>
            <h3>{product.name}</h3>
            <p>Price: {product.Price}</p>
          </div>
        );
      })}
    </div>
  );
};
