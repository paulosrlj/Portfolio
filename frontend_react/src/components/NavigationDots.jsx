/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

function NavigationDots({ active }) {
  return (
    <div className="app__navigation">
      {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
        <a
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: '#313BAC' } : {}}
          href={`#${item}`}
        />
      ))}
    </div>
  );
}

NavigationDots.propTypes = {
  active: String.isRequired,
};

export default NavigationDots;
