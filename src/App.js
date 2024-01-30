import Menu from "./Menu/index";
import Star from "./Star";

function App() {
  return (
    <>

    <Star/>



        <Menu>
            <Menu.Button>Menu</Menu.Button>
            <Menu.DropDown>
              <Menu.Item>Home</Menu.Item>
              <Menu.Item>About</Menu.Item>
              <Menu.Item>Contact</Menu.Item>
            </Menu.DropDown>
        </Menu>
    </>
  );
}

export default App;
