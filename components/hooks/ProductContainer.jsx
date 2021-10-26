import PropTypes from "prop-types";
import { Heading } from "../utilities/Typography";
export default function ProductContainer({
 children,
 title,
}) {
 return (
  <>
   <main className="max-w-6xl mx-auto my-4 bg-white border-8 border-white rounded-lg">
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
