//ReactDOM u direk kütüphaneden çagirdik.
//render(what,where)
ReactDOM.render(<h1>Hello React</h1>, document.getElementById("root"));


//ReactDOM.render(<p>Hello React</p>,document.querySelector("div"));
// ya h1 ya da p yi yazdiriyor,ikisini ayni anda yazdirmiyor.

ReactDOM.render(
    <ul>
        <li>hello</li>
        <li>react</li>
        <li>js</li>
    </ul>
    , document.getElementById("root")
);










function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

    )
};

function MainContent() {
    return <h1>React ögreniyorum</h1>;
}
//asagidaki yesil MainContent te ctrl ye basip tikladiktan sonra yukariya yönlendiriyor.

ReactDOM.render( // bir tane div parent i kullandik.
    <div>
        <Navbar />
        <MainContent />
    </div>
    ,
    document.getElementById("root")
);


/* tek bir parent olmali ,yoksa error veriyor,asagidaki kodu calistirirsak error aliyoruz.
ReactDOM.render(
<Navbar/>
<MainContent/>
,
document.getElementById("root"));
*/


console.log(<MainContent type="contentBody" color="" background="#ffffff" />); // bir attiribute eklenebilir.

//Decclareativ Programming WHAT?
const h1React = <h1 className="header">Hello React !</h1>;
console.log(h1React);



//Imperativ Programming HOW?
const h1 = document.createElement("h1");
h1.innerText = "Hello react!";
h1.className = "header";
document.getElementById("root").append(h1); //ekleme yaptigi icin kendinden önce root da bulunanlar silinmedi,bu sadece eklenmis oldu.
console.log(h1);







function Button(props) {
    if (props.type == "link") {
        return (
            <button className={props.className} href={props.href}>Button</button>
        )
    }
    if(props.type == "button"){
        return(
            <button className={props.className} href={props.href}>Button</button>
        )
    }
}

<Button type="link" href="" className="button" />