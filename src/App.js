import Toggle from "./Toggle/index";
import { FaRegStar } from "react-icons/fa6";
import Menu from "./Menu/index";

function App() {
  return (
    <>
      <div className="toggle">
        <Toggle>
          <Toggle.Button>
            <Toggle.On>
              <FaRegStar className="icon" />
            </Toggle.On>
            <Toggle.Off>
              <FaRegStar className="filled icon" />
            </Toggle.Off>
          </Toggle.Button>
        </Toggle>
      </div>



      <Toggle>
        <Menu>
          <Toggle.Button>
            <Menu.Button>Menu</Menu.Button>
          </Toggle.Button>
          <Toggle.On>
            <Menu.DropDown>
              <Menu.Item>Home</Menu.Item>
              <Menu.Item>About</Menu.Item>
              <Menu.Item>Contact</Menu.Item>
            </Menu.DropDown>
          </Toggle.On>
        </Menu>
      </Toggle>
    </>
  );
}

export default App;
