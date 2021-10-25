import PropTypes from "prop-types";

export default function NewProductTag({ children, className, bg, padding }) {
  const NewProductClasses = `${className} bg-${bg} font-semibold text-sm absolute top-3 -left-1 p-${padding} rounded`;

  return (
    <>
      <aside className={NewProductClasses}>{children}</aside>
    </>
  );
}
NewProductTag.propTypes = {
  className: PropTypes.string,
  bg: PropTypes.string,
  padding: PropTypes.string,
};
