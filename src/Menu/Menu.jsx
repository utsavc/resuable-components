import Toggle from "../Toggle/Toggle"

export default function Menu({ children }) {
  return (
    <Toggle>
      <div>{children}</div>
    </Toggle>
  );
}
