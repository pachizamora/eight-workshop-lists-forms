function Student({ student }) {
  return (
    <div>
      <li>
        {student.name} - Age: {student.age} - Grade: {student.grade}
      </li>
    </div>
  );
}

export default Student;
