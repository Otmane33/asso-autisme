import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";

const EventGallery2 = () => {
  const { language } = useContext(LanguageContext);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const eventDescription = {
    fr: "Dans le cadre de ses activités de Ramadan pour la saison éducative 2024/2025, l'Association pour la Réhabilitation et l'Intégration des Enfants Autistes a organisé une visite à la maison de retraite de Sidi Qacem. Cette visite a eu lieu le matin du mercredi 11 Ramadan et a duré 45 minutes. Durant celle-ci, les enfants ont présenté des animations et offert des produits de première nécessité et alimentaires répondant aux besoins quotidiens des personnes âgées. Ces moments furent empreints d'émotion, les enfants exprimant leur reconnaissance et une sympathie évidente envers cette frange de la société, atteignant ainsi l'objectif visé par cette initiative.",
    ar: "في إطار انشطتها الرمضانيه برسم الموسم التربوي 2024/2025 نظمت جمعية تأهيل وإدماج أطفال التوحد زيارة تفقدية لدار المسنين بسيدي قاسم صباح الاربعاء 11 رمضان دامت 45 دقيقة ؛ حيث قدم الاطفال خلالها فقرات تنشيطية و عينات من المواد الاساسية والغذائية التي تغطي الحاجيات اليومية للشخص المسن وقد كانت لحظات مؤثرة عبر الاطفال من خلالها عن تقديرهم و تعاطفهم الملحوظ مع هذه الشريحة من المجتمع مما تحقق معه الهدف المتوخى من الزبارة",
  };

  // Générer le tableau d'images
  const images = [];
  for (let i = 1; i <= 41; i++) {
    const imageNumber = i.toString().padStart(2, "0");
    images.push(`/images/ASSO EVENT 2/event2image${imageNumber}.webp`);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Title */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
            {language === "fr"
              ? "Visite des Enfants Autistes à la Maison de Retraite de Sidi Qacem"
              : "زيارة أطفال التوحد لدار المسنين بسيدي قاسم"}
          </h1>
          <p className="text-lg text-center">
            {language === "fr" ? "12 mars 2025" : "12 مارس 2025"}
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
            <p
              className="text-lg leading-relaxed text-gray-700"
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {language === "fr" ? eventDescription.fr : eventDescription.ar}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal pour l'image agrandie */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full mx-4">
            <img
              src={selectedImage}
              alt="Image agrandie"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EventGallery2;
