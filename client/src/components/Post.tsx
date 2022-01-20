type PostArgs = {
  id: Number;
  title: String;
  location: {
    country: String;
    state: String;
  };
  experience: {
    min: Number;
    max: Number;
  };
  modality: String;
  salary: {
    min: Number;
    max: Number;
  };
  startDate: String;
};

const Post = ({
  id,
  title,
  location,
  experience,
  modality,
  salary,
  startDate,
}: PostArgs) => {
  return (
    <div>
      <div>
        <img src="" alt="img-logo-company" />
        <div>
          <div>
            <h4>{title}</h4>
            <p>
              {location.state}, {location.country}
            </p>
          </div>
          <div>
            <div>
              Experiencia:
              <p>
                {experience.min} - {experience.max}
              </p>
            </div>
          </div>
          <div>
            <div>
              Modalidad:
              <p>{modality}</p>
            </div>
          </div>
          <div>
            <div>
              Salario:
              <p>
                {salary.min} - {salary.max}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>{startDate}</p>
        <button>Guardar</button>
      </div>
    </div>
  );
};

export default Post;
