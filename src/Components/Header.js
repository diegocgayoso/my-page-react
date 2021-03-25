import '../Styles/Header.css'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import profile from '../img/profile.jpeg'
import { VideoPlayBack } from './VideoBg'

function Header() {

  return (
    <div className="App">
      <VideoPlayBack/>
      <div className="ContainerHeader">
        <Zoom>
          <div className="titleH2">
            <h2>Em busca</h2>
          </div>
        </Zoom>
        <Fade left delay={800}>
          <span className="titlePrg">
            <p>
              de novas experiencias
            </p>
          </span>
        </Fade>
      </div>
      <Zoom delay={1300}>
        <div className="imgHeader">
          <img src={profile} />
        </div>
      </Zoom>
    </div>
  );
}

export default Header;
