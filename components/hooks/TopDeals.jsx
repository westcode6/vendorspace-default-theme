import PropTypes from "prop-types";
import { Heading } from "../utilities/Typography";
export default function TopDeals({ children, title }) {
 return (
  <>
   <main className="max-w-6xl mx-auto my-4 bg-white border-8 border-white rounded-lg">
    {children}
   </main>
  </>
 );
}

TopDeals.propTypes = {
 title: PropTypes.string,
};
