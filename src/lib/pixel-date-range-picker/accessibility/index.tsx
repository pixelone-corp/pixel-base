import PropTypes from 'prop-types';

export const ariaLabelsShape = PropTypes.shape({
  dateInput: PropTypes.objectOf(
    PropTypes.shape({ startDate: PropTypes.string, endDate: PropTypes.string })
  ),
  monthPicker: PropTypes.string,
  yearPicker: PropTypes.string,
  prevButton: PropTypes.string,
  nextButton: PropTypes.string,
});

// import React from 'react';

// interface AriaLabels {
//   dateInput: {
//     startDate: string;
//     endDate: string;
//   };
//   monthPicker: string;
//   yearPicker: string;
//   prevButton: string;
//   nextButton: string;
// }

// interface MyComponentProps {
//   ariaLabels: AriaLabels;
// }

// const MyComponent: React.FC<MyComponentProps> = ({ ariaLabels }) => {
//   // You can now use ariaLabels with the AriaLabels type
//   return (
//     <div>
//       <label>{ariaLabels.dateInput.startDate}</label>
//       <label>{ariaLabels.dateInput.endDate}</label>
//       <button>{ariaLabels.prevButton}</button>
//       <button>{ariaLabels.nextButton}</button>
//     </div>
//   );
// };

// export default MyComponent;
