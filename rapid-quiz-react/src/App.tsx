import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero/Hero";
import Features from "./components/sections/Features";
import Quiz from "./components/sections/Quiz/Quiz";
import Testimonials from "./components/sections/Testimonials";
import Pricing from "./components/sections/Pricing";
import FAQ from "./components/sections/FAQ";

function App() {
  return (
    <Layout>
      <main>
        <Hero />
        <Quiz />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
    </Layout>
  )
}

export default App
