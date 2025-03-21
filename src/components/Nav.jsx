import {Link} from 'react-router-dom'
const Nav = () => {
    return (
        <>
            <div classNameName="d-flex  flex-row align-items-center p-3 
    px-4 mb-3 bg-white border-bottom border-primary">
                <h5 className="my-0 me-auto font-weight-normal">Company name</h5>
                <nav className="my-2  mr-3">
                    <Link className="p-2 text-dark" to="Features">Features</Link>
                    <Link className="p-2 text-dark" to="Enterprise">Enterprise</Link>
                    <Link className="p-2 text-dark" to="Support">Support</Link>
                    <Link className="p-2 text-dark" to="/">Pricing</Link>
                </nav>
                <Link className="btn btn-outline-primary" to="#">Sign up</Link>
            </div>
        </>
    )
}

export default Nav 
