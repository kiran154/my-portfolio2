import React from 'react';
import './Button.css';

// function Button(props) {
//   const { label, onClick, className } = props;
//   return (
//     <button className={`Button ${className}`} onClick={onClick}>
//       {label}
//     </button>
//   );
// }

function Button(props) {
  const { label, onClick, className, href } = props;

  if (href) {
    return (
      <a className={`Button ${className}`} href={href}>
        {label}
      </a>
    );
  } else {
    return (
      <button className={`Button ${className}`} onClick={onClick}>
        {label}
      </button>
    );
  }
}


// function Button(props) {
//     const { label, onClick, className, width } = props;
//     return (
//       <Button className={className} onClick={onClick} width={width}>
//         {label}
//       </Button>
//     );
//   }

export default Button;
