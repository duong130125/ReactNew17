import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Employee = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/employee?employeeName=${inputValue}`);
  };

  const [searchParams] = useSearchParams();
  const studentName = searchParams.get('employeeName');
  return (
    <>
      <h3>Employee Search</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Nhập từ khóa tìm kiếm"
      />
      <button onClick={handleSearch}>Tìm kiếm</button>
      <p>Employee Name: {studentName}</p>
    </>
  );
};

export default Employee;
