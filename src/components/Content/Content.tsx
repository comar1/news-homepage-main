import dashboard_img from '../../assets/images/image-web-3-desktop.jpg'
import News from './News';
import './content.css'

function App() {
    const leftcolumn = {
        backgroundColor: 'lightgray',
        width: '48%',
        height: '100%',
        float:  'left',
        fontSize: '30px',
        lineHeight: '1.0',
    };
    const rightcolumn = {
        backgroundColor: 'lightblue',
        width: '50%',
        height: '100%',
        float:  'right',
        paddingLeft: '10px',
    };

    return (
        <div>
            <div className="content">
                <div className="dashboard_img"><img src={dashboard_img} alt="" /></div>
                <div>
                    <div style={leftcolumn}><h3>The Bright <br></br> Future of <br></br>Web 3.0?</h3></div>
                    <div style={rightcolumn}>
                        <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fufilling its promise?</p>
                        <button>READ MORE</button>
                    </div>
                </div>
            </div>
            <div className="news">
                <div><p>this is news</p></div>
            </div>
        </div>
    );
}

export default App