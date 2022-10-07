const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ exercises }) => {
  console.log(exercises)
  return (
    <p>Number of exercises { exercises.reduce((p,s) => p + s, 0)}</p>
  )
}
const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    { parts.map((part) => <Part key={part.id} part={part} />)} 
  </>

const Course = ({ course }) =>
  <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total exercises={ course.parts.map((part) => part.exercises)} />
  </div>

export default Course;