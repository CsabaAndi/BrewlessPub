import Education from './Education'
import Projects from './Projects'
import AboutMe from './About'
import Thesis from './Thesis'
import StackNew from './Stack/StackNew'
import Work from './Work'

function About_main() {
    return (
        <div className='pb-6'>
            <AboutMe></AboutMe>
            <Work></Work>
            <Education></Education>
            <Thesis></Thesis>
            <Projects></Projects>
            <StackNew></StackNew>
        </div>
    )
}

export default About_main
