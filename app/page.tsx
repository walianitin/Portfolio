
import Education from "@/components/Education";
import InitialLandingPage from "@/components/IntialLandingPage";
import Skills from "@/components/skills";



export default function Page() {
    return (
        <>
        <div className=" flex flex-col gap-10 m-4" >

            <InitialLandingPage />
            <Skills></Skills>
            <Education></Education>
        </div>  
        <footer className=" pl-64 mb-6">Design and developed by <a href="https://github.com/walianitin?tab=overview&from=2025-07-01&to=2025-07-13" className="text-blue-300 underline-offset-1 mb-3 left-20">Nitin walia</a></footer>
        </>
    )

}

