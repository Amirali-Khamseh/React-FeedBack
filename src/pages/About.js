import Card from "../components/shared/Card"
import { Link } from "react-router-dom"

function About() {
  return (
    
    <Card>
      <h2>Feedback UI App</h2>
      <Link to='/'>
        <h4>Back to Home page</h4> 
      </Link> 
     
    </Card>
  )
}

export default About