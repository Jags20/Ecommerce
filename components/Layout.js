import Nav from "./Nav";
import Footer from "./Footer"

const Layout = ({mainTitle, children}) => {
    return(
        <div>
            <Nav/>
            <h1>{mainTitle}</h1>
            {children}
            <hr/>
            <Footer/>
        </div>
    )
}

export default Layout;