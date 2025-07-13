

import Education from "@/components/Education";
import Github_contri from "@/components/Github_contri";
import InitialLandingPage from "@/components/IntialLandingPage";

import Skills from "@/components/skills";



export default function Page() {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <InitialLandingPage />
            <Github_contri></Github_contri>
            <Skills></Skills>
            <Education></Education>
        </div>  
    )

}

