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

  const productElements = products
    .filter((product) => {
      return product.Price > 28000;
    })
    .map((product) => {
      return (
        <div>
          <h3>{product.name}</h3>
          <p>Price: {product.Price}</p>
        </div>
      );
    });

  return (
    <div>
      <h2>Our Products</h2>
      {productElements}
    </div>
  );
};

// Modify the code of map method by adding the code of map method in seperate variable and
// also filter the list/data using filter method.
