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
                    <h5 className="card-title">Fearless Tour (2009-2010)</h5>
                    <div className="card-text">
                      <p className="pCentrados">
                      Álbum promocionado: Fearless
                      </p>
                      <p className="pCentrados">
                      Países visitados: Estados Unidos, Canadá, Reino Unido, Japón, Australia
                      </p>
                      <p className="pCentrados">
                      Número de shows: 108
                      </p>
                      <p className="pCentrados">
                      Recaudación: No se tienen datos exactos, pero se estima que superó los 15 millones de dólares. 
                      </p>
                      <p className="pCentrados">
                      Datos relevantes: Fue su primera gira como artista principal y contó con teloneros como Kellie Pickler y Gloriana.
                      </p>  
                    </div>
                  </div>
                  <img className="d-block w-100" src={fearlessTour} alt="Fearless Tour" />
                </div>
                <div className="carousel-item" id='SpeakNow'>
                  <div className='card' id='cardSpeakNow'>
                    <h5 className="card-title">Speak Now Tour  (2011-2012)</h5>
                    <div className="card-text">
                      <p className='pCentrados'>
                    Álbum promocionado: Speak Now
                    </p>
                    <p className='pCentrados'>
                    Países visitados: 17 (incluyendo Norteamérica, Europa, Asia y Australia)
                    </p>
                    <p className='pCentrados'>
                    Número de shows: 110
                    </p>
                    <p className='pCentrados'>
                    Recaudación: 123.4 millones de dólares
                    </p>
                    <p className='pCentrados'>
                    Datos relevantes: Marcó su consolidación como estrella global y destacó por su elaborada puesta en escena.
                    </p>
                    </div>
                  </div> 
                  <img className="d-block w-100 h-10" src={speakNowTour} alt="Speak Now Tour"/>
                </div>
                <div className="carousel-item" id='Red'>
                  <div className='card' id='cardRed'>
                    <h5 className="card-title">Red Tour (2013-2014)</h5>
                    <div className="card-text">
                      <p className='pCentrados'>
                      Álbum promocionado: Red
                      </p>
                      <p className='pCentrados'>
                      Países visitados: 7 (Norteamérica, Europa y Australia)
                      </p>
                      <p className='pCentrados'>
                      Número de shows: 86
                      </p>
                      <p className='pCentrados'>
                      Recaudación: 150.2 millones de dólares
                      </p>
                      <p className='pCentrados'>
                      Incluyó elementos teatrales y contó con la participación de artistas invitados como Ed Sheeran y Sam Smith.
                      </p>
                    </div>
                  </div>
                  <img className="d-block w-100" src={redTour} alt="Red Tour"/>
                </div>
                <div className="carousel-item" id='Nineteen'>
                  <div className='card' id='card1989'>
                    <h5 className="card-title">1989 Tour (2015-2016)</h5>
                    <div className="card-text">
                      <p className='pCentrados'>
                      Álbum promocionado: 1989
                      </p>
                      <p className='pCentrados'>
                      Países visitados: 11 (Norteamérica, Europa, Asia y Australia)
                      </p>
                      <p className='pCentrados'>
                      Número de shows: 85
                      </p>
                      <p className='pCentrados'>
                      Recaudación: 250.7 millones de dólares
                      </p>
                      <p className='pCentrados'>
                      Se caracterizó por su estética retro y la presencia de numerosas celebridades en el escenario.
                      </p>
                    </div>
                  </div>
                  <img className="d-block w-100" src={nineteenTour} alt="1989 Tour"/>
                </div>
                <div className="carousel-item" id='Reputation'>
                  <div className='card' id='cardReputation'>
                    <h5 className="card-title">Reputation Tour (2018)</h5>
                    <div className="card-text">
                      <p className='pCentrados'>
                      Álbum promocionado: Reputation
                      </p>
                      <p className='pCentrados'>
                      País visitado: 7 (Norteamérica, Europa, Asia y Oceanía)
                      </p>
                      <p className='pCentrados'>
                      Número de shows: 53
                      </p>
                      <p className='pCentrados'>
                      Recaudación:  345.2 millones de dólares
                      </p>
                      <p className='pCentrados'>
                      Fue una de las giras más taquilleras de la historia y destacó por su impactante puesta en escena.
                      </p>
                    </div>
                  </div>
                  <img className="d-block w-100" src={repTour} alt="Reputation Tour"/>
                </div>
                <div className="carousel-item" id='TheEras'>
                  <div className='card' id='cardTheEras'>
                    <h5 className="card-title">The Eras Tour (2023-2024)</h5>
                    <div className="card-text">
                      <p className='pCentrados'>
                      Álbum promocionado: Todos los álbumes de su discografía.
                      </p>
                      <p className='pCentrados'>
                      País visitado: 20 en 5 continentes (Norteamérica, Sudamérica, Europa, Asia y Oceanía)
                      </p>
                      <p className='pCentrados'>
                      Número de shows: 152
                      </p>
                      <p className='pCentrados'>
                      Recaudación:  1.039 millones de dólares
                      </p>
                      <p className='pCentrados'>
                      Es la gira más ambiciosa y extensa de su carrera hasta la fecha, abarcando todas las "eras" musicales de su trayectoria.
                      </p>
                    </div>
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