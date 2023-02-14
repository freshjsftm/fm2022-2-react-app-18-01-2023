import React, {useContext} from 'react';
import { UserContext } from '../../contexts';

const UserProfile = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <article>
      <h2>{user.name}</h2>
    </article>
  );
}

export default UserProfile;
