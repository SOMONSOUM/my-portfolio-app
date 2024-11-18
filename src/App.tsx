import { Github, Mail, MapPin, Phone } from "lucide-react";
import "./App.css";
import { Card, CardContent } from "./components/ui/card";

function App() {
  return (
    <>
      <div
        className="min-h-screen bg-[#f5f8ff] p-4 md:p-8 flex items-center justify-center"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm10 10l10 10H0L10 10z' fill='%23e8f0ff' fill-opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      >
        <Card className="w-full max-w-4xl shadow-lg">
          <CardContent className="p-6 md:p-8">
            <div className="grid md:grid-cols-[320px,1fr] gap-8">
              {/* Left Sidebar */}
              <div className="space-y-6">
                {/* Profile Photo */}
                <div className="w-full aspect-square max-w-[160px] mx-auto">
                  <img
                    src="https://avatars.githubusercontent.com/u/28615575?s=400&u=321d6388a81f9b85d2c25305a5e806feb09bfdb7&v=4"
                    alt="Profile photo"
                    className="w-48 h-48 object-cover border-2 border-gray-200"
                  />
                </div>

                {/* Contact Section */}
                <div>
                  <div className="bg-[#1e56a0] text-white font-semibold text-center py-2">
                    CONTACT ME
                  </div>
                  <div className="space-y-2 mt-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-[#1e56a0]" />
                      <span>(+855) 99 965 943</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-[#1e56a0]" />
                      <span>somon.soum@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#1e56a0]" />
                      <span>Prek Pnov, Phnom Penh, Cambodia</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Github className="h-4 w-4 text-[#1e56a0]" />
                      <span>github.com/somonsoum</span>
                    </div>
                  </div>
                </div>

                {/* Education Section */}
                <div>
                  <div className="bg-[#1e56a0] text-white font-semibold text-center py-2">
                    EDUCATION
                  </div>
                  <div className="space-y-4 mt-3">
                    <div>
                      <h3 className="text-[#1e56a0] font-semibold">
                        Bachelor of Computer Science
                      </h3>
                      <p className="text-sm">
                        Institute of Technology of Cambodia/{" "}
                        <span className="text-[#1e56a0]">Phnom Penh</span>
                      </p>
                      <p className="text-sm text-gray-600">2013 - 2018</p>
                    </div>
                    <div>
                      <h3 className="text-[#1e56a0] font-semibold">
                        High School
                      </h3>
                      <p className="text-sm">
                        Hun Sen Kampong Ro High School /{" "}
                        <span className="text-[#1e56a0]">Svay Rieng</span>
                      </p>
                      <p className="text-sm text-gray-600">2022 - 2023</p>
                    </div>
                  </div>
                </div>

                {/* Skills Section */}
                <div>
                  <div className="bg-[#1e56a0] text-white font-semibold text-center py-2">
                    SKILLS
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="flex gap-2">
                      <span className="text-[#1e56a0] mt-1">•</span>
                      <span>ReactJS, NextJS, Flutter</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#1e56a0] mt-1">•</span>
                      <span>NextJS, Spring Boot</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#1e56a0] mt-1">•</span>
                      <span>TypeScript, JavaScript, Java, Dart</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#1e56a0] mt-1">•</span>
                      <span>CSS (Tailwind CSS, Bootstrap, SASS)</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#1e56a0] mt-1">•</span>
                      <span>Git, GitLab, Bitbucket, GitHub</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#1e56a0] mt-1">•</span>
                      <span>Docker, Capirover, Deploy</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="space-y-6">
                {/* Name and Title */}
                <div className="mb-8">
                  <h1 className="text-[#1e56a0] text-4xl font-bold mb-1">
                    SOUM SOMON
                  </h1>
                  <p className="text-gray-600 text-xl">
                    Senior Software Developer
                  </p>
                </div>

                {/* Introduction Section */}
                <section>
                  <h2 className="text-[#1e56a0] font-bold mb-4 pb-1 border-b border-[#1e56a0]">
                    INTRODUCTION
                  </h2>
                  <p className="text-gray-600">
                    A Senior Software Developer experienced in NextJS, NextJS,
                    ReactJS, and TypeScript, specializing in building scalable
                    applications, optimizing performance, and ensuring code
                    quality. Skilled in both backend and frontend development,
                    with a focus on clean, maintainable code.
                  </p>
                </section>

                {/* Work Experience Section */}
                <section>
                  <h2 className="text-[#1e56a0] font-bold mb-4 pb-1 border-b border-[#1e56a0]">
                    WORK EXPERIENCE
                  </h2>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Frontend Developer</span>
                      <span className="text-gray-600">Dec 2022 - Present</span>
                    </div>
                    <p className="text-[#1e56a0] mb-2">Ministry of Commerce</p>
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <span className="text-[#1e56a0] mt-1">•</span>
                        <span className="text-gray-600">
                          Created responsive websites and web applications using
                          modern technologies.
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-[#1e56a0] mt-1">•</span>
                        <span className="text-gray-600">
                          Designed and implemented UX/UI components for enhanced
                          user experiences.
                        </span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Volunteer Section */}
                <section>
                  <h2 className="text-[#1e56a0] font-bold mb-4 pb-1 border-b border-[#1e56a0]">
                    VOLUNTEER
                  </h2>
                  <div className="space-y-3">
                    {[
                      {
                        date: "Feb 2022",
                        desc: "Ramadsan Street Food, EMAAN Foundation Cambodia",
                      },
                      {
                        date: "May - June 2023",
                        desc: "Volunteer Opening & Closing Ceremony, 32nd SEA Games and 12th ASEAN Para Games",
                      },
                      {
                        date: "Nov 2023",
                        desc: "Volunteer Union of Youth Federations of Cambodia, T1 Chulkoun",
                      },
                      {
                        date: "Dec 2023",
                        desc: "Team supporting the Cambodian scene, My Heart, 45th Anniversary of UYFC",
                      },
                      {
                        date: "Nov 2024",
                        desc: "Volunteer Union of Youth Federations of Cambodia, T1 Chulkoun II",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <span className="text-gray-600 w-32 shrink-0">
                          {item.date}
                        </span>
                        <span className="text-[#1e56a0]">•</span>
                        <span className="text-gray-600">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* References Section */}
                <section>
                  <h2 className="text-[#1e56a0] font-bold mb-4 pb-1 border-b border-[#1e56a0]">
                    REFERENCES
                  </h2>
                  <div>
                    <h3 className="text-[#1e56a0] font-medium">
                      Mr. Sak Sothea
                    </h3>
                    <p className="text-gray-600">Product Owner at Godfial</p>
                    <p className="text-gray-600">Phone: 085 2* ** 00</p>
                  </div>
                </section>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default App;
