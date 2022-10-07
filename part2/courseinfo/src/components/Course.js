const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ parts }) => {
  console.log(parts)
  return (
    <p>Number of exercises { parts.reduce((p,s) => p + s.exercises, 0)}</p>
  )
}
const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    <Part
      part={parts[0]} 
    />
    <Part
      part={parts[1]} 
    />
    <Part
      part={parts[2]} 
    />      
  </>

const Course = ({ course }) =>
  <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>

export default Course;