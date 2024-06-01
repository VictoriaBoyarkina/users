import LogOutButton from "./LogoutButton";

const Header = () => {
  return (
    <header>
      <h1 className="text-white bg-main">Наша команда</h1>
      <p className="text-white bg-main">Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций. </p>
      <LogOutButton />
    </header>
  );
};

export default Header;