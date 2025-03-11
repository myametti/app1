import './Vistas/Discografia.css';
import taylorSwift from './Vistas/imagenes/taylorSwift.webp'
import fearless from './Vistas/imagenes/fearless.webp'
import speakNow from './Vistas/imagenes/speak now.webp'
import red from './Vistas/imagenes/red.webp'
import nineteeneigthynine from './Vistas/imagenes/1989.webp'
import reputation from './Vistas/imagenes/reputation.webp'
import lover from './Vistas/imagenes/lover.webp'
import folklore from './Vistas/imagenes/folklore.webp'
import evermore from './Vistas/imagenes/evermore.webp'
import midnights from './Vistas/imagenes/midnights.webp'
import ttpd from './Vistas/imagenes/ttpd.jpg'
import ttpdta from './Vistas/imagenes/ttpdta.webp'
const Discografia=()=>{
    return(
        <div className="discografia">
            <div className="row g-2">
                <div className="col-2" id="album1">
                    <div className="card" style={{ width: "19rem", height: "100%" }}>
                        <img src={taylorSwift} className="card-img-top" alt="Album 1" />
                        <div className="card-body">
                            <h5 className="card-title">Taylor Swift (2006)</h5>
                            <p className="card-text">
                                El álbum debut homónimo que la presentó al mundo con un sonido country fresco y letras personales.
                            </p>
                            <a href="https://open.spotify.com/intl-es/album/5eyZZoQEFQWRHkV2xgAeBw?si=lUIyl76VREubBEKV6RRomw" className="btn btn-success">Abrir en Spotify</a>
                        
                        </div>
                    </div>
                </div>
                <div className="col-2" id="album2">
                    <div className="card" style={{ width: "19rem", height: "100%" }}>
                        <img src={fearless} className="card-img-top" alt="Album 2" />
                        <div className="card-body">
                            <h5 className="card-title">Fearless (Taylor's Version) (2021)</h5>
                            <p className="card-text">
                                Regrabación del álbum original, con una versión renovada y canciones inéditas 'From The Vault'.
                            </p>
                            <a href="https://open.spotify.com/album/4hDok0OAJd57SGIT8xuWJH?si=UjJJMqbtTPGy7myo4acCfA" className="btn btn-success">Abrir en Spotify</a>
                        </div>                       
                    </div>
                </div>
                <div className="col-2" id="album3">
                    <div className="card" style={{ width: "19rem", height: "100%" }}>
                        <img src={speakNow} className="card-img-top" alt="Album 3" />
                        <div className="card-body">
                            <h5 className="card-title">Speak Now (Taylor's Version) (2023)</h5>
                            <p className="card-text">
                                Regrabación de su tercer álbum, con una visión nostálgica y renovada de sus historias personales.
                            </p>
                            <a href="https://open.spotify.com/album/5AEDGbliTTfjOB8TSm1sxt?si=MsyYNSfLT2aqMLDqSazWGg" className="btn btn-success">Abrir en Spotify</a>
                        </div>                       
                    </div>
                </div>
                <div className="col-2" id="album4">
                    <div className="card" style={{ width: "19rem", height: "100%" }}>
                        <img src={red} className="card-img-top" alt="Album 4" />
                        <div className="card-body">
                            <h5 className="card-title">Red (Taylor's Version) (2021)</h5>
                            <p className="card-text">
                                La regrabación de 'Red', incluyendo la épica versión de 10 minutos de 'All Too Well'.
                            </p>
                            <a href="https://open.spotify.com/album/6kZ42qRrzov54LcAk4onW9?si=OWhl4US3S3u58yO1p6vqDQ" className="btn btn-success">Abrir en Spotify</a>
                        </div>                       
                    </div>
                </div>
                <div className="col-2" id="album5">
                    <div className="card" style={{ width: "19rem", height: "100%" }}>
                        <img src={nineteeneigthynine} className="card-img-top" alt="Album 5" />
                        <div className="card-body">
                            <h5 className="card-title">1989 (Taylor's Version) (2023)</h5>
                            <p className="card-text">
                                La regrabación del icónico '1989', reviviendo el pop vibrante y elegante de su era original.
                            </p>
                            <a href="https://open.spotify.com/album/1o59UpKw81iHR0HPiSkJR0?si=F5on5mZxSa6JHwOr2IWteQ" className="btn btn-success">Abrir en Spotify</a>
                        </div>                       
                    </div>
                </div>
                <div className="col-2" id="album6">
                    <div className="card" style={{ width: "19rem", height: "100%" }}>
                        <img src={reputation} className="card-img-top" alt="Album 6" />
                        <div className="card-body">
                            <h5 className="card-title">Reputation (2017)</h5>
                            <p className="card-text">
                                Una versión más oscura y desafiante de Taylor, explorando el amor y la fama con un estilo pop y electrónico.
                            </p>
                            <a href="https://open.spotify.com/album/6DEjYFkNZh67HP7R9PSZvv?si=CYb0-tlYToOY3NlGFsitzQ" className="btn btn-success">Abrir en Spotify</a>
                        </div>                       
                    </div>
                </div>
            </div>
            <div className="row g-2">
                <div className="col-2" id="album7">
                    <div className="card" style={{ width: "19rem", height: "100%" }}>
                        <img src={lover} className="card-img-top" alt="Album 7" />
                        <div className="card-body">
                            <h5 className="card-title">Lover (2019)</h5>
                            <p className="card-text">
                                Un álbum lleno de colores pastel y canciones que celebran el amor en todas sus formas, con éxitos como 'You Need To Calm Down'.
                            </p>
                            <a href="https://open.spotify.com/album/1NAmidJlEaVgA3MpcPFYGq?si=H0U82M2jQx-HvCvZCW6PSw" className="btn btn-success">Abrir en Spotify</a>
                        </div>                       
                    </div>
                </div>
                <div className="col-2" id="album8">
                    <div className="card" style={{ width: "19rem", height: "100%" }}>
                        <img src={folklore} className="card-img-top" alt="Album 8" />
                        <div className="card-body">
                            <h5 className="card-title">Folklore (2020)</h5>
                            <p className="card-text">
                                Un giro introspectivo y folk, lleno de relatos imaginativos y melancólicos como 'Cardigan' y 'August'.
                            </p>
                            <a href="https://open.spotify.com/album/1pzvBxYgT6OVwJLtHkrdQK?si=NsQsJitQQWyKw1kIwn2Zpg" className="btn btn-success">Abrir en Spotify</a>
                        </div>                       
                    </div>
                </div>
                <div className="col-2" id="album9">
                    <div className="card" style={{ width: "19rem", height: "100%" }}>
                        <img src={evermore} className="card-img-top" alt="Album 9" />
                        <div className="card-body">
                            <h5 className="card-title">Evermore (2020)</h5>
                            <p className="card-text">
                                La hermana de 'Folklore', con un sonido alternativo y folk que sigue explorando historias profundas y poéticas.
                            </p>
                            <a href="https://open.spotify.com/album/6AORtDjduMM3bupSWzbTSG?si=O2JBrWwvQtmGqF8fNiLfsw" className="btn btn-success">Abrir en Spotify</a>
                        </div>                       
                    </div>
                </div>
                <div className="col-2" id="album10">
                    <div className="card" style={{ width: "19rem", height: "100%" }}>
                        <img src={midnights} className="card-img-top" alt="Album 10" />
                        <div className="card-body">
                            <h5 className="card-title">Midnights (2022)</h5>
                            <p className="card-text">
                                Un álbum conceptual que refleja pensamientos y confesiones de medianoche, destacando 'Anti-Hero' y 'Lavender Haze'.
                            </p>
                            <a href="https://open.spotify.com/album/151w1FgRZfnKZA9FEcg9Z3?si=-dHMKdmIR_WNJASSO8_ZXw" className="btn btn-success">Abrir en Spotify</a>
                        </div>                       
                    </div>
                </div>
                <div className="col-2" id="album11">
                <div className="card" style={{ width: "19rem", height: "100%" }}>
                        <img src={ttpd} className="card-img-top" alt="Album 11" />
                        <div className="card-body">
                            <h5 className="card-title">The Tortured Poets Department (2024)</h5>
                            <p className="card-text">
                                Un álbum introspectivo y poético, lleno de confesiones y reflexiones sobre el amor y la pérdida.
                            </p>
                            <a href="https://open.spotify.com/album/1Mo4aZ8pdj6L1jx8zSwJnt?si=uUsirAP6SBi2Jstt9cOqoA" className="btn btn-success">Abrir en Spotify</a>
                        </div>                       
                    </div>
                </div>
                <div className="col-2" id="album12">
                <div className="card" style={{ width: "19rem", height: "100%" }}>
                        <img src={ttpdta} className="card-img-top" alt="Album 11" />
                        <div className="card-body">
                            <h5 className="card-title">The Tortured Poets Department: The Anthology (2024)</h5>
                            <p className="card-text">
                                Una colección extendida con canciones inéditas y versiones alternativas, explorando el amor, la pérdida y la poesía más íntima de Taylor Swift.
                            </p>
                            <a href="https://open.spotify.com/album/5H7ixXZfsNMGbIE5OBSpcb?si=7Hx2rp1uTras7tg8_G5mbA" className="btn btn-success">Abrir en Spotify</a>
                        </div>                       
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Discografia;