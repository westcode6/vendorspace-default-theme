import PropTypes from "prop-types";
export default function DiscountTag({
  children,
  className,
  padding,
  bg,
  color,
  ...rest
}) {
  const DiscountClasses = `${className} bg-${bg} text-${color} font-semibold text-sm absolute top-3 -left-1 p-${padding} rounded`;
  return (
    <>
      <aside className={DiscountClasses}>{children}</aside>
    </>
  );
}
DiscountTag.PropTypes = {
  className: PropTypes.string,
  padding: PropTypes.string,
};
