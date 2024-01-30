import Toggle from "./Toggle/index";
import { FaRegStar } from "react-icons/fa6";

export default function Star() {
  return (
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
  );
}
