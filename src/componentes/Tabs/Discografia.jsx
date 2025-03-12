import './Vistas/Discografia.css';
import albums from './discos.json'
const Discografia=()=>{
    return(
        <div className="discografia container-fluid py-4">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
      {albums.map((album, index) => (
        <div className="col" key={index}>
          <AlbumCard 
            image={album.image}
            title={album.title}
            description={album.description}
            spotifyLink={album.spotifyLink}
          />
        </div>
      ))}
    </div>
  </div>
    );
};

const AlbumCard = ({ image, title, description, spotifyLink }) => {
    return (
      <div className="album-card">
        <div className="card h-100">
          <img src={image} className="card-img-top" alt={title} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{title}</h5>
            <p className="card-text flex-grow-1">{description}</p>
            <a href={spotifyLink} className="btn btn-success mt-auto" target="_blank" rel="noopener noreferrer">
              Abrir en Spotify
            </a>
          </div>
        </div>
      </div>
    );
  };


export default Discografia;