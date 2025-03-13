import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../context/LanguageContext";

const GetInvolvedPage = () => {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);

  // Ways to contribute data
  const contributionWays = [
    {
      id: 1,
      titleFr: "Dons",
      titleAr: "التبرعات",
      items: [
        {
          titleFr: "Dons financiers",
          titleAr: "تبرع مالي",
          descriptionFr:
            "Soutenez nos projets via des paiements en ligne sécurisés ou des virements bancaires.",
          descriptionAr:
            "يمكنكم التبرع عبر وسائل دفع إلكترونية أو التحويل البنكي لدعم برامج التأهيل والقوافل الطبية.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          ),
        },
        {
          titleFr: "Dons en nature",
          titleAr: "تبرع عيني",
          descriptionFr:
            "Matériel éducatif, livres, jeux pédagogiques ou fournitures médicales.",
          descriptionAr:
            "نقبل تبرعات عينية مثل الأجهزة التعليمية، الكتب، الألعاب التربوية، والمستلزمات الطبية.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          ),
        },
      ],
    },
    {
      id: 2,
      titleFr: "Sponsoring",
      titleAr: "الرعاية (السّبونسورينغ)",
      items: [
        {
          titleFr: "Parrainage d'activités",
          titleAr: "رعاية الأنشطة",
          descriptionFr:
            "Entreprises et institutions peuvent sponsoriser des événements spécifiques ou des campagnes de sensibilisation.",
          descriptionAr: "يمكن للمؤسسات والشركات دعم نشاط معين أو حملة توعوية.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          ),
        },
        {
          titleFr: "Partenariats à long terme",
          titleAr: "شراكات طويلة المدى",
          descriptionFr:
            "Établissement de collaborations pour un soutien continu.",
          descriptionAr:
            "عقد شراكات إستراتيجية لتغطية احتياجات الجمعية بشكل مستمر.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
              />
            </svg>
          ),
        },
      ],
    },
    {
      id: 3,
      titleFr: "Bénévolat",
      titleAr: "التطوع",
      items: [
        {
          titleFr: "Engagement sur le terrain",
          titleAr: "التطوع الميداني",
          descriptionFr: "Aidez lors de nos caravanes et activités éducatives.",
          descriptionAr:
            "شاركوا في تنظيم القوافل الطبية والأنشطة الترفيهية والتربوية للأطفال.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          ),
        },
        {
          titleFr: "Support administratif",
          titleAr: "التطوع الإداري",
          descriptionFr:
            "Apportez votre expertise en comptabilité, marketing digital, design, etc.",
          descriptionAr:
            "ساهموا بخبراتكم في مجالات المحاسبة، التسويق الرقمي، التصميم وغيرها من المجالات الإدارية.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                {language === "fr" ? "Comment Participer" : "كيف تساهم؟"}
              </h1>
              <div className="w-20 h-1 bg-secondary mb-8"></div>
              <p className="text-lg max-w-3xl">
                {language === "fr"
                  ? "Découvrez les différentes façons de contribuer à notre cause et de soutenir les enfants autistes et leurs familles."
                  : "اكتشف الطرق المختلفة للمساهمة في قضيتنا ودعم الأطفال ذوي التوحد وعائلاتهم."}
              </p>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0">
              <img
                src="/images/Logo.webp"
                alt="Logo Association"
                className="h-44 w-44 mx-auto bg-white p-3 rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Contribute Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
              {language === "fr"
                ? "Contribuez à notre cause"
                : "ساهم في قضيتنا"}
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              {language === "fr"
                ? "Choisissez la méthode qui vous convient le mieux pour soutenir notre mission auprès des enfants autistes."
                : "اختر الطريقة التي تناسبك للمساهمة في دعم رسالتنا تجاه الأطفال ذوي التوحد."}
            </p>

            <div className="space-y-20">
              {contributionWays.map((way) => (
                <div
                  key={way.id}
                  className="transition-all duration-300 bg-white rounded-xl p-6 hover:shadow-xl"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-8 flex items-center bg-primary/5 p-4 rounded-lg shadow-sm">
                    <span className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-md transform transition-transform hover:scale-110 hover:rotate-3">
                      {way.id}
                    </span>
                    <span className="border-l-4 border-secondary pl-4">
                      {language === "fr" ? way.titleFr : way.titleAr}
                    </span>
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {way.items.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-100 hover:border-secondary hover:bg-primary/5 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 group"
                      >
                        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                          <div className="mb-4 sm:mb-0 sm:mr-6 bg-primary/10 p-4 rounded-full flex-shrink-0 flex items-center justify-center transition-colors group-hover:bg-secondary/20 w-16 h-16">
                            <div className="text-primary group-hover:text-secondary transition-all duration-300 group-hover:scale-110">
                              {item.icon}
                            </div>
                          </div>
                          <div className="sm:pt-2">
                            <h4 className="text-lg font-bold text-primary mb-3 transition-colors group-hover:text-secondary">
                              {language === "fr" ? item.titleFr : item.titleAr}
                            </h4>
                            <p className="text-gray-700 leading-relaxed">
                              {language === "fr"
                                ? item.descriptionFr
                                : item.descriptionAr}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
              {language === "fr" ? "Faire un don" : "تبرع الآن"}
            </h2>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">
                  {language === "fr"
                    ? "Informations bancaires"
                    : "المعلومات البنكية"}
                </h3>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">
                      {language === "fr" ? "Nom du compte :" : "اسم الحساب :"}
                    </span>{" "}
                    Association pour l'Accompagnement et l'Intégration des
                    Enfants Autistes
                  </p>
                  <p>
                    <span className="font-medium">
                      {language === "fr" ? "Banque :" : "البنك :"}
                    </span>{" "}
                    ---
                  </p>
                  <p>
                    <span className="font-medium">
                      {language === "fr" ? "IBAN :" : "رقم الحساب الدولي :"}
                    </span>{" "}
                    ---
                  </p>
                  <p>
                    <span className="font-medium">
                      {language === "fr" ? "SWIFT/BIC :" : "رمز السويفت :"}
                    </span>{" "}
                    ---
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">
                  {language === "fr" ? "Don en ligne" : "التبرع عبر الإنترنت"}
                </h3>
                <p className="mb-4">
                  {language === "fr"
                    ? "Vous pouvez également faire un don sécurisé en ligne via notre plateforme de paiement."
                    : "يمكنك أيضًا التبرع بشكل آمن عبر الإنترنت من خلال منصة الدفع الخاصة بنا."}
                </p>
                <button className="bg-secondary text-primary font-bold px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors">
                  {language === "fr" ? "Faire un don maintenant" : "تبرع الآن"}
                </button>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  {language === "fr" ? "Reçu fiscal" : "إيصال ضريبي"}
                </h3>
                <p>
                  {language === "fr"
                    ? "Un reçu fiscal vous sera délivré pour tout don effectué, vous permettant de bénéficier d'une réduction d'impôt conformément à la législation en vigueur."
                    : "سيتم إصدار إيصال ضريبي لكل تبرع، مما يتيح لك الاستفادة من خصم ضريبي وفقًا للتشريعات المعمول بها."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Form Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
              {language === "fr" ? "Devenir bénévole" : "كن متطوعًا"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="/images/Gallery image 7.webp"
                  alt="Bénévoles"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <p className="mb-8 text-center">
                  {language === "fr"
                    ? "Remplissez ce formulaire pour rejoindre notre équipe de bénévoles. Nous vous contacterons rapidement pour discuter des opportunités d'engagement."
                    : "املأ هذا النموذج للانضمام إلى فريق المتطوعين لدينا. سنتصل بك قريبًا لمناقشة فرص المشاركة."}
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-primary font-medium mb-2">
                        {language === "fr" ? "Nom complet" : "الاسم الكامل"}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder-white placeholder-opacity-100 bg-primary bg-opacity-10 text-primary"
                        placeholder={language === "fr" ? "Votre nom" : "اسمك"}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-primary font-medium mb-2">
                        {language === "fr"
                          ? "Adresse e-mail"
                          : "البريد الإلكتروني"}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder-white placeholder-opacity-100 bg-primary bg-opacity-10 text-primary"
                        placeholder={
                          language === "fr"
                            ? "Votre adresse e-mail"
                            : "بريدك الإلكتروني"
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-primary font-medium mb-2">
                        {language === "fr" ? "Téléphone" : "رقم الهاتف"}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder-white placeholder-opacity-100 bg-primary bg-opacity-10 text-primary"
                        placeholder={
                          language === "fr"
                            ? "Votre numéro de téléphone"
                            : "رقم هاتفك"
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-primary font-medium mb-2">
                        {language === "fr"
                          ? "Domaine d'expertise"
                          : "مجال الخبرة"}
                      </label>
                      <select className="w-full px-4 py-2 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-primary bg-opacity-10 text-primary">
                        <option>
                          {language === "fr"
                            ? "Sélectionnez une option"
                            : "اختر خيارًا"}
                        </option>
                        <option>
                          {language === "fr"
                            ? "Médical / Paramédical"
                            : "طبي / شبه طبي"}
                        </option>
                        <option>
                          {language === "fr"
                            ? "Éducation / Pédagogie"
                            : "تعليم / تربية"}
                        </option>
                        <option>
                          {language === "fr"
                            ? "Communication / Marketing"
                            : "اتصال / تسويق"}
                        </option>
                        <option>
                          {language === "fr"
                            ? "Administration / Finance"
                            : "إدارة / مالية"}
                        </option>
                        <option>{language === "fr" ? "Autre" : "آخر"}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-primary font-medium mb-2">
                      {language === "fr" ? "Message" : "الرسالة"}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary h-32 placeholder-white placeholder-opacity-100 bg-primary bg-opacity-10 text-primary"
                      placeholder={
                        language === "fr" ? "Votre message" : "رسالتك"
                      }
                      required
                    ></textarea>
                  </div>

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-primary text-white font-bold px-8 py-3 rounded-md hover:bg-secondary hover:text-primary transition-colors"
                    >
                      {language === "fr"
                        ? "Envoyer ma candidature"
                        : "إرسال طلبي"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolvedPage;
