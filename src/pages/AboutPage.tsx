import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../context/LanguageContext";

const AboutPage = () => {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);

  return (
    <div>
      {/* Team Section */}
      <section className="py-16 relative bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              {language === "fr" ? "Notre équipe" : "فريقنا المتفاني"}
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-4"></div>
            <p className="text-gray-600">
              {language === "fr"
                ? "Un groupe de personnes passionnées unies par la volonté d'offrir un avenir meilleur aux enfants touchés par l'autisme et à leurs proches."
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
                        : "مليكة مدغري"
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
                      : "مليكة مدغري"}
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
          <div className="grid grid-cols-3 xs:grid-cols-3 gap-2 sm:gap-4 md:gap-6">
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
                    <p className="text-sm hidden sm:block">
                      {language === "fr" ? "Agriculteur" : "فلاح"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-2 sm:p-4">
                <h3 className="font-bold text-primary group-hover:text-secondary transition-colors text-xs sm:text-sm md:text-base">
                  {language === "fr"
                    ? "Salah Eddine El Maqawi"
                    : "صلاح الدين المقاوي"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  {language === "fr" ? "Vice-président" : "نائب الرئيس"}
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
                    <p className="text-sm hidden sm:block">
                      {language === "fr" ? "Médecin" : "طبيب"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-2 sm:p-4">
                <h3 className="font-bold text-primary group-hover:text-secondary transition-colors text-xs sm:text-sm md:text-base">
                  {language === "fr" ? "Aziz Mezrari" : "عزيز مزراري"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
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
                    <p className="text-sm hidden sm:block">
                      {language === "fr" ? "Professeur" : "أستاذ"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-2 sm:p-4">
                <h3 className="font-bold text-primary group-hover:text-secondary transition-colors text-xs sm:text-sm md:text-base">
                  {language === "fr"
                    ? "Abdelrazak Eddriouch"
                    : "عبد الرزاق الدريوش"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
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
                    <p className="text-sm hidden sm:block">
                      {language === "fr" ? "Femme au foyer" : "ربة بيت"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-2 sm:p-4">
                <h3 className="font-bold text-primary group-hover:text-secondary transition-colors text-xs sm:text-sm md:text-base">
                  {language === "fr" ? "Fatna Benchawi" : "فاطنة بنشاوي"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  {language === "fr" ? "Conseiller" : "مستشار"}
                </p>
              </div>
            </div>

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
                    <p className="text-sm hidden sm:block">
                      {language === "fr" ? "Entraîneur sportif" : "مدرب رياضي"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-2 sm:p-4">
                <h3 className="font-bold text-primary group-hover:text-secondary transition-colors text-xs sm:text-sm md:text-base">
                  {language === "fr" ? "Abdelilah Belfqih" : "عبد الإله بلفقيه"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  {language === "fr"
                    ? "Vice-secrétaire général"
                    : "نائب الكاتب العام"}
                </p>
              </div>
            </div>

            {/* Vice-trésorier - Abdeljalil */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src="/images/abdeljalil-team.webp"
                  alt={language === "fr" ? "Jalil Mars" : "جليل مارس"}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <p className="text-sm hidden sm:block">
                      {language === "fr" ? "Employé" : "موظف"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-2 sm:p-4">
                <h3 className="font-bold text-primary group-hover:text-secondary transition-colors text-xs sm:text-sm md:text-base">
                  {language === "fr" ? "Jalil Mars" : "جليل مارس"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  {language === "fr" ? "Vice-trésorier" : "نائب أمين المال"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section with Who We Are */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                {language === "fr" ? "Qui sommes-nous" : "من نحن"}
              </h1>
              <div className="w-20 h-1 bg-secondary mb-8"></div>
              <div className="prose max-w-none text-white">
                <p className="mb-6">
                  {language === "fr"
                    ? "Nous sommes une association à but non lucratif fondée dans le but de créer un environnement favorable pour les enfants autistes et leurs familles. Nous œuvrons à la sensibilisation et à la formation afin de promouvoir leur autonomie et leur intégration dans la société."
                    : "جمعية تأهيل وإدماج أطفال التوحد هي منظمة غير ربحية مغربية، تأسست بهدف توفير بيئة داعمة للأطفال ذوي التوحد وعائلاتهم. نسعى إلى توعية المجتمع وتعزيز قدرات الأطفال وتنمية مهاراتهم الاجتماعية والتربوية، بهدف دمجهم في الحياة اليومية وتمكينهم من الاعتماد على أنفسهم قدر الإمكان."}
                </p>
              </div>
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

      {/* Vision and Mission Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">
                {language === "fr" ? "Notre Vision :" : "رؤيتنا:"}
              </h3>
              <p className="mb-6">
                {language === "fr"
                  ? "Construire une société inclusive où chaque enfant autiste a la possibilité de s'épanouir et de réaliser son potentiel."
                  : "نسعى إلى مجتمع شامل يُتيح للأطفال ذوي التوحد فرصة التطوّر والازدهار، ويؤمن بحقوقهم وكرامتهم وقدراتهم."}
              </p>
              <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/Gallery image 22.webp"
                  alt="Notre vision"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Mission and Values */}
            <div>
              {/* Mission */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  {language === "fr" ? "Notre Mission :" : "رسالتنا:"}
                </h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>
                      {language === "fr"
                        ? "Offrir des programmes éducatifs et de réhabilitation spécialisés."
                        : "تمكين الأطفال ذوي التوحد من خلال برامج تعليمية وتأهيلية متخصصة."}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>
                      {language === "fr"
                        ? "Informer et soutenir les familles et la communauté."
                        : "توعية الأسر والمجتمع بأهمية التكفل المبكر والدعم النفسي والاجتماعي."}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>
                      {language === "fr"
                        ? "Favoriser la coopération avec des partenaires institutionnels et associatifs."
                        : "تعزيز قيم التضامن والتآزر عبر بناء شراكات فاعلة مع مؤسسات حكومية ومدنية."}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Values */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-primary mb-4">
                  {language === "fr" ? "Nos Valeurs :" : "قيمنا الأساسية:"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-secondary transition-colors">
                    <h4 className="font-bold text-primary mb-2">
                      {language === "fr" ? "Humanité" : "الإنسانية"}
                    </h4>
                    <p>
                      {language === "fr"
                        ? "Le bien-être de l'enfant avant tout."
                        : "نضع مصلحة الطفل في صلب اهتماماتنا."}
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-secondary transition-colors">
                    <h4 className="font-bold text-primary mb-2">
                      {language === "fr" ? "Transparence" : "الشفافية"}
                    </h4>
                    <p>
                      {language === "fr"
                        ? "Une gestion claire et honnête."
                        : "نلتزم بالوضوح والأمانة في عملنا المالي والإداري."}
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-secondary transition-colors">
                    <h4 className="font-bold text-primary mb-2">
                      {language === "fr" ? "Collaboration" : "التعاون"}
                    </h4>
                    <p>
                      {language === "fr"
                        ? "Le travail en équipe et le partenariat sont essentiels."
                        : "نؤمن بقوة الشراكة والعمل الجماعي."}
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-secondary transition-colors">
                    <h4 className="font-bold text-primary mb-2">
                      {language === "fr" ? "Innovation" : "الابتكار"}
                    </h4>
                    <p>
                      {language === "fr"
                        ? "L'adoption de méthodes éducatives modernes."
                        : "نسعى لاعتماد أفضل الممارسات والطرق التربوية الحديثة."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
