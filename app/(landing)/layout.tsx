import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";



const LandingLayout = ({
    children
}: { 
    children: React.ReactNode;
}) => {
    return (  
<main className="h-full overflow-none">
    <Hero />
<div className="mx-auto max-w-screen-xl h-full w-full">


{children}
</div>

</main>
    );
}
 
export default LandingLayout;