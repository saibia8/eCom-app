import { Button, Dropdown, Form, Input, Menu, Navbar } from "react-daisyui";
import "./App.css";

function App() {
  return (
    <>
      <Navbar>
        <Navbar.Start>
          <Dropdown>
            <Button
              tag="label"
              color="ghost"
              tabIndex={0}
              className="lg:hidden"
            >
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
              <Dropdown.Item>Home</Dropdown.Item>
              <Dropdown.Item>Contact</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
          <div className="flex-none gap-2">
            <Form>
              <Input
                bordered
                type="text"
                placeholder="Search"
                className="w-24 md:w-auto"
              />
            </Form>
          </div>
        </Navbar.Start>
        <Navbar.Center className="hidden lg:flex">
          <Menu horizontal className="px-1">
            <Menu.Item>
              <a>Home</a>
            </Menu.Item>
            <Menu.Item>
              <a>Contact</a>
            </Menu.Item>
          </Menu>
        </Navbar.Center>
        <Navbar.End>
          <Button tag="a">Button</Button>
        </Navbar.End>
      </Navbar>
      <div>React</div>
    </>
  );
}

export default App;
