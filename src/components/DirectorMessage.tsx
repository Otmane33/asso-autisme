import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../context/LanguageContext";

const DirectorMessage = () => {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);

  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
            {t("home.directorMessage.title")}
          </h2>

          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md relative">
            {/* Quote marks decoration */}
            <div className="absolute top-4 left-4 text-6xl text-primary opacity-10">
              "
            </div>
            <div className="absolute bottom-4 right-4 text-6xl text-primary opacity-10">
              "
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Photo */}
              <div className="md:w-1/3">
                <div className="w-40 h-40 md:w-full md:h-auto aspect-square rounded-full md:rounded-lg overflow-hidden border-4 border-primary shadow-lg mx-auto">
                  <img
                    src="/images/malika mdarhri.webp"
                    alt="Malika Mdarhri"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mt-4">
                  <p className="font-bold text-primary text-lg">
                    {language === "fr" ? "" : ""}
                  </p>
                  <p className="text-gray-600">{language === "fr" ? "" : ""}</p>
                </div>
              </div>

              {/* Message */}
              <div className="md:w-2/3 relative z-10">
                {language === "fr" ? (
                  <div className="space-y-4">
                    <p className="italic text-gray-600">Chers amis et amies,</p>

                    <p>
                      l'AAIDEA (Association pour l'Accompagnement et
                      l'Intégration des Enfants Autistes) s'engage avec cœur
                      dans l'accompagnement des personnes autistes. Avec mon
                      équipe, nous avons décidé de conjuguer nos talents, nos
                      ressources et notre détermination pour bâtir une structure
                      ambitieuse, capable de répondre à l'ensemble des besoins
                      liés à l'autisme, quel que soit l'âge, tout en portant
                      haut nos valeurs militantes et en développant des services
                      innovants.
                    </p>

                    <p>
                      Ce projet, mûri au fil de discussions passionnées depuis
                      plusieurs années, a été chaleureusement accueilli. Il est
                      le fruit d'une collaboration collective, puisant sa force
                      dans nos racines communes et notre vision partagée.
                    </p>

                    <p>
                      Nous proposons une palette variée de soutiens, ancrés dans
                      le respect absolu de chaque individu et alignés sur les
                      meilleures pratiques. Notre action militante s'épanouit à
                      travers l'accueil des familles, le soutien des proches et
                      une offre riche d'ateliers. Notre communauté, composée
                      d'adhérents, de familles et de soutiens, ne cesse de
                      grandir.
                    </p>

                    <p>
                      Je suis intimement persuadée qu'en unissant nos forces au
                      sein de cette association dédiée à l'autisme, nous
                      parviendrons à offrir un accompagnement complet,
                      respectueux de la dignité, des potentialités et des
                      attentes de chacun tout au long de leur parcours.
                    </p>

                    <p className="mt-6">Avec toute ma fidélité,</p>

                    <p className="font-bold">Malika Mdarhri</p>
                  </div>
                ) : (
                  <div className="space-y-4 text-right" dir="rtl">
                    <p className="italic text-gray-600">أعزائي وأحبائي،</p>

                    <p>
                      تتفانى جمعية أفق في دعم الأشخاص المصابين بالتوحد. لقد
                      اخترت، مع فريقي، أن نجمع كفاءاتنا وإمكانياتنا وطاقاتنا
                      لبناء هيكلية طموحة، تستجيب لجميع احتياجات طيف التوحد عبر
                      مختلف الأعمار، مع التزامٍ قوي بالدفاع عن قضايانا وتطوير
                      خدمات مبتكرة.
                    </p>

                    <p>
                      هذا المشروع، الذي نضج عبر نقاشات مكثفة على مدى سنوات، لقي
                      ترحيباً واسعاً. إنه نتاج تعاوننا المشترك، مستمداً قوته من
                      جذورنا ومبادئنا الموحدة.
                    </p>

                    <p>
                      نقدم أشكالاً متنوعة من الدعم، متجذرة في احترام كامل لكل
                      فرد ومتوافقة مع أفضل الممارسات. تتألق جهودنا الداعمة من
                      خلال استقبال العائلات ومساندة المقربين، إلى جانب برنامج
                      غني بالورشات. مجتمعنا، المكون من أعضاء وعائلات ومؤيدين،
                      يتسع يوماً بعد يوم.
                    </p>

                    <p>
                      أنا مقتنعة تماماً بأننا، من خلال اتحادنا في هذه الجمعية
                      المكرسة للتوحد، سنتمكن من تقديم دعم شامل يحترم كرامة كل
                      شخص وقدراته واحتياجاته طوال مسيرته.
                    </p>

                    <p className="mt-6">بكل وفاء،</p>

                    <p className="font-bold">مليكة مدغري</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;
