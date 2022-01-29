import React from 'react';
import PropTypes from 'prop-types';

export default function CircleX({ onDelete }) {
  return (
    <svg
      onClick={onDelete}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="1.5em"
      height="1.5em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 512 512"
    >
      <path
        fill="black"
        d="M348.071 141.302l-87.763 87.763l-87.763-87.763l-22.628 22.627l87.764 87.763l-87.764 87.764l22.628 22.627l87.763-87.763l87.763 87.763l22.628-22.627l-87.764-87.764l87.764-87.763l-22.628-22.627z"
      />
      <path
        fill="#e5e5e5"
        d="M425.706 86.294A240 240 0 0 0 86.294 425.706A240 240 0 0 0 425.706 86.294zM256 464c-114.691 0-208-93.309-208-208S141.309 48 256 48s208 93.309 208 208s-93.309 208-208 208z"
      />
    </svg>
  );
}

CircleX.propTypes = {
  onDelete: PropTypes.func.isRequired,
};
