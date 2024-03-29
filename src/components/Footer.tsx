import useCart from "../hooks/useCart";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Footer = ({ viewCart, setViewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart();
  const year: number = new Date().getFullYear();

  const pageContent = viewCart ? (
    <p>Shopping Cart &copy; {year}</p>
  ) : (
    <>
      <p>Total Items:{totalItems}</p>
      <p>Total Price:{totalPrice}</p>
      <p>Shopping Cart &copy;{year}</p>
    </>
  );

  const content = <footer className="footer">{pageContent}</footer>;
  return content;
};

export default Footer;
