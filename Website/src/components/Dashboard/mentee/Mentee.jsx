import React from 'react'
import MenteeTitle from './MenteeTitle'
import CurrentCourse from './CurrentCourse';
import PastCourses from './PastCourses';

  const handleSubmit = async (event) => {
    event.preventDefault();
    
   let response = await fetch("http://localhost:1000/matching", {
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
   });

   response = await response.json();
   console.log(response);
};
function Mentee({handleClick}) {
  return (
    <div> 
      <MenteeTitle />
      <CurrentCourse />
      <br />
      <PastCourses />
      <br />
      <br />
      <br />
      <button onClick={handleSubmit}>Show Mentors</button>
    </div>
  )
}

export default Mentee;