import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../context/LanguageContext";

const MentionsLegales = () => {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            {language === "fr" ? "Mentions Légales" : "الإشعارات القانونية"}
          </h1>
          <div className="w-20 h-1 bg-secondary mb-8"></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-primary mb-6">
              {language === "fr"
                ? "Informations légales"
                : "المعلومات القانونية"}
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">
                {language === "fr" ? "Association" : "الجمعية"}
              </h3>
              <p className="mb-4">
                {language === "fr"
                  ? "Association pour l'Accompagnement et l'Intégration des Enfants Autistes"
                  : "جمعية تأهيل وإدماج أطفال التوحد"}
              </p>
              <p className="mb-4">
                {language === "fr"
                  ? "Association à but non lucratif"
                  : "جمعية غير ربحية"}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">
                {language === "fr" ? "Siège social" : "المقر الرئيسي"}
              </h3>
              <p className="mb-2">
                {language === "fr"
                  ? "Adresse : Maisons des jeunes, Sidi Kacem, Maroc"
                  : "العنوان: دار الشباب، سيدي قاسم، المغرب"}
              </p>
              <p className="mb-2">
                {language === "fr"
                  ? "Téléphone : +212 661-706665"
                  : "الهاتف: +212 661-706665"}
              </p>
              <p className="mb-2">
                {language === "fr"
                  ? "Email : contact@assooufok.com"
                  : "البريد الإلكتروني: contact@assooufok.com"}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">
                {language === "fr"
                  ? "Direction de la publication"
                  : "إدارة النشر"}
              </h3>
              <p className="mb-4">
                {language === "fr"
                  ? "Directrice de la publication : Malika Alaoui Mdarhri"
                  : "مديرة النشر: مليكة علوي مدرحري"}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">
                {language === "fr" ? "Hébergement du site" : "استضافة الموقع"}
              </h3>
              <p className="mb-4">
                {language === "fr"
                  ? "Le site est hébergé par [Nom de l'hébergeur]"
                  : "يتم استضافة الموقع بواسطة [اسم المستضيف]"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentionsLegales;
