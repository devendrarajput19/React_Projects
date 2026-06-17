export const MenuItem = ({ name, price, onOrder }) => {
  return (
    <div>
      <span>
        {name} - ${price}
      </span>
      <button onClick={() => onOrder(name, price)}>Order</button>
    </div>
  );
};

//<button onClick={onOrder(name, price)}>Order</button>    - Then function gets called/invoked directly
//<button onClick={() => onOrder(name, price)}>Order</button>  - This we are returning the function.

// We are able to pass the data from Child (MenuItem) to Parent (Menu) component through Event Handler
