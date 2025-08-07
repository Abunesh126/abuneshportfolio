import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <section id="skills" className="h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <h1 className="text-4xl font-bold">Skills Section</h1>
      </section>
      <section id="projects" className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        <h1 className="text-4xl font-bold">Projects Section</h1>
      </section>
      <section id="contact" className="h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <h1 className="text-4xl font-bold">Contact Section</h1>
      </section>
    </>
  );
};

export default App;
