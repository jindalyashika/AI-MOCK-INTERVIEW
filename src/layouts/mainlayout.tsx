import Footer from "@/components/footer"
import Header from "@/components/ui/header"
import { Container } from "lucide-react"
import { Outlet } from "react-router-dom"


export const MainLayout = () => {
  return (
    <div className ="flex flex-col h-screen">
        {/*handler to store the user data */}   
        <Header />
        <Container> 
          <main className="flex-grow">
            <Outlet />
          </main>
        </Container>
        

        <Footer />
    </div>
  );
};



