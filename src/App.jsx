import React from 'react';
import Header from "./Sections/Header/Header";
import Promo from './Sections/Promo/Promo';
import Section from "./Sections/Section/Section";
import SectionCalculator from "./Sections/Calculator/SectionCalculator";
import Steps from "./Sections/Steps/Steps";
import TestimonialsSection from "./Sections/TestimonialsSection/TestimonialsSection";
import Text from './Sections/Text/Text';
import Advantages from "./Sections/Advantages/Advantages";
import Info from "./Sections/Info/Info";
import Faq from "./Sections/FAQ/FAQ";
import Footer from "./Sections/Footer/Footer";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Promo />
      <Section />
      <SectionCalculator />
      <Steps />
      <TestimonialsSection />
      <Text />
      <Advantages />
      <Info />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
