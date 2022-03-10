import User from "./User";

function UserList(props) {
    return <div className="user-list">
        {props.users.map((user) => (
                <User
                    key = {user.id}
                    username = {user.username}
                    age = {user.age}
                />
            ))}
    </div>
}

export default UserList;