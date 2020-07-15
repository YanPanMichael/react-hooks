import React from 'react';

export const config = {
  child: {
    color: 'green',
  },
  marriage: {
    color: 'pink',
  }
}

export const ConfigContext = React.createContext(config.child);