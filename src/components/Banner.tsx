import logo from "../assets/GlobomanticsLogo.png";

function Banner() {

    return (<>
    <header className="row">
        <div className="col-5">
            <img src={logo} alt="logo"/>
        </div> 
        <div className="col-7">Providing houses all over the world</div>  
    </header>
    </>)

}

export default Banner;