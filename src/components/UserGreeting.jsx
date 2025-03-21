
const UserGreeting = (props) => {

    return props.isLoggedIn ? <h2>welcome {props.name} </h2> : <h2>please login</h2>
}
export default UserGreeting