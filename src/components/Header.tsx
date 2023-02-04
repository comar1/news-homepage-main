import './header.css'
import logo from '../assets/images/logo.svg'

function App() {
    return (
        <div className="header">
            <div className="logo"><img src={logo} alt="logo"/></div>
            <div className="nav">
                <a href="">Home</a>
                <a href="">New</a>
                <a href="">Popular</a>
                <a href="">Trending</a>
                <a href="">Categories</a>

            </div>
        </div>
    )
}

export default App