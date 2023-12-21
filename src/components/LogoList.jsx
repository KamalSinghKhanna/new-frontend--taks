import PropTypes from "prop-types";
const LogoList = ({ logos }) => (
  <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
    {logos?.map((logo, index) => (
      <li key={index}>
        <img src={logo.src} alt={logo.alt} />
      </li>
    ))}
  </ul>
);

export default LogoList;

LogoList.propTypes = {
  logos: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

