import img from '../assets/profile.svg'
const Card = (name ='Guest', age=0,isEnrolled = true) => {
    
    return (
    <div className='card'>
        <img src={img} alt="" />
        <h2>Name:{props.name} </h2>
        <p>Age: {props.age} </p>
        <p>Is Enrolled:{props.isEnrolled?'yes':'no'} </p>
    </div>)
}

export default Card