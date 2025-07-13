
"use client"
import Education from "@/components/Education";
import GitHubActivityCalendar  from"@/components/Github_contri";
import InitialLandingPage from "@/components/IntialLandingPage";

import Skills from "@/components/skills";



export default function Page() {
    return (
        <>
        <div className=" flex flex-col gap-10 m-4">
            {/* <Navbar></Navbar> */}
            <InitialLandingPage />
            <GitHubActivityCalendar username="walianitin"/>
            <Skills></Skills>
            <Education></Education>
        </div>  
        </>
    )

}

