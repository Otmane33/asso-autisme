import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../context/LanguageContext";

const ConditionsUtilisation = () => {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            {language === "fr" ? "Conditions d'Utilisation" : "شروط الاستخدام"}
          </h1>
          <div className="w-20 h-1 bg-secondary mb-8"></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="prose max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-6">
                {language === "fr" ? "Conditions générales" : "الشروط العامة"}
              </h2>
              <p className="mb-4">
                {language === "fr"
                  ? "En accédant à ce site web, vous acceptez de vous conformer à ces conditions d'utilisation et à toutes les lois et réglementations applicables."
                  : "بالدخول إلى هذا الموقع، فإنك توافق على الالتزام بشروط الاستخدام هذه وجميع القوانين واللوائح المعمول بها."}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">
                {language === "fr"
                  ? "Propriété intellectuelle"
                  : "الملكية الفكرية"}
              </h3>
              <p className="mb-4">
                {language === "fr"
                  ? "Le contenu de ce site (textes, images, logos) est la propriété de l'association et est protégé par les lois sur la propriété intellectuelle."
                  : "محتوى هذا الموقع (النصوص والصور والشعارات) ملك للجمعية ومحمي بموجب قوانين الملكية الفكرية."}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">
                {language === "fr"
                  ? "Utilisation du contenu"
                  : "استخدام المحتوى"}
              </h3>
              <p className="mb-4">
                {language === "fr"
                  ? "Vous vous engagez à ne pas :"
                  : "أنت تتعهد بعدم:"}
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>
                  {language === "fr"
                    ? "Reproduire ou modifier le contenu sans autorisation"
                    : "نسخ أو تعديل المحتوى دون إذن"}
                </li>
                <li>
                  {language === "fr"
                    ? "Utiliser le contenu à des fins commerciales"
                    : "استخدام المحتوى لأغراض تجارية"}
                </li>
                <li>
                  {language === "fr"
                    ? "Partager des informations fausses ou trompeuses"
                    : "مشاركة معلومات خاطئة أو مضللة"}
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">
                {language === "fr" ? "Liens externes" : "الروابط الخارجية"}
              </h3>
              <p className="mb-4">
                {language === "fr"
                  ? "Notre site peut contenir des liens vers des sites externes. Nous ne sommes pas responsables du contenu de ces sites."
                  : "قد يحتوي موقعنا على روابط لمواقع خارجية. نحن لسنا مسؤولين عن محتوى هذه المواقع."}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">
                {language === "fr"
                  ? "Modification des conditions"
                  : "تعديل الشروط"}
              </h3>
              <p className="mb-4">
                {language === "fr"
                  ? "Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications prennent effet dès leur publication sur le site."
                  : "نحتفظ بالحق في تعديل هذه الشروط في أي وقت. تصبح التعديلات سارية المفعول فور نشرها على الموقع."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConditionsUtilisation;
