import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, ChevronDown } from "lucide-react";

const translations = {
  en: {
    home: "Home",
    about: "About Us",
    login: "Log In",
    features: "Features",
    title: "The Future of Sports Career Management",
    subtitle: "Connecting Players, Agents, and Clubs in One Place.",
    cta: "Join Now",
    featureList: [
      "Create a Professional Profile",
      "Connect with Agents and Clubs",
      "Track Career Opportunities",
      "Manage Your Career in One Place"
    ],
    testimonials: "What Our Users Say",
    faq: "Frequently Asked Questions",
    changeLang: "Change Language"
  },
  he: {
    home: "בית",
    about: "אודות",
    login: "התחברות",
    features: "תכונות",
    title: "העתיד של ניהול קריירת ספורט",
    subtitle: "מחבר בין שחקנים, סוכנים ומועדונים במקום אחד.",
    cta: "הצטרפו עכשיו",
    featureList: [
      "צרו פרופיל מקצועי",
      "התחברו עם סוכנים ומועדונים",
      "עקבו אחר הזדמנויות קריירה",
      "נהלו את הקריירה שלכם במקום אחד"
    ],
    testimonials: "מה המשתמשים שלנו אומרים",
    faq: "שאלות נפוצות",
    changeLang: "שנה שפה"
  },
  es: {
    home: "Inicio",
    about: "Sobre Nosotros",
    login: "Iniciar Sesión",
    features: "Características",
    title: "El Futuro de la Gestión de Carreras Deportivas",
    subtitle: "Conectando Jugadores, Agentes y Clubes en un Solo Lugar.",
    cta: "Únete Ahora",
    featureList: [
      "Crea un Perfil Profesional",
      "Conéctate con Agentes y Clubes",
      "Sigue las Oportunidades de Carrera",
      "Gestiona tu Carrera en un Solo Lugar"
    ],
    testimonials: "Lo Que Dicen Nuestros Usuarios",
    faq: "Preguntas Frecuentes",
    changeLang: "Cambiar Idioma"
  }
};

export default function LandingPage() {
  const [language, setLanguage] = useState("en");
  const t = translations[language];

  return (
    <div className="relative min-h-screen text-center text-white">
      {/* Video Background */}
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
        <source src="https://drive.google.com/uc?export=download&id=YOUR_FILE_ID" type="video/mp4" />
      </video>
      
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center p-4 bg-white text-black rounded-xl shadow-md relative z-10">
        <div className="flex space-x-6">
          <Button variant="ghost">{t.home}</Button>
          <Button variant="ghost">{t.about}</Button>
          <Button variant="ghost">{t.features}</Button>
        </div>
        <Button variant="outline" className="bg-yellow-400 text-black rounded-lg">{t.login}</Button>
      </nav>

      {/* Language Selector */}
      <div className="absolute top-4 right-4 z-10">
        <Button className="bg-white text-black" onClick={() => setLanguage(language === "en" ? "he" : language === "he" ? "es" : "en")}>
          <Globe className="mr-2" /> {t.changeLang} <ChevronDown className="ml-2" />
        </Button>
      </div>

      {/* Hero Section */}
      <div className="mt-16 relative z-10">
        <h1 className="text-5xl font-bold drop-shadow-lg">{t.title}</h1>
        <p className="text-2xl mt-2 drop-shadow-md">{t.subtitle}</p>
        <Button className="mt-6 px-8 py-4 text-lg bg-yellow-400 text-black rounded-xl shadow-xl hover:bg-yellow-300">{t.cta}</Button>
      </div>

      {/* Features Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {t.featureList.map((feature, index) => (
          <Card key={index} className="p-6 bg-white text-black shadow-lg rounded-xl">
            <CardContent className="text-lg font-semibold">{feature}</CardContent>
          </Card>
        ))}
      </div>

      {/* Testimonials Section */}
      <div className="mt-16 relative z-10">
        <h2 className="text-3xl font-semibold drop-shadow-lg">{t.testimonials}</h2>
        <p className="text-white text-lg mt-4">Coming soon...</p>
      </div>

      {/* FAQ Section */}
      <div className="mt-16 pb-12 relative z-10">
        <h2 className="text-3xl font-semibold drop-shadow-lg">{t.faq}</h2>
        <p className="text-white text-lg mt-4">Coming soon...</p>
      </div>
    </div>
  );
}
