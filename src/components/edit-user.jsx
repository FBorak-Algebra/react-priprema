import React, { useState } from 'react';

function DisplayUserInfo({user}) {

  return (
    <>
        <h3>Trenutni podaci:</h3>
        <p>Ime: {user.name}</p>
        <p>Email: {user.email}</p>
  
    </>
  );
}

export default DisplayUserInfo;