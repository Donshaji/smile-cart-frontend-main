/* eslint-disable import/extensions */
import { ProductQuantity } from "components/commons";
import { Button } from "neetoui";
import { isNil } from "ramda";
import useSelectedQuantity from "src/hooks/useSelectedQuantity.js";

// import useCartItemsStore from "stores/useCartItemsStore";
// import { shallow } from "zustand/shallow";

const AddToCart = ({ slug, availableQuantity }) => {
  const { selectedQuantity, setSelectedQuantity } = useSelectedQuantity(slug);

  const handleClick = e => {
    e.stopPropagation();
    e.preventDefault();
    setSelectedQuantity(1);
  };

  if (isNil(selectedQuantity)) {
    return <Button label="Add to cart" size="large" onClick={handleClick} />;
  }

  return <ProductQuantity {...{ slug, availableQuantity }} />;
};

export default AddToCart;
