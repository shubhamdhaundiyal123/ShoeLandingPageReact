const Navigation=()=>{
    return(
        <nav className="container" >
            <div className="logo">
                <img src="/images/brand_logo.png" alt="logo" />
            </div>

            <ul>
                <li className="list-items" href="#" >Menu</li>
                <li className="list-items" href="#" >Location</li>
                <li className="list-items" href="#" >About</li>
                <li className="list-items" href="#" >Contact</li>
            </ul>
        <button>Login</button>
        </nav>
    )
}

export default Navigation