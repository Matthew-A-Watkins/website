import heroImg1 from "../img/brothersmain.png";
import heroImg2 from "../img/ktparty.png";
import heroImg3 from "../img/resume.png";
import heroimg4 from "../img/delta initiation.jpeg";
import heroimg5 from "../img/golf.png";
import heroimg6 from "../img/trio.jpeg";
import ImageCarousel from "../components/ImageCarousel";
/** Icon Images */
import devIcon from "../img/profIcon.png";
import alumniIcon from "../img/alumIcon.png";
import socialIcon from "../img/socIcon.png";
import techIcon from "../img/techIcon.png";
import academicIcon from "../img/acadIcon.png";

const images = [heroImg2, heroImg3, heroimg4, heroimg5, heroimg6];

function About() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* HERO CAROUSEL */}
            <section className="relative w-full h-[75vh] overflow-hidden">
                <div
                    className={`absolute w-full h-full top-0 left-0 transition-opacity duration-700`}
                >
                    <img
                        src={heroImg1}
                        alt={`Alpha Profesional`}
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>

            {/* ABOUT TEXT */}
            <section className="mt-10 max-w-4xl mx-auto py-8 px-4 -mt-200 relative bg-gray-100 rounded-md">
                <h2 className="text-center text-4xl font-bold mb-4 text-ktp-appblue">
                    Our Story
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                    Kappa Theta Pi takes pride in being the first professional
                    technology fraternity in the country. Our members learn a
                    plethora of skills needed to stay knowledgeable about the
                    tech industry, as well as a strong sense of professional
                    development for future job positions.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                    KTP was founded on January 10, 2012, at the University of
                    Michigan. It was started with the mission to create a tech
                    community that enthusiastic students could join. In making
                    KTP, the founders set up a strong community that has only
                    grown in the 11 years since its inception.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                    Our members come from all around campus. We are designers,
                    analysts, computer scientists, engineers, artists,
                    entrepreneurs, economists, philosophers, psychologists, and
                    more. What makes the KTP community strong is our shared
                    passion for technology and our unique backgrounds meshing
                    together as one.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    Our alumni are part of an extensive and tight-knit network
                    that stretches across the country. They can be found from
                    Seattle to New York, from Silicon Valley to Detroit, in both
                    startup companies and larger businesses. Our alumni provide
                    valuable insight for our members' professional development.
                </p>
            </section>

            {/* FIVE PILLARS */}
            <section className="mt-16 px-4 pb-12">
                <h2 className="text-3xl sm:text-4xl font-black text-center mb-8 text-ktp-appblue">
                    Five Pillars
                </h2>

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Pillar 1 */}
                    <div className="bg-ktp-appblue text-white p-6 rounded-lg shadow-lg relative transform transition-transform hover:scale-105 hover:shadow-2xl">
                        {/* Icon in top-left */}
                        <img
                            src={devIcon}
                            alt="Professional Dev Icon"
                            className="w-8 h-8 absolute top-4 left-4"
                        />
                        <h3 className="text-xl font-bold mt-10 mb-2">
                            Professional Development
                        </h3>
                        <p className="text-sm">
                            Interview training, resume building, mentorship, and
                            private recruiting
                        </p>
                    </div>

                    {/* Pillar 2 */}
                    <div className="bg-ktp-appblue text-white p-6 rounded-lg shadow-lg relative transform transition-transform hover:scale-105 hover:shadow-2xl">
                        <img
                            src={alumniIcon}
                            alt="Alumni Icon"
                            className="w-10 h-8 absolute top-4 left-4"
                        />
                        <h3 className="text-xl font-bold mt-10 mb-2">
                            Alumni Connections
                        </h3>
                        <p className="text-sm">
                            Our alumni work worldwide at top firms like Amazon,
                            Google, startups, consultancies, and fintech
                            companies
                        </p>
                    </div>

                    {/* Pillar 3 */}
                    <div className="bg-ktp-appblue text-white p-6 rounded-lg shadow-lg relative transform transition-transform hover:scale-105 hover:shadow-2xl">
                        <img
                            src={socialIcon}
                            alt="Social Icon"
                            className="w-8 h-8 absolute top-4 left-4"
                        />
                        <h3 className="text-xl font-bold mt-10 mb-2">
                            Social Growth
                        </h3>
                        <p className="text-sm" style={{ paddingTop: "25px" }}>
                            Meet lifelong friends through social events
                            including formals, tailgates, bowling, and apple
                            picking
                        </p>
                    </div>

                    {/* Pillar 4 */}
                    <div className="bg-ktp-appblue text-white p-6 rounded-lg shadow-lg relative transform transition-transform hover:scale-105 hover:shadow-2xl">
                        <img
                            src={techIcon}
                            alt="Tech Icon"
                            className="w-10 h-8 absolute top-4 left-4"
                        />
                        <h3 className="text-xl font-bold mt-10 mb-2">
                            Technological Advancement
                        </h3>
                        <p className="text-sm">
                            Build and expand technical skills through team
                            projects and workshops
                        </p>
                    </div>

                    {/* Pillar 5 */}
                    <div className="bg-ktp-appblue text-white p-6 rounded-lg shadow-lg relative transform transition-transform hover:scale-105 hover:shadow-2xl">
                        <img
                            src={academicIcon}
                            alt="Academic Icon"
                            className="w-10 h-10 absolute top-4 left-4"
                        />
                        <h3 className="text-xl font-bold mt-10 mb-2">
                            Academic Support
                        </h3>
                        <p className="text-sm">
                            Supportive network of bright tech minds that are
                            always willing to help with coursework or
                            extracurriculars
                        </p>
                    </div>
                </div>
            </section>
            {/* HISTORY OF KTP - TIMELINE */}
            <section className="py-12 px-4 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-black text-center mb-8 text-ktp-appblue">
                        KTP History
                    </h2>
                    <div className="relative border-l-2 border-gray-300 ml-6">
                        {/* 2011  */}
                        <div className="mb-12 ml-6 relative">
                            <div className="w-4 h-4 bg-ktp-appblue rounded-full absolute -left-[10px] top-1"></div>
                            <h3 className="text-xl font-bold mb-2 px-4">
                                2011: Inception at UMich
                            </h3>
                            <p className="text-gray-700">
                                In December 2011, at the University of Michigan,
                                two students (Louise Vongphrachanh and Jing Guo)
                                founded a professional fraternity aimed at
                                informatics students. After determining interest
                                Louise and Jing hosted interviews and gathered
                                KTP's first-ever E-Board of University of
                                Michigan informatics students, their names are:
                                Nisha Dwivedi, Jacqueline Fontaine, Brian
                                Marshfield, Denny Tsai, and Julia Varghese.
                            </p>
                        </div>

                        {/* 2014  */}
                        <div className="mb-12 ml-6 relative">
                            <div className="w-4 h-4 bg-ktp-appblue rounded-full absolute -left-[10px] top-1"></div>
                            <h3 className="text-xl font-bold mb-2 px-4">
                                2014: Expansion & Sponsorship
                            </h3>
                            <p className="text-gray-700">
                                Approaching 2014 the fraternity broadened its
                                focus to encompass many technology-related
                                majors including engineering and computer
                                science. Soon later the University of Michigan
                                School of Information officially sponsored the
                                fraternity.
                            </p>
                        </div>

                        {/* 2015-2017  */}
                        <div className="mb-12 ml-6 relative">
                            <div className="w-4 h-4 bg-ktp-appblue rounded-full absolute -left-[10px] top-1"></div>
                            <h3 className="text-xl font-bold mb-2 px-4">
                                2015–2017: Beyond Michigan
                            </h3>
                            <p className="text-gray-700">
                                From 2015-2017 the Beta, Gamma, Delta, and
                                Epsilon chapters were established at the
                                University of Pittsburgh, the Rose-Hulman
                                Institute of Technology, Syracuse University,
                                and the University of Maryland respectively. All
                                of these chapters continue to be active to this
                                day.
                            </p>
                        </div>

                        {/* 2019-2022 Timeline Item */}
                        <div className="mb-12 ml-6 relative">
                            <div className="w-4 h-4 bg-ktp-appblue rounded-full absolute -left-[10px] top-1"></div>
                            <h3 className="text-xl font-bold mb-2 px-4">
                                2019–2022: Nationwide Growth
                            </h3>
                            <p className="text-gray-700">
                                From late-2019 to mid-2022 we see the next few
                                chapters pop up all across the country with the
                                addition of Zeta, Eta, Theta, and Kappa at the
                                College of New Jersey, University of North
                                Carolina at Chapel Hill, University of Chicago,
                                and Northwestern University.
                            </p>
                        </div>

                        {/* 2022: Lambda at BU */}
                        <div className="mb-12 ml-6 relative">
                            <div className="w-4 h-4 bg-ktp-appblue rounded-full absolute -left-[10px] top-1"></div>
                            <h3 className="text-xl font-bold mb-2 px-4">
                                2022: Establishment of Lambda Chapter
                            </h3>
                            <p className="text-gray-700">
                                On October 27th, 2022, the Lambda Chapter was
                                officially founded here at Boston University.
                                Presidents Paul Lee and Tye Robison had the idea
                                to bring a new kind of fraternity to Boston and
                                bring together STEM majors from all kinds of
                                backgrounds, spiritually similar to the dream of
                                Louise and Jing just over a decade ago. Tye and
                                Paul ran interviews for E-Board and Lambda grew
                                to include 8 more people: Evan Lapid, Jaden
                                Hsiao, Camille Herzog, Rylie Love, Peachy Malik,
                                Anissa Patel, Patrick Blejwas, and George Audi.
                            </p>
                        </div>

                        {/* 2023 & Beyond */}
                        <div className="mb-12 ml-6 relative">
                            <div className="w-4 h-4 bg-ktp-appblue rounded-full absolute -left-[10px] top-1"></div>
                            <h3 className="text-xl font-bold mb-2 px-4">
                                2023 & Beyond
                            </h3>
                            <p className="text-gray-700">
                                In the spring of 2023, Lambda held its inaugural
                                rush and warmly embraced an Alpha class
                                consisting of around 30 students. As we speak,
                                KTP's presence at BU is in the midst of an
                                exciting expansion, and our mission to unite
                                STEM students from diverse disciplines,
                                backgrounds, and aspirations is actively
                                evolving. Moreover, new chapters are continually
                                sprouting up across the nation, as if the
                                history of our fraternity is writing itself in
                                real-time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* DEI COMMITMENT SECTION */}
            <section className="bg-white py-12 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-black mb-4 text-ktp-appblue text-center">
                        DEI Commitment
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-6 max-w-4xl mx-auto">
                        The world of technology is unique, diverse, and
                        multi-faceted. We believe that our brothers should be
                        too. In Kappa Theta Pi, we’re passionate about
                        cultivating an inclusive community that promotes and
                        values diversity. Our dedication to diversity, equity,
                        and inclusion is unwavering; these values are central to
                        our mission and to our impact. We know that having
                        heterogeneous perspectives helps generate better ideas
                        to solve the nuanced problems of a changing — and
                        increasingly diverse — world.
                    </p>
                    <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
                        In KTP, we have a responsibility to address structural
                        inequality in our communities as well as the social and
                        cultural dimensions of technology. We are committed to
                        harnessing the best of KTP — our people, platform, and
                        technical innovation — to make lasting change inside and
                        outside of our organization.
                    </p>

                    <div className="flex justify-center py-12 px-10">
                        <div className="w-full max-w-[1200px]">
                            <ImageCarousel images={images} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
