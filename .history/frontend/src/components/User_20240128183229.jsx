import React from 'react';
import { Badge, Image } from 'react-bootstrap';

function User({ name, isLoggedIn }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ position: 'relative', marginRight: '10px' }}>
        <Image
          src="https://via.placeholder.com/50"
          roundedCircle
          style={{ marginRight: '10px' }}
        />
        {isLoggedIn && (
          <div
 
          />
        )}
      </div>
      <div>
        <div>{name}</div>
        
      </div>
    </div>
  );
}

export default User;
