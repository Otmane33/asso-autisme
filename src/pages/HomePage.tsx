import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../context/LanguageContext";
import ImageCarousel from "../components/ImageCarousel";
import HorizontalImageGallery from "../components/HorizontalImageGallery";
import DirectorMessage from "../components/DirectorMessage";
import ImageModal from "../components/ImageModal";

const HomePage = () => {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    // Fermeture automatique après 10 secondes
    setTimeout(() => {
      setSelectedImage(null);
    }, 10000);
  };

  // Images pour le carousel
  const carouselImages = [
    "/images/Gallery image 1.webp",
    "/images/Gallery image 2.webp",
    "/images/Gallery image 3.webp",
    "/images/Gallery image 4.webp",
    "/images/Gallery image 5.webp",
  ];

  // Images pour les galeries horizontales
  const galleryImages1 = [
    "/images/Gallery image 6.webp",
    "/images/Gallery image 7.webp",
    "/images/Gallery image 8.webp",
    "/images/Gallery image 9.webp",
    "/images/Gallery image 10.webp",
    "/images/Gallery image 11.webp",
    "/images/Gallery image 12.webp",
    "/images/Gallery image 13.webp",
    "/images/Gallery image 14.webp",
    "/images/Gallery image 15.webp",
  ];

  const galleryImages2 = [
    "/images/Gallery image 16.webp",
    "/images/Gallery image 17.webp",
    "/images/Gallery image 18.webp",
    "/images/Gallery image 19.webp",
    "/images/Gallery image 20.webp",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-white py-20 md:py-28 overflow-hidden">
        {/* Abstract shapes background */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <div className="flex flex-col md:flex-row items-start gap-8 mb-10">
                <img
                  src="/images/Logo.webp"
                  alt="Logo Association"
                  className="w-52 h-52 bg-white p-4 rounded-xl shadow-xl flex-shrink-0 transition-transform hover:scale-105 duration-500"
                />
                <div className="mt-6 md:mt-0">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                    {language === "fr"
                      ? "Association pour l'Accompagnement et l'Intégration des Enfants Autistes"
                      : "جمعية تأهيل وإدماج أطفال التوحد"}
                  </h1>
                  <p className="text-xl text-white/80 font-medium">
                    {language === "fr"
                      ? "Ensemble vers un avenir meilleur pour nos enfants"
                      : "معًا نحو مستقبلٍ أفضل لأطفال التوحد"}
                  </p>
                </div>
              </div>
              <p className="mb-10 text-lg opacity-90 bg-primary/30 p-6 rounded-xl backdrop-blur-sm shadow-lg">
                {language === "fr"
                  ? "Notre association marocaine œuvre pour soutenir et réhabiliter les enfants autistes. Nous proposons des programmes éducatifs, des caravanes médicales et des actions de sensibilisation afin de favoriser leur intégration sociale. Rejoignez-nous pour faire la différence !"
                  : "جمعيتنا المغربية تسعى إلى دعم وتأهيل الأطفال ذوي التوحد ومساندتهم في مسار الاندماج الاجتماعي والتربوي. نعمل على تقديم برامج توعوية وتكوينية، إضافةً إلى تنظيم قوافل طبية وتربوية بالشراكة مع مؤسسات محلية ووطنية. انضموا إلينا لنحدث فارقًا إيجابيًّا في حياة الأطفال وعائلاتهم."}
              </p>
              <div className="flex flex-wrap gap-6">
                <Link
                  to="/get-involved"
                  className="btn btn-secondary bg-secondary text-primary font-bold px-8 py-4 rounded-lg hover:bg-opacity-90 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  {language === "fr" ? "Faire un don" : "تبرع الآن"}
                </Link>
                <Link
                  to="/get-involved"
                  className="btn btn-outline border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
                >
                  {language === "fr"
                    ? "Participer en tant que bénévole"
                    : "شارك بالتطوع"}
                </Link>
              </div>
            </div>
            <div className="md:w-1/3">
              <img
                src="/images/Gallery image 21.webp"
                alt="Enfants autistes"
                className="rounded-xl shadow-2xl w-full h-auto transform transition-all duration-500 hover:scale-105 hover:shadow-accent"
              />
            </div>
          </div>
        </div>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 pattern-dots"></div>
      </section>

      {/* Team Section */}
      <section className="py-16 relative bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-primary font-semibold text-sm mb-3">
              {language === "fr" ? "Notre Force" : "قوتنا"}
            </div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              {language === "fr" ? "Notre Équipe Dévouée" : "فريقنا المتفاني"}
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-4"></div>
            <p className="text-gray-600">
              {language === "fr"
                ? "Des professionnels engagés pour améliorer la vie des enfants autistes et de leurs familles."
                : "محترفون ملتزمون بتحسين حياة الأطفال المصابين بالتوحد وعائلاتهم."}
            </p>
          </div>

          {/* President Card */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative overflow-hidden">
                  <div className="h-full w-full bg-primary/10 absolute top-0 left-0"></div>
                  <img
                    src="/images/malika-team.webp"
                    alt={
                      language === "fr"
                        ? "Malika Alaoui Mdarhri"
                        : "مليكة علوي مدرحري"
                    }
                    className="w-full h-64 md:h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/0 to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                  <span className="text-secondary font-bold text-sm uppercase tracking-wider mb-1">
                    {language === "fr" ? "Présidente" : "الرئيسة"}
                  </span>
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {language === "fr"
                      ? "Malika Alaoui Mdarhri"
                      : "مليكة علوي مدرحري"}
                  </h3>
                  <div className="w-12 h-0.5 bg-secondary mb-4"></div>
                  <p className="text-gray-600 italic mb-4">
                    {language === "fr"
                      ? "\"Notre mission est de bâtir des ponts d'espoir pour chaque enfant autiste et de créer un environnement où il pourra s'épanouir pleinement.\""
                      : '"مهمتنا هي بناء جسور الأمل لكل طفل مصاب بالتوحد وخلق بيئة يمكنه فيها الازدهار بشكل كامل."'}
                  </p>
                  <div className="flex items-center">
                    <div className="text-primary font-medium">
                      {language === "fr" ? "Directrice" : "مديرة"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Vice-secrétaire général - Abdelilah */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src="/images/abdelilah-team.webp"
                  alt={
                    language === "fr" ? "Abdelilah Belfqih" : "عبد الإله بلفقيه"
                  }
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <p className="text-sm">
                      {language === "fr" ? "Entraîneur sportif" : "مدرب رياضي"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-primary group-hover:text-secondary transition-colors">
                  {language === "fr" ? "Abdelilah Belfqih" : "عبد الإله بلفقيه"}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === "fr"
                    ? "Vice-secrétaire général"
                    : "نائب الكاتب العام"}
                </p>
              </div>
            </div>

            {/* Trésorier - Aziz */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src="/images/aziz-team.webp"
                  alt={language === "fr" ? "Aziz Mezrari" : "عزيز مزراري"}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <p className="text-sm">
                      {language === "fr" ? "Médecin" : "طبيب"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-primary group-hover:text-secondary transition-colors">
                  {language === "fr" ? "Aziz Mezrari" : "عزيز مزراري"}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === "fr" ? "Trésorier" : "أمين المال"}
                </p>
              </div>
            </div>

            {/* Secretary General - Abdelrazak */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src="/images/abdelrazak-team.webp"
                  alt={
                    language === "fr"
                      ? "Abdelrazak Eddriouch"
                      : "عبد الرزاق الدريوش"
                  }
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <p className="text-sm">
                      {language === "fr" ? "Professeur" : "أستاذ"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-primary group-hover:text-secondary transition-colors">
                  {language === "fr"
                    ? "Abdelrazak Eddriouch"
                    : "عبد الرزاق الدريوش"}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === "fr" ? "Secrétaire général" : "الكاتب العام"}
                </p>
              </div>
            </div>

            {/* Conseiller - Fatna */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src="/images/fatna-team.webp"
                  alt={language === "fr" ? "Fatna Benchawi" : "فاطنة بنشاوي"}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <p className="text-sm">
                      {language === "fr" ? "Femme au foyer" : "ربة بيت"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-primary group-hover:text-secondary transition-colors">
                  {language === "fr" ? "Fatna Benchawi" : "فاطنة بنشاوي"}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === "fr" ? "Conseiller" : "مستشار"}
                </p>
              </div>
            </div>

            {/* Vice-trésorier - Abdeljalil */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src="/images/abdeljalil-team.webp"
                  alt={
                    language === "fr" ? "Abdeljalil Mars" : "عبد الجليل مارس"
                  }
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <p className="text-sm">
                      {language === "fr" ? "Employé" : "موظف"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-primary group-hover:text-secondary transition-colors">
                  {language === "fr" ? "Abdeljalil Mars" : "عبد الجليل مارس"}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === "fr" ? "Vice-trésorier" : "نائب أمين المال"}
                </p>
              </div>
            </div>

            {/* Vice President - Salah */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src="/images/salah-team.webp"
                  alt={
                    language === "fr"
                      ? "Salah Eddine El Maqawi"
                      : "صلاح الدين المقاوي"
                  }
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <p className="text-sm">
                      {language === "fr" ? "Agriculteur" : "فلاح"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-primary group-hover:text-secondary transition-colors">
                  {language === "fr"
                    ? "Salah Eddine El Maqawi"
                    : "صلاح الدين المقاوي"}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === "fr" ? "Vice-président" : "نائب الرئيس"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <DirectorMessage />

      {/* Objectives Section */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
            {t("home.activities.title")}
          </h2>
          <div className="space-y-4">
            {/* Objective 1 */}
            <div className="flex items-start space-x-3 rtl:space-x-reverse">
              <span className="text-secondary mt-1">◄</span>
              <p className="text-gray-700">
                {language === "fr"
                  ? "Aider les enfants atteints de troubles du spectre autistique à accéder aux écoles dans le cadre de l'apprentissage intégré."
                  : "مساعدة الأطفال ذوي اضطراب طيف التوحد على ولوج المدارس في إطار التعلم المدمج."}
              </p>
            </div>

            {/* Objective 2 */}
            <div className="flex items-start space-x-3 rtl:space-x-reverse">
              <span className="text-secondary mt-1">◄</span>
              <p className="text-gray-700">
                {language === "fr"
                  ? "Contribuer scientifiquement à l'encadrement des travailleurs dans le domaine de l'éducation intégrée à travers la signature d'une convention de partenariat entre l'association et le Ministère de l'Éducation Nationale, de l'Enseignement Préscolaire et des Sports."
                  : "المساهمة بشكل علمي في تأطير العاملين في حقل التعليم المدمج من خلال توقيع اتفاقية شراكة بين الجمعية ووزارة التربية الوطنية والتعليم الأولي والرياضة."}
              </p>
            </div>

            {/* Objective 3 */}
            <div className="flex items-start space-x-3 rtl:space-x-reverse">
              <span className="text-secondary mt-1">◄</span>
              <p className="text-gray-700">
                {language === "fr"
                  ? "Permettre aux enfants handicapés moteurs de bénéficier de séances de physiothérapie après la conclusion d'un accord avec le Ministère de la Santé Publique, ainsi qu'avec la contribution de bénévoles au siège de l'association."
                  : "تمكين الأطفال ذوي الإعاقات الحركية من حصص للترويض الطبي و ذلك بعد عقد اتفاقية مع وزارة الصحة العمومية , و كذا بمساهمة متطوعين بمقر الجمعية."}
              </p>
            </div>

            {/* Objective 4 */}
            <div className="flex items-start space-x-3 rtl:space-x-reverse">
              <span className="text-secondary mt-1">◄</span>
              <p className="text-gray-700">
                {language === "fr"
                  ? "Établir des ponts de coopération avec des associations nationales et internationales travaillant dans le même domaine."
                  : "ربط جسور التعاون مع جمعيات وطنية ودولية تعمل في نفس الحقل."}
              </p>
            </div>

            {/* Objective 5 */}
            <div className="flex items-start space-x-3 rtl:space-x-reverse">
              <span className="text-secondary mt-1">◄</span>
              <p className="text-gray-700">
                {language === "fr"
                  ? "Organiser des séances récréatives pour les enfants atteints de troubles du spectre autistique."
                  : "تنظيم حصص ترفيهية لأطفال ذوي اضطراب طيف التوحد."}
              </p>
            </div>

            {/* Objective 6 */}
            <div className="flex items-start space-x-3 rtl:space-x-reverse">
              <span className="text-secondary mt-1">◄</span>
              <p className="text-gray-700">
                {language === "fr"
                  ? "Organiser des réunions consultatives avec les parents d'enfants atteints de troubles du spectre autistique pour améliorer leur situation éducative et sanitaire et discuter des approches adoptées."
                  : "عقد لقاءات تشاورية مع أباء وأمهات الأطفال ذوي اضطراب طيف التوحد من أجل تطوير وضعهم التعليمي والصحي ومناقشة الأساليب المتبعة."}
              </p>
            </div>

            {/* Objective 7 */}
            <div className="flex items-start space-x-3 rtl:space-x-reverse">
              <span className="text-secondary mt-1">◄</span>
              <p className="text-gray-700">
                {language === "fr"
                  ? "Sensibiliser à l'autisme et contribuer au succès des efforts visant à détecter les cas et à intervenir précocement."
                  : "نشر الوعي حول اضطراب التوحد وكل يساهم في إنجاح الجهود الهادفة لاكتشاف الحالات والتدخل المبكر."}
              </p>
            </div>

            {/* Objective 8 */}
            <div className="flex items-start space-x-3 rtl:space-x-reverse">
              <span className="text-secondary mt-1">◄</span>
              <p className="text-gray-700">
                {language === "fr"
                  ? "Créer un club sportif et récréatif en partenariat et en collaboration avec les secteurs spécialisés."
                  : "انشاء نادي رياضي وترفيهي بشراكة وتعاون مع القطاعات المتخصصة."}
              </p>
            </div>

            {/* Objective 9 */}
            <div className="flex items-start space-x-3 rtl:space-x-reverse">
              <span className="text-secondary mt-1">◄</span>
              <p className="text-gray-700">
                {language === "fr"
                  ? "Travailler à la mise en place d'une plateforme d'information complète sur les cas d'autisme et leurs familles dans la ville et la région."
                  : "العمل على توفير منصة معلومات شاملة حول حالات التوحد واسرهم بالمدينة والإقليم."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
            {t("home.activities.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Activity 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src="/images/Gallery image 6.webp"
                alt="Activité 1"
                className="w-full h-48 object-cover cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => handleImageClick("/images/Gallery image 6.webp")}
              />
              <div className="p-4">
                <h3 className="font-bold text-primary mb-2">
                  {language === "fr" ? "Séances éducatives" : "حصص تعليمية"}
                </h3>
                <p className="text-gray-700 text-sm">
                  {language === "fr"
                    ? "Programmes éducatifs adaptés aux besoins spécifiques de chaque enfant autiste."
                    : "برامج تعليمية مخصصة ومكيفة وفق احتياجات كل طفل من أطفال التوحد."}
                </p>
              </div>
            </div>

            {/* Activity 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src="/images/Gallery image 9.webp"
                alt="Activité 2"
                className="w-full h-48 object-cover cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => handleImageClick("/images/Gallery image 9.webp")}
              />
              <div className="p-4">
                <h3 className="font-bold text-primary mb-2">
                  {language === "fr" ? "Caravanes médicales" : "قوافل طبية"}
                </h3>
                <p className="text-gray-700 text-sm">
                  {language === "fr"
                    ? "Organisation de caravanes médicales dans les zones rurales pour offrir des soins et du dépistage."
                    : "تنظيم قوافل طبية في المناطق القروية لتقديم الرعاية الصحية والكشف المبكر."}
                </p>
              </div>
            </div>

            {/* Activity 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src="/images/Gallery image 11.webp"
                alt="Activité 3"
                className="w-full h-48 object-cover cursor-pointer transform transition-transform hover:scale-105"
                onClick={() =>
                  handleImageClick("/images/Gallery image 11.webp")
                }
              />
              <div className="p-4">
                <h3 className="font-bold text-primary mb-2">
                  {language === "fr"
                    ? "Ateliers de sensibilisation"
                    : "ورشات التوعية"}
                </h3>
                <p className="text-gray-700 text-sm">
                  {language === "fr"
                    ? "Sessions de sensibilisation pour les familles et le grand public sur l'autisme."
                    : "جلسات توعوية للعائلات والجمهور العام حول التوحد وكيفية التعامل معه."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
            {t("home.events.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Event 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="relative">
                <img
                  src="/images/Gallery image 16.webp"
                  alt="Événement 1"
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-0 right-0 bg-secondary text-primary px-3 py-1 m-2 rounded-full text-sm font-bold">
                  {language === "fr" ? "Prochain événement" : "الحدث القادم"}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-primary text-lg mb-2">
                  {language === "fr"
                    ? "Journée mondiale de sensibilisation à l'autisme"
                    : "اليوم العالمي للتوعية بالتوحد"}
                </h3>
                <p className="text-gray-500 text-sm mb-3">
                  {language === "fr" ? "2 Avril 2025" : "2 أبريل 2025"}
                </p>
                <p className="text-gray-700">
                  {language === "fr"
                    ? "Célébration de la journée mondiale de l'autisme avec des activités de sensibilisation et d'inclusion."
                    : "الاحتفال باليوم العالمي للتوحد مع أنشطة توعوية وفعاليات للدمج الاجتماعي."}
                </p>
              </div>
            </div>

            {/* Event 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="relative">
                <img
                  src="/images/ASSO EVENT 1/Gallery image 1.webp"
                  alt="Événement 2"
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-0 right-0 bg-gray-500 text-white px-3 py-1 m-2 rounded-full text-sm font-bold">
                  {language === "fr" ? "Événement passé" : "حدث سابق"}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-primary text-lg mb-2">
                  {language === "fr"
                    ? "Caravane médicale à Jarf El Malha"
                    : "القافلة الطبية في جرف الملحة"}
                </h3>
                <p className="text-gray-500 text-sm mb-3">
                  {language === "fr" ? "17 février 2025" : "17 فبراير 2025"}
                </p>
                <p className="text-gray-700">
                  {language === "fr"
                    ? "Bilan des actions réalisées : 120 enfants examinés, 45 paires de lunettes distribuées, 30 familles conseillées."
                    : "حصيلة الإجراءات المنفذة: فحص 120 طفلاً، توزيع 45 زوجًا من النظارات، تقديم المشورة لـ 30 أسرة."}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/events"
              className="inline-block bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
            >
              {language === "fr"
                ? "Voir tous nos événements →"
                : "عرض جميع الفعاليات →"}
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-secondary text-primary">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            {language === "fr"
              ? "Rejoignez-nous dans notre mission"
              : "انضموا إلينا في مهمتنا"}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            {language === "fr"
              ? "Ensemble, nous pouvons faire une différence dans la vie des enfants autistes et de leurs familles."
              : "معًا، يمكننا إحداث فرق في حياة الأطفال ذوي التوحد وعائلاتهم."}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/get-involved"
              className="btn bg-primary text-white font-bold px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              {language === "fr" ? "Faire un don" : "تبرع الآن"}
            </Link>
            <Link
              to="/contact"
              className="btn bg-white text-primary font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {language === "fr" ? "Nous contacter" : "اتصل بنا"}
            </Link>
          </div>
        </div>
      </section>

      {/* Modal pour l'agrandissement des images */}
      <ImageModal
        isOpen={!!selectedImage}
        imageUrl={selectedImage || ""}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default HomePage;
