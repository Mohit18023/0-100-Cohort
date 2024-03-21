import { Link } from "react-router-dom";
import propTypes from "prop-types";
export default function Warning({ label, buttonText, to }) {
  return (
    <div className="py-2 text-sm flex justify-center">
      <div>{label}</div>
      <Link className="pointer underline pl-1 cursor-pointer" to={to}>
        {buttonText}
      </Link>
    </div>
  );
}

Warning.propTypes = {
    label: propTypes.string,
    buttonText: propTypes.string,
    to: propTypes.string,
};