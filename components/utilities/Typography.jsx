import PropTypes from "prop-types";

export function Heading({ children, ...rest }) {
  return (
    <h1 className="text-2xl mb-5 mx-2" {...rest}>
      {children}
    </h1>
  );
}

Heading.propTypes = {};
