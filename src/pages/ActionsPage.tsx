import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../context/LanguageContext";

const ActionsPage = () => {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);

  // Array of actions/projects
  const actions = [
    {
      id: 1,
      titleFr: "Caravanes Médicales et Éducatives",
      titleAr: "القوافل الطبية والتربوية",
      descriptionFr:
        "Organisation de caravanes en partenariat avec des professionnels de santé pour des dépistages et des consultations, ainsi que des ateliers de formation pour les familles.",
      descriptionAr:
        "ننظم قوافل طبية بالشراكة مع أطباء مختصين لتشخيص مشاكل النظر والسمع وغير ذلك من الفحوصات الضرورية للأطفال. كما نقدم ورشات تدريبية للأسَر حول كيفية التعامل مع الأطفال ذوي التوحد وتطوير مهاراتهم.",
      image: "/images/Gallery image 25.webp",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-primary"
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
      id: 2,
      titleFr: "Formation et Développement des Compétences",
      titleAr: "التكوين وتطوير المهارات",
      descriptionFr:
        "Organisation de sessions de formation spécialisées pour les professionnels, les familles et les intervenants dans le domaine de l'autisme. Nos formations couvrent les approches éducatives modernes, les techniques de communication et les stratégies d'intervention adaptées.",
      descriptionAr:
        "تنظيم دورات تدريبية متخصصة للمهنيين والأسر والعاملين في مجال التوحد. تغطي دوراتنا التدريبية الأساليب التربوية الحديثة وتقنيات التواصل واستراتيجيات التدخل المناسبة.",
      image: "/images/Gallery image 26.webp",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      id: 3,
      titleFr: "Campagnes de Sensibilisation",
      titleAr: "حملات التوعية",
      descriptionFr:
        "Actions de communication et d'information via les médias et réseaux sociaux pour démystifier l'autisme et promouvoir une meilleure compréhension.",
      descriptionAr:
        "نقوم بحملات توعوية عبر وسائل الإعلام ووسائل التواصل الاجتماعي، ونعقد ندوات ومحاضرات للتعريف بالتوحد وتصحيح المفاهيم الخاطئة، مع التركيز على دور الأسرة والمجتمع في الدعم.",
      image: "/images/Gallery image 27.webp",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      titleFr: "Soutien aux Familles",
      titleAr: "دعم الأمهات والآباء",
      descriptionFr:
        "Ateliers et séances de conseil pour accompagner les parents dans les défis quotidiens liés à l'autisme.",
      descriptionAr:
        "نوفر استشارات أسرية ودورات تكوينية لمساعدة الآباء والأمهات على مواجهة التحديات اليومية وتحسين جودة حياة الأطفال ذوي التوحد.",
      image: "/images/Gallery image 28.webp",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
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
                {language === "fr" ? "Actions & Projets" : "أنشطتنا ومشاريعنا"}
              </h1>
              <div className="w-20 h-1 bg-secondary mb-8"></div>
              <p className="text-lg max-w-3xl">
                {language === "fr"
                  ? "Découvrez nos activités et projets visant à améliorer la vie des enfants autistes et de leurs familles."
                  : "تعرف على أنشطتنا ومشاريعنا الهادفة إلى تحسين حياة الأطفال ذوي التوحد وعائلاتهم."}
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

      {/* Actions & Projects Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="space-y-24">
            {actions.map((action, index) => (
              <div
                key={action.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-16 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={action.image}
                      alt={language === "fr" ? action.titleFr : action.titleAr}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="mb-6">{action.icon}</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    {language === "fr" ? action.titleFr : action.titleAr}
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    {language === "fr"
                      ? action.descriptionFr
                      : action.descriptionAr}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-12 text-center">
            {language === "fr" ? "Notre Impact" : "تأثيرنا"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Impact Stat 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:border-secondary transition-colors">
              <div className="text-4xl font-bold text-primary mb-2">300+</div>
              <p className="text-lg">
                {language === "fr"
                  ? "Personnes touchées"
                  : "شخص تم الوصول إليهم"}
              </p>
            </div>

            {/* Impact Stat 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:border-secondary transition-colors">
              <div className="text-4xl font-bold text-primary mb-2">3+</div>
              <p className="text-lg">
                {language === "fr"
                  ? "Caravanes médicales organisées"
                  : "قافلة طبية تم تنظيمها"}
              </p>
            </div>

            {/* Impact Stat 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:border-secondary transition-colors">
              <div className="text-4xl font-bold text-primary mb-2">300+</div>
              <p className="text-lg">
                {language === "fr" ? "Familles soutenues" : "عائلة تم دعمها"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary text-primary">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            {language === "fr"
              ? "Vous souhaitez contribuer à nos projets ?"
              : "هل ترغب في المساهمة في مشاريعنا؟"}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            {language === "fr"
              ? "Rejoignez-nous en tant que bénévole ou soutenez nos actions par un don."
              : "انضم إلينا كمتطوع أو ادعم أنشطتنا من خلال التبرع."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/get-involved"
              className="btn bg-primary text-white font-bold px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors"
            >
              {language === "fr" ? "Comment participer" : "كيف تساهم"}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActionsPage;
