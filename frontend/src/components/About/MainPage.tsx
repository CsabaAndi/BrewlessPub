import AboutMe from './About'
import Work from './Work'
import Education from './Education'
import Thesis from './Thesis'
import Projects from './Projects'
import StackNew from './StackNew'

function AboutMain() {
    return (
        <main className="pb-6">
            <AboutMe />
            <Work />
            <Education />
            <Thesis />
            <Projects />
            <StackNew />
        </main>
    )
}

export default AboutMain