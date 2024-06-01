import axios from "axios";
import Header from "../components/AppHeader";
import UserCard from "../components/UserCard";
import { useEffect, useState } from "react";
import routes from "../routes";

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const Main = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const path = routes.usersPath();
        console.log(path);
        const { data } = await axios.get(routes.usersPath());
        setUsers(data.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Header />
      <div className="container flex-wrap d-flex gap-4 py-5 justify-content-center">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
      </div>
    </>
  );
};

export default Main;
