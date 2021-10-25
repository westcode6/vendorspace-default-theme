import PropTypes from "prop-types";

export default function Container({
  children,
  className,
  padding = "4",
  ...rest
}) {
  return (
    <div
      className={`${className} max-w-6xl mx-auto p-${padding} bg-white rounded-lg`}
      {...rest}
    >
      {children}
    </div>
  );
}

Container.propTypes = {
  className: PropTypes.string,
  padding: PropTypes.string,
};
