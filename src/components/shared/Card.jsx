function Card({ imgSrc, name, species }) {
  return (
    <div className="card">
      <h2 className="character-name">{name}</h2>
      <h4 className="character-specie">{species}</h4>
    </div>
  );
}

export default Card;
