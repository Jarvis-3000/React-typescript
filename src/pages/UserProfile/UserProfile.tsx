import React, { FC } from "react";
import { useParams, NavLink, Navigate } from "react-router-dom";

interface UserProfileProps {}

const UserProfile: FC<UserProfileProps> = ({}) => {
  let params = useParams();


  return (
    <div>
      UserProfile
      <NavLink to="/account">Account</NavLink>
    </div>
  );
};

export default UserProfile;
