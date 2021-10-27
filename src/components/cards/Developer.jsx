import "./style.css";

const PersonCard = ({ prop }) => {
  return (
    <div className="card">
      <p>Dev: {prop.name}</p>
      <p>Idade: {prop.age}</p>
      <p>País: {prop.country}</p>
    </div>
  );
};

export default PersonCard;
