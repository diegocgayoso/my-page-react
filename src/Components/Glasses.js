import VanillaTilt from 'vanilla-tilt';
import '../Styles/Glasses.css'


export function Glasses() {
    
    const cardTitl = document.querySelectorAll('.card')
    
    function Tilt(){
        console.log('Tilt')
        VanillaTilt.init(cardTitl, {
            reverse: true,
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 1
        })
    }
    Tilt()
    return (
        <div className="BodyHeader">

            <div className="containerGlass">
                <div className="card">
                    <div className="content">
                        <h2>01</h2>
                        <h3> Card one</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <a href="#">Veja mais</a>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <h2> 02</h2>
                        <h3> Card two</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <a href="#">Veja mais</a>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <h2> 03</h2>
                        <h3> Card three</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <a href="#">Veja mais</a>
                    </div>
                </div>
            </div>
        </div>
    )
}