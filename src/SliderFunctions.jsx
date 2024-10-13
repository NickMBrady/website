import PropTypes from 'prop-types';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, opacity: "0.5", paddingLeft: "50px" }}
      onClick={onClick}
    />
  );
}
SampleNextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, opacity: "0.5" }}
      onClick={onClick}
    />
  );
}
SamplePrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};
