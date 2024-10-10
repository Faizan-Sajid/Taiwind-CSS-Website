import FormatShapesTwoToneIcon from '@mui/icons-material/FormatShapesTwoTone';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import CampaignIcon from '@mui/icons-material/Campaign';
import LanguageIcon from '@mui/icons-material/Language';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import SmoothAnimatedSection from "./animation"

function Services() {
    return (
        <>
        <SmoothAnimatedSection>
            <div className="text-center mb-8 mt-52">
                <h3 className="font-bold text-[17px] text-[#39b54a] font-serif">What We Do</h3>
                <h1 className="text-[32px] sm:text-[50px] md:text-[70px] text-black font-bold t">
                    We’ve got everything you need to  launch and grow your business
                </h1>
                <hr className="max-w-[150px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[500px] mx-auto mt-4 border-black border-1" />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 px-4 bg-gray-100">
                {[
                    {
                        Icon: FormatShapesTwoToneIcon,
                        title: "Brand Identity",
                        description: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
                    },
                    {
                        Icon: ViewWeekIcon,
                        title: "Illustration",
                        description: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
                    },
                    {
                        Icon: CampaignIcon,
                        title: "Marketing",
                        description: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
                    },
                    {
                        Icon: LanguageIcon,
                        title: "Web Design",
                        description: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
                    },
                    {
                        Icon: ViewInArIcon,
                        title: "Packing Design",
                        description: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
                    },
                    {
                        Icon: DeveloperModeIcon,
                        title: "Web Development",
                        description: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
                    },
                ].map(({ Icon, title, description }) => (
                    <div key={title} className="flex flex-col items-center p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                        <Icon className="text-[50px] text-green-500 mb-4" />
                        <h1 className="font-bold font-serif text-black text-[24px] mb-2">{title}</h1>
                        <p className="text-justify font-serif text-[16px]">{description}</p>
                    </div>
                ))}
            </div>
            </SmoothAnimatedSection>
        </>
    );
}

export default Services;

