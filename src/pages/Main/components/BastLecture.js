const BastLecture = props => {
  const { lecture } = props;

  return (
    <div className="lectures" color={lecture.color}>
      <p className="lecturetitle">{lecture.title}</p>
      <img src={lecture.img} />
    </div>
  );
};

export default BastLecture;
