import { useAuth } from "../hooks/index";

const LogOutButton = () => {
  const auth = useAuth();
  const signOut = () => {
    auth.logOut();
    localStorage.clear();
  };

  return (
    auth.loggedIn ? (
      <button
        type="button"
        onClick={signOut}
        className="btn custom-btn rounded-1"
      >
        Выход
      </button>
    ) : null
  );
};

export default LogOutButton;