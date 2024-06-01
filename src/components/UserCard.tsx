import Like from "../assets/images/like-empty.svg"

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

type Props = { key: number; user: User };

const UserCard = (props: Props) => {
  const { user } = props;
  const { avatar } = user;

  return (
    <div
      className="card custom-card rounded-3 border-0 p-2 pt-4"
      style={{ width: 305 + "px" }}
    >
      <div className="card-body d-flex flex-column align-items-center">
        <div
          className="user-avatar"
          style={{
            width: 124 + "px",
            height: 124 + "px",
            backgroundImage: `url(${avatar})`,
          }}
        ></div>
        <h4 className="card-title pt-3">
          {user.first_name} {user.last_name}
        </h4>
        <div className="w-100 d-flex justify-content-end pt-4">
          <img src={Like} alt="like-icon" style={{maxHeight: 28 + 'px'}}/>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
