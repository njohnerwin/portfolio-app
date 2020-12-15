import { render } from "react-dom";
import About from "../components/about";
import SkillsList from "../components/skillslist";

function BioPage() {
  return(
    <div id="bio">
            <About />
            <SkillsList />
    </div>
  );
}

export default BioPage;