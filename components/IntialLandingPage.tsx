import  HeroSection from "@/components/Herosection";
import ProjectCardList from "./ProjectListCard";


export default  function intialLandingPage() {

        return <div className=" flex flex-col justify-centre items-center">
               <HeroSection/>
               <ProjectCardList></ProjectCardList>
        </div>

}

