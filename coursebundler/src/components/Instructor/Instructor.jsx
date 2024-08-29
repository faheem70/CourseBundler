import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InstructorProfiles = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const { data } = await axios.get('http://localhost:4000/api/instructors');
        setInstructors(data);
      } catch (error) {
        console.error('Error fetching instructors:', error);
      }
    };

    fetchInstructors();
  }, []);

  return (
    <div>
      {instructors.map(instructor => (
        <div key={instructor._id}>
          <h2>{instructor.name}</h2>
          <p>{instructor.bio}</p>
        </div>
      ))}
    </div>
  );
};

export default InstructorProfiles;
