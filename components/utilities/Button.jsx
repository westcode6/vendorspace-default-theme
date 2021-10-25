import PropTypes from "prop-types";
import Link from "next/link";

export default function Button({
  children,
  className,
  hover = "hover:bg-yellow-600",
  padding,
  bg,
  go,
  href,
  ...rest
}) {
  // button classes
  const btnClasses = `${className} bg-${bg} ${hover} p-${padding} w-full flex justify-center items-center border rounded border-blue-200  font-semibold capitalize  text-xs  mb-5 text-center`;

  return (
    <>
      {go ? (
        <Link href={go}>
          <a className={btnClasses} {...rest}>
            {children}
          </a>
        </Link>
      ) : href ? (
        <a href={href} className={btnClasses} {...rest}>
          {children}
        </a>
      ) : (
        <button className={btnClasses} {...rest}>
          {children}
        </button>
      )}
    </>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  hover: PropTypes.string,
  py: PropTypes.string,
  px: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
};
