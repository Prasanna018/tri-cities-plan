import React from "react";

import { Routes, Route } from 'react-router-dom'
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Facebook } from "lucide-react";
import About from "./Pages/About";
import Committees from "./Components/Committees";
import Employees from "./Components/Employees";
import ContactUs from "./Components/ContactUs";
import FederalCertification from "./Components/FederalCertification";
import ProgramAndStudies from "./Pages/ProgramAndStudies";
import ComprehensivePlan from "./Components/ComprehensivePlan";
import CorridorPlans from "./Components/CorridorPlans";
import SmallAreaPlans from "./Components/SmallAreaPlans";
import ReginalPlans from "./Components/ReginalPlans";
import Reports from "./Components/Reports";
import Plans from "./Pages/Plans";
import MTP from "./Components/plans/MTP";
import MTIP from "./Components/plans/MTIP";
import CMP from "./Components/plans/CMP";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed navbar */}
      <div className="fixed top-6 left-0 right-0 z-50">
        <div className="md:w-3/4 mx-auto px-4 w-full">
          <NavBar />
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 mt-18 px-4">
        {/* Centered container for main content */}
        <div className=" mx-auto pt-6 text-white">


          <Routes>

            <Route path="/" element={<Home></Home>}></Route>
            {/* about routes */}
            <Route path="/about/" element={<About />}>
              <Route path="committees" element={<Committees />} />
              <Route path="employees" element={<Employees />} />
              <Route path="contact-us" element={<ContactUs></ContactUs>} />




              <Route path="federal-certification" element={<FederalCertification></FederalCertification>}></Route>

            </Route>

            <Route path="/program-studies" element={<ProgramAndStudies></ProgramAndStudies>}>
              <Route path="comprehensive-plans" element={<ComprehensivePlan></ComprehensivePlan>}></Route>
              <Route path="corridor-plans" element={<CorridorPlans></CorridorPlans>}></Route>
              <Route path="small-area-plans" element={<SmallAreaPlans></SmallAreaPlans>}></Route>
              <Route path="regional-plans" element={<ReginalPlans></ReginalPlans>}></Route>
              <Route path="reports" element={<Reports></Reports>}></Route>



            </Route>

            <Route path="/plan" element={<Plans></Plans>}>
              <Route path="metropolitan-transportation-plans" element={<MTP></MTP>}></Route>
              <Route path="metropolitan-transportation-improvement-programs" element={<MTIP></MTIP>}></Route>
              <Route path="congestion-management-process" element={<CMP></CMP>}></Route>


            </Route>


          </Routes>

        </div>


      </main>

      {/* Footer */}
      <footer className="bg-black text-white text-center flex space-y-6 flex-col items-center justify-center py-4 h-[200px]">
        <div className="w-full flex justify-center object-center 
        ">
          <Instagram
            className="transition-transform duration-300 ease-in-out hover:-translate-y-2 m-2"
            size={40}
          />
          <Twitter
            className="transition-transform duration-300 ease-in-out hover:-translate-y-2 m-2"
            size={40}
          />
          <Facebook
            className="transition-transform duration-300 ease-in-out hover:-translate-y-2 m-2"
            size={40}
          />



        </div>
        <div>
          <p>© 2025 Future Coders. All rights reserved.

            499 Canyon Ave. | Suite 300 | Fort Collins, CO 80521</p>
        </div>
      </footer>
    </div>
  );
}

export default App;