import { MenuItem } from "./MenuItem";

export const Menu = () => {
  const handleOrder = (itemName, itemPrice) => {
    alert(`You ordered: ${itemName} for ${itemPrice}`);
  };

  return (
    <div>
      <h2> Our Menu </h2>
      <MenuItem name="Pizza" price={12} onOrder={handleOrder} />
      <MenuItem name="Burger" price={8} onOrder={handleOrder} />
      <MenuItem name="Salad" price={6} onOrder={handleOrder} />
    </div>
  );
};

// First we pass name and price to Child (MenuItem). Data is visible in UI.
// Then when onClick event is called, name and Price are passed to Parent from child

// When child communicates with Parent, we pass event handler as props.
// onOrder is a prop we have passed where as it is an onClick event
