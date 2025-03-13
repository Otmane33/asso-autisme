import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../context/LanguageContext";

const PolitiqueConfidentialite = () => {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            {language === "fr"
              ? "Politique de Confidentialité"
              : "سياسة الخصوصية"}
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
                {language === "fr"
                  ? "Protection de vos données"
                  : "حماية بياناتك"}
              </h2>
              <p className="mb-4">
                {language === "fr"
                  ? "L'Association pour l'Accompagnement et l'Intégration des Enfants Autistes s'engage à protéger la confidentialité de vos données personnelles."
                  : "تلتزم جمعية تأهيل وإدماج أطفال التوحد بحماية خصوصية بياناتك الشخصية."}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">
                {language === "fr" ? "Collecte des données" : "جمع البيانات"}
              </h3>
              <p className="mb-4">
                {language === "fr"
                  ? "Nous collectons uniquement les données nécessaires pour :"
                  : "نحن نجمع فقط البيانات اللازمة من أجل:"}
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>
                  {language === "fr"
                    ? "Répondre à vos demandes d'information"
                    : "الرد على طلبات المعلومات الخاصة بك"}
                </li>
                <li>
                  {language === "fr"
                    ? "Gérer votre adhésion à l'association"
                    : "إدارة عضويتك في الجمعية"}
                </li>
                <li>
                  {language === "fr"
                    ? "Vous tenir informé de nos activités"
                    : "إبقائك على اطلاع بأنشطتنا"}
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">
                {language === "fr"
                  ? "Utilisation des données"
                  : "استخدام البيانات"}
              </h3>
              <p className="mb-4">
                {language === "fr"
                  ? "Vos données sont utilisées exclusivement dans le cadre des activités de l'association et ne sont jamais partagées avec des tiers sans votre consentement."
                  : "يتم استخدام بياناتك حصريًا في إطار أنشطة الجمعية ولا يتم مشاركتها مطلقًا مع أطراف ثالثة دون موافقتك."}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">
                {language === "fr" ? "Vos droits" : "حقوقك"}
              </h3>
              <p className="mb-4">
                {language === "fr"
                  ? "Vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles."
                  : "لديك الحق في الوصول إلى بياناتك الشخصية وتصحيحها وحذفها."}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">
                {language === "fr" ? "Nous contacter" : "اتصل بنا"}
              </h3>
              <p className="mb-4">
                {language === "fr"
                  ? "Pour toute question concernant vos données personnelles, contactez-nous à [email]"
                  : "لأي استفسار بخصوص بياناتك الشخصية، اتصل بنا على [البريد الإلكتروني]"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PolitiqueConfidentialite;
