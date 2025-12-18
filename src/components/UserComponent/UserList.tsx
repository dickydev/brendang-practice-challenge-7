import React from "react";
import { Button } from "../ui/Button/Button";

const dataDummy = ["Ucup", "Renday", "Ulum", "Fandy"];

const dataDummy2 = [
  { id: 1, nama: "Ucup" },
  { id: 2, nama: "Renday" },
  { id: 3, nama: "Ulum" },
  { id: 4, nama: "Fandy" },
];

const UserList: React.FC = () => {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {dataDummy.map((user, index) => (
          <li key={index}>
            {index + 1}. {user}
          </li>
        ))}
      </ul>
      <p>============</p>
      <ul>
        {dataDummy2.map((user2) => (
          <li key={user2.id}>
            {user2.id}. {user2.nama}
          </li>
        ))}
      </ul>
      <Button>Let's Talk</Button>
    </div>
  );
};

export default UserList;
