import fearlessTour from './Vistas/imagenes/fearlessTour.jpg'
import speakNowTour from './Vistas/imagenes/speakNowTour.png'
import redTour from './Vistas/imagenes/redTour.jpg'
import nineteenTour from './Vistas/imagenes/1989tour.jpg'
import repTour from './Vistas/imagenes/reptour.webp'
import theErasTour from './Vistas/imagenes/theerastour.webp'
import './Vistas/Tours.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Tours=()=>{

    return(
        <div className="Tours">
            <div id="carouselExampleIndicators" className="carousel slide" >
              <ol className="carousel-indicators">
                <li data-bs-target="#Fearless" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active fearless-slide" id="Fearless" >
                  <div className='card' id='cardFearless'>
                    <h5 className="card-title">Fearless Tour</h5>
                    <p className="card-text">El tour de Fearless, que se llevo a cabo en 2006, fue el primer tour de Taylor Swift en el que aparece en el disco de estudio Fearless.</p>
                  </div>
                  <img className="d-block w-100" src={fearlessTour} alt="Fearless Tour" />
                </div>
                <div className="carousel-item" id='SpeakNow'>
                  <div className='card' id='cardSpeakNow'>
                    <h5 className="card-title">Speak Now Tour</h5>
                    <p className="card-text">El tour de Fearless, que se llevo a cabo en 2006, fue el primer tour de Taylor Swift en el que aparece en el disco de estudio Fearless.</p>
                  </div> 
                  <img className="d-block w-100 h-10" src={speakNowTour} alt="Speak Now Tour"/>
                </div>
                <div className="carousel-item" id='Red'>
                  <div className='card' id='cardRed'>
                    <h5 className="card-title">Red Tour</h5>
                    <p className="card-text">El tour de Fearless, que se llevo a cabo en 2006, fue el primer tour de Taylor Swift en el que aparece en el disco de estudio Fearless.</p>
                  </div>
                  <img className="d-block w-100" src={redTour} alt="Red Tour"/>
                </div>
                <div className="carousel-item" id='Nineteen'>
                  <div className='card' id='card1989'>
                    <h5 className="card-title">1989 Tour</h5>
                    <p className="card-text">El tour de Fearless, que se llevo a cabo en 2006, fue el primer tour de Taylor Swift en el que aparece en el disco de estudio Fearless.</p>
                  </div>
                  <img className="d-block w-100" src={nineteenTour} alt="1989 Tour"/>
                </div>
                <div className="carousel-item" id='Reputation'>
                  <div className='card' id='cardReputation'>
                    <h5 className="card-title">Reputation Tour</h5>
                    <p className="card-text">El tour de Fearless, que se llevo a cabo en 2006, fue el primer tour de Taylor Swift en el que aparece en el disco de estudio Fearless.</p>
                  </div>
                  <img className="d-block w-100" src={repTour} alt="Reputation Tour"/>
                </div>
                <div className="carousel-item" id='TheEras'>
                  <div className='card' id='cardTheEras'>
                    <h5 className="card-title">The Eras Tour</h5>
                    <p className="card-text">El tour de Fearless, que se llevo a cabo en 2006, fue el primer tour de Taylor Swift en el que aparece en el disco de estudio Fearless.</p>
                  </div>
                  <img className="d-block w-100" src={theErasTour} alt="The Eras Tour"/>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" id='prev'></span>
                <span className="visually-hidden">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" id='next'></span>
                <span className="visually-hidden">Next</span>
              </a>
            </div>
        </div>
    )
}

export default Tours;