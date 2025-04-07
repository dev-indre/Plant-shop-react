import "./Components-style/Button.css";

export default function Button({colorName, children="Shop Now", href="#", ...props}) {
  return (
    <a className={`button ${colorName}`} href={href}>{children}</a>
  )
}
