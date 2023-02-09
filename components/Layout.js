import Nav from "./Nav"

const Layout = ({mainTitle, children, footer}) => {
    return(
        <div>
            <Nav/>
            <h1>{mainTitle}</h1>
            {children}
            <hr/>
            <h3>{footer}</h3>
        </div>
    )
}

export default Layout;