type PostArgs = {
  postId?: Number;
  title: String;
  description: String;
  tags: String[];
  modality: String;
  contractType: String;
  location: {
    country: String;
    state: String;
  };
  startDate: String;
  endDate: String;
  category: String;
  salary: String;
};

const Post = ({
  title,
  description,
  tags,
  modality,
  contractType,
  location,
  startDate,
  endDate,
  salary,
  category,
}: PostArgs) => {
  return (
    <div>
      <img src="" alt="img-company-logo" />
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <p>Etiquetas (Keywords) </p>
        <ul>
          {tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
      </div>
      <div>
        <p>Modalidad: {modality}</p>
        <p>Tipo de Contrato: {contractType}</p>
        <p>
          Ubicación: {location.state}, {location.country}
        </p>
      </div>
      <div>
        <p>
          Publicado el: {startDate} Finaliza el: {endDate}
        </p>
        <p>Category: {category}</p>
        <p>Salario: $ {salary}</p>
      </div>
    </div>
  );
};

export default Post;
