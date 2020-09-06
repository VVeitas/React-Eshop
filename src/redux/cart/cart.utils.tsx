// interface AddItemToCartProps {
//   cartItems: any;
//   cartItemToAdd: any;
//   find: any;
//   map: any;
// }

export const addItemToCart/* : React.FC<AddItemToCartProps> */ = (
  cartItems: {id: number, name:string, imageUrl: string, price: number}[],
  cartItemToAdd: any
) => {
  const existingCartItem = cartItems.find(
    (cartItem: any) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem: any) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
