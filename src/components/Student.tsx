import { useParams } from 'react-router-dom';

const Student = () => {
  const { name } = useParams();

  return (
    <div>
      <h3>Student Detail</h3>
      <p>Student Name: {name}</p>
    </div>
  );
};

export default Student;
