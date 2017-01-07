import React from 'react';

const User = ({ user }) => (
    <div className="user columns is-mobile">
      <div className="column is-half is-offset-one-quarter">
        <img src={user.avatar} alt="avatar" />
        <h2>{user.name}</h2>
      </div>
    </div>
)

export default User;