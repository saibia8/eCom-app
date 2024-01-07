import { Button, Dropdown, Menu, Navbar } from "react-daisyui";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import ProductFilter from "../Posts/ProductFilter";

function Nav() {
  const { totalItems } = useCart();
  return (
    <Navbar>
      <Navbar.Start>
        <Dropdown>
          <Button tag="label" color="ghost" tabIndex={0} className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </Button>
          <Dropdown.Menu tabIndex={0} className="w-52 menu-sm mt-3 z-[1]">
            <div className="my-1">
              <Link
                to="/"
                className="block px-4 py-2 text-white hover:bg-gray-600"
              >
                Home
              </Link>
            </div>
            <div>
              <Link
                to="contact"
                className="block px-4 py-2 text-white hover:bg-gray-600"
              >
                Contact
              </Link>
            </div>
          </Dropdown.Menu>
        </Dropdown>
        <div className="flex gap-4 items-center">
          <Link className="normal-case text-xl" to="/">
            eCom
          </Link>
          <div className="flex-none gap-2">
            <ProductFilter />
          </div>
        </div>
      </Navbar.Start>
      <Navbar.Center className="hidden lg:flex">
        <Menu horizontal className="px-1">
          <Menu.Item>
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="contact">Contact</NavLink>
          </Menu.Item>
        </Menu>
      </Navbar.Center>
      <Navbar.End>
        <div>
          <NavLink to="cart">
            {totalItems}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </NavLink>
        </div>
      </Navbar.End>
    </Navbar>
  );
}

export default Nav;
