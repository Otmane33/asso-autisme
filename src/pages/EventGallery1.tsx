import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";

const EventGallery1 = () => {
  const { language } = useContext(LanguageContext);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const eventDescription = {
    fr: "Dans le cadre de ses initiatives de santé communautaire, l'Association pour la Réhabilitation et l'Intégration des Enfants Autistes a organisé une caravane médicale à Jarf El Malha. Cette action a permis d'examiner 120 enfants dont plusieurs présentant des troubles du spectre autistique, de distribuer 45 paires de lunettes aux enfants nécessitant une correction visuelle, et d'offrir des conseils personnalisés à 30 familles concernant le suivi et l'accompagnement de leurs enfants. Une équipe de professionnels de santé, comprenant des pédiatres, des ophtalmologistes et des psychologues, a participé bénévolement à cette initiative qui s'inscrit dans notre mission d'améliorer l'accès aux soins de santé pour les enfants autistes dans les zones rurales.",
    ar: "في إطار مبادراتها للصحة المجتمعية، نظمت جمعية تأهيل وإدماج أطفال التوحد قافلة طبية في جرف الملحة. مكنت هذه المبادرة من فحص 120 طفلاً، العديد منهم يعانون من اضطرابات طيف التوحد، وتوزيع 45 زوجًا من النظارات للأطفال الذين يحتاجون إلى تصحيح الرؤية، وتقديم المشورة المخصصة لـ 30 أسرة فيما يتعلق بمتابعة أطفالهم ودعمهم. شارك فريق من المتخصصين الصحيين، بما في ذلك أطباء الأطفال وأخصائيي العيون وعلماء النفس، طوعًا في هذه المبادرة التي تتماشى مع مهمتنا المتمثلة في تحسين وصول الأطفال المصابين بالتوحد إلى الرعاية الصحية في المناطق الريفية.",
  };

  // Générer le tableau d'images
  const images = [];
  for (let i = 1; i <= 28; i++) {
    images.push(`/images/ASSO EVENT 1/Gallery image ${i}.webp`);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Title */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
            {language === "fr"
              ? "Caravane médicale à Jarf El Malha"
              : "القافلة الطبية في جرف الملحة"}
          </h1>
          <p className="text-lg text-center">
            {language === "fr" ? "17 février 2025" : "17 فبراير 2025"}
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

export default EventGallery1;
