function UserList() {
    const users = [
       {id: 1, name:"Pavithra",role:"Student"},
       {id: 2, name:"Panduzz",role:"Artist"},
       {id: 3, name:"Pavi",role:"Farmer"},
       {id: 4, name:"Pavithra",role:"Dancer"},
    ];
    return(
        <div className="list-box">
            <h3>User List</h3>
            <ul>
                {/* map() */}
                {users.map((user)=>(
                    <li key={user.id}>
                        {user.name}, is a {user.role}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default UserList;