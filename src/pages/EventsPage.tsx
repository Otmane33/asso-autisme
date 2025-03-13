import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";

const EventsPage = () => {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  // Past events data
  const pastEvents = [
    {
      id: 1,
      titleFr: "Caravane médicale à Jarf El Malha",
      titleAr: "القافلة الطبية في جرف الملحة",
      dateFr: "17 février 2025",
      dateAr: "17 فبراير 2025",
      descriptionFr:
        "Bilan des actions réalisées : 120 enfants examinés, 45 paires de lunettes distribuées, 30 familles conseillées.",
      descriptionAr:
        "حصيلة الإجراءات المنفذة: فحص 120 طفلاً، توزيع 45 زوجًا من النظارات، تقديم المشورة لـ 30 أسرة.",
      image: "/images/ASSO EVENT 1/Gallery image 1.webp",
      hasGallery: true,
      galleryPath: "/event-gallery-1",
    },
    {
      id: 2,
      titleFr:
        "Visite des Enfants Autistes à la Maison de Retraite de Sidi Qacem",
      titleAr: "زيارة أطفال التوحد لدار المسنين بسيدي قاسم",
      dateFr: "12 mars 2025",
      dateAr: "12 مارس 2025",
      descriptionFr:
        "Une visite touchante où nos enfants ont partagé des moments précieux avec les résidents de la maison de retraite, offrant des animations et des produits de première nécessité.",
      descriptionAr:
        "زيارة مؤثرة شارك فيها أطفالنا لحظات ثمينة مع المقيمين في دار المسنين، قدموا خلالها عروضاً ترفيهية ومواد أساسية.",
      image: "/images/ASSO EVENT 2/event2image01.webp",
      hasGallery: true,
      galleryPath: "/event-gallery-2",
    },
  ];

  // Upcoming events data
  const upcomingEvents = [
    {
      id: 1,
      titleFr: "Journée mondiale de sensibilisation à l'autisme",
      titleAr: "اليوم العالمي للتوعية بالتوحد",
      dateFr: "2 avril 2025",
      dateAr: "2 أبريل 2025",
      locationFr:
        "Diverses locations à Sidi Kacem, Sidi Slimane et Jarf El Malha",
      locationAr: "مواقع متعددة في سيدي قاسم، سيدي سليمان وجرف الملحة",
      descriptionFr:
        "Une journée de sensibilisation avec des ateliers, des conférences et des activités pour les enfants autistes et leurs familles. Des experts partageront leurs connaissances pour mieux comprendre et soutenir les personnes atteintes d'autisme.",
      descriptionAr:
        "يوم توعوي مع ورش عمل ومؤتمرات وأنشطة للأطفال المصابين بالتوحد وعائلاتهم. سيشارك الخبراء معارفهم لفهم ودعم الأشخاص المصابين بالتوحد بشكل أفضل.",
      image: "/images/Gallery image 4.webp",
    },
    {
      id: 2,
      titleFr: "Caravane de dépistage visuel",
      titleAr: "قافلة طبية لفحص النظر",
      dateFr: "17 mai 2025",
      dateAr: "17 مايو 2025",
      locationFr: "Centre culturel, Sidi Kacem",
      locationAr: "المركز الثقافي، سيدي قاسم",
      descriptionFr:
        "Dépistage gratuit des troubles visuels pour les enfants autistes. Consultations et distribution de lunettes pour les cas nécessitant une correction.",
      descriptionAr:
        "فحص مجاني لمشاكل النظر للأطفال ذوي التوحد. استشارات وتوزيع نظارات للحالات التي تتطلب تصحيحًا.",
      image: "/images/Gallery image 1.webp",
    },
    {
      id: 3,
      titleFr: "Atelier de formation pour parents",
      titleAr: "ورشة تدريبية لأولياء الأمور",
      dateFr: "22 avril 2025",
      dateAr: "22 أبريل 2025",
      locationFr: "Siège de l'association, Sidi Slimane",
      locationAr: "مقر الجمعية، سيدي سليمان",
      descriptionFr:
        "Stratégies de communication et d'accompagnement pour les parents d'enfants autistes. Techniques pratiques pour gérer les comportements difficiles.",
      descriptionAr:
        "استراتيجيات التواصل والمرافقة لآباء الأطفال ذوي التوحد. تقنيات عملية للتعامل مع السلوكيات الصعبة.",
      image: "/images/Gallery image 2.webp",
    },
  ];

  // News data
  const news = [
    {
      id: 1,
      titleFr: "Lancement de nouvelles sessions de soutien psychologique",
      titleAr: "إطلاق جلسات جديدة للدعم النفسي",
      dateFr: "5 mai 2023",
      dateAr: "5 مايو 2023",
      descriptionFr:
        "Notre association lance un nouveau programme de soutien psychologique pour les familles d'enfants autistes.",
      descriptionAr:
        "تطلق جمعيتنا برنامجًا جديدًا للدعم النفسي لعائلات الأطفال ذوي التوحد.",
      image: "/images/Gallery image 5.webp",
    },
    {
      id: 2,
      titleFr: "Nouveaux partenariats avec des institutions éducatives",
      titleAr: "شراكات جديدة مع مؤسسات تعليمية",
      dateFr: "20 avril 2023",
      dateAr: "20 أبريل 2023",
      descriptionFr:
        "Signature de conventions avec plusieurs écoles pour le développement de projets innovants d'inclusion scolaire.",
      descriptionAr:
        "توقيع اتفاقيات مع عدة مدارس لتطوير مشاريع مبتكرة للإدماج المدرسي.",
      image: "/images/Gallery image 6.webp",
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
                {language === "fr"
                  ? "Événements & Actualités"
                  : "الفعاليات والأخبار"}
              </h1>
              <div className="w-20 h-1 bg-secondary mb-8"></div>
              <p className="text-lg max-w-3xl">
                {language === "fr"
                  ? "Restez informés de nos activités, événements à venir et dernières actualités."
                  : "ابق على اطلاع بأنشطتنا وفعالياتنا القادمة وآخر الأخبار."}
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

      {/* Past Events Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-white">
        <div className="container-custom">
          <h2 className="section-title text-center mx-auto animate-slideUp">
            {language === "fr" ? "Événements passés" : "الفعاليات السابقة"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className={`bg-white rounded-xl overflow-hidden shadow-md card-hover animate-fadeIn flex flex-col md:flex-row ${
                  event.hasGallery ? "cursor-pointer" : ""
                }`}
                onClick={() => event.hasGallery && navigate(event.galleryPath)}
              >
                <div className="md:w-2/5 overflow-hidden">
                  <img
                    src={event.image}
                    alt={language === "fr" ? event.titleFr : event.titleAr}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 md:w-3/5">
                  <div className="mb-2 text-sm font-medium text-secondary">
                    {language === "fr" ? event.dateFr : event.dateAr}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">
                    {language === "fr" ? event.titleFr : event.titleAr}
                  </h3>
                  <p className="text-primary opacity-80">
                    {language === "fr"
                      ? event.descriptionFr
                      : event.descriptionAr}
                  </p>
                  {event.hasGallery && (
                    <div className="mt-4">
                      <span className="text-secondary hover:text-secondary/80 font-medium">
                        {language === "fr"
                          ? "Voir la galerie →"
                          : "عرض المعرض →"}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <h2 className="section-title text-center mx-auto animate-slideUp">
            {language === "fr" ? "Événements à venir" : "الفعاليات القادمة"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="card card-hover animate-fadeIn">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-primary text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      {event.id}
                    </span>
                    <div>
                      <h3 className="font-bold text-primary">
                        {language === "fr" ? event.titleFr : event.titleAr}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {language === "fr" ? event.dateFr : event.dateAr}
                      </p>
                    </div>
                  </div>
                  <p className="mb-4 text-gray-700">
                    <strong className="text-primary">
                      {language === "fr" ? event.locationFr : event.locationAr}
                    </strong>
                  </p>
                  <p className="text-gray-600">
                    {language === "fr"
                      ? event.descriptionFr
                      : event.descriptionAr}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container-custom">
          <h2 className="section-title text-center mx-auto animate-slideUp">
            {language === "fr" ? "Dernières actualités" : "آخر الأخبار"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {news.map((item) => (
              <div
                key={item.id}
                className="card card-hover animate-fadeIn flex flex-col h-full"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={language === "fr" ? item.titleFr : item.titleAr}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <div className="inline-block px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-3">
                    {language === "fr" ? item.dateFr : item.dateAr}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">
                    {language === "fr" ? item.titleFr : item.titleAr}
                  </h3>
                  <p className="text-primary opacity-80">
                    {language === "fr"
                      ? item.descriptionFr
                      : item.descriptionAr}
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <button className="bg-primary text-white font-medium py-2 px-4 rounded-md hover:bg-opacity-80 transition-colors">
                    {language === "fr" ? "Lire la suite" : "اقرأ المزيد"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-secondary to-secondary/90 text-primary">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 animate-fadeIn">
              {language === "fr" ? "Restez informés" : "ابق على اطلاع"}
            </h2>
            <p className="text-lg mb-8 opacity-90">
              {language === "fr"
                ? "Inscrivez-vous à notre newsletter pour recevoir nos actualités et les dates de nos prochains événements."
                : "اشترك في نشرتنا الإخبارية لتلقي آخر الأخبار ومواعيد فعالياتنا القادمة."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder={
                  language === "fr"
                    ? "Votre adresse e-mail"
                    : "بريدك الإلكتروني"
                }
                className="input-field bg-white/90 text-primary placeholder-primary/70 flex-grow max-w-md"
              />
              <button className="bg-primary text-white font-bold px-6 py-3 rounded-md hover:bg-opacity-80 transition-colors shadow-lg">
                {language === "fr" ? "S'inscrire" : "اشتراك"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
