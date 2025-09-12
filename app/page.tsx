import Education from "@/components/Education";
import InitialLandingPage from "@/components/IntialLandingPage";
import Skills from "@/components/skills";



export default function Page() {
    return (
        <>
        <div className="flex flex-col gap-10 m-4 px-2 max-w-screen-lg mx-auto sm:px-6 md:px-10 lg:px-20">
            <InitialLandingPage />
            <Skills />
            <Education />
        </div>  
        <footer className="w-full text-center py-4 text-sm text-foreground bg-background mt-8">
            Design and developed by{' '}
            <a href="https://github.com/walianitin?tab=overview&from=2025-07-01&to=2025-07-13" className="text-blue-300 underline-offset-1">
                Nitin walia
            </a>
        </footer>
        </>
    )

}

