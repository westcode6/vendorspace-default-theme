import PropTypes from "prop-types";
import { Heading } from "../utilities/Typography";
export default function ProductContainer({
 children,
 title,
}) {
 return (
  <>
   <main className="md:mx-8 my-4 bg-white border-8 border-white md:rounded-lg">
    <h1 className="text-lg text-gray-700 font-semibold tracking-wide mb-4">
     {title}
    </h1>
    {children}
   </main>
  </>
 );
}

ProductContainer.propTypes = {
 title: PropTypes.string,
};
