import React from "react";

import { Button, Img, Line, List, Text } from "components";
import LandingPageColumnThree from "components/LandingPageColumnThree";

const LandingpagePage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <header className="bg-gray-50 fixed flex flex-col md:flex-row items-center justify-center md:px-5 w-full">
          <div className="flex flex-row sm:gap-10 md:gap-[200px] items-center md:items-start justify-between md:justify-center mb-[30px] mt-[38px] mx-auto w-[67%] md:w-full">
            <div className="header-row mt-px">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900"
                size="txtPoppinsRegular30"
              >
                Agaspar
              </Text>
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <ul className="flex sm:flex-col flex-row sm:hidden items-start justify-between w-[62%] md:w-full common-row-list">
              <li>
                <a
                  href="javascript:"
                  className="mb-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-900"
                >
                  <Text size="txtPoppinsRegular25">About</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="sm:mt-0 mt-[3px] sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-900"
                >
                  <Text size="txtPoppinsRegular25">Projects</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="mb-[3px] sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-900"
                >
                  <Text size="txtPoppinsRegular25">Extracurricular</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="mb-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-900"
                >
                  <Text size="txtPoppinsRegular25">Contact</Text>
                </a>
              </li>
            </ul>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start mt-[200px] md:px-5 w-full">
          <div className="flex flex-col items-center sm:justify-center justify-start w-full">
            <Text
              className="text-blue_gray-900 text-xl"
              size="txtPoppinsMedium20"
            >
              Hello, I’m
            </Text>
            <Text
              className="sm:flex sm:flex-row sm:justify-center mt-[9px] sm:text-[33px] md:text-[38px] text-[40px] text-blue_gray-900"
              size="txtPoppinsSemiBold40"
            >
              Agaspar Adrian Latayada
            </Text>
            <Text
              className="mt-[3px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900"
              size="txtPoppinsSemiBold30"
            >
              UX/UI Designer & Developer
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-center mt-[26px] w-3/4 md:w-full">
            <Button className="border border-blue_gray-900 border-solid cursor-pointer font-medium leading-[normal] min-w-[183px] text-[15px] text-center">
              Download CV
            </Button>
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[189px] text-[15px] text-center"
              color="blue_gray_900"
            >
              Contact Info
            </Button>
          </div>
          <div className="flex flex-row gap-[21px] items-center justify-center mt-[17px] w-1/5 md:w-full">
            <Img
              className="h-10 rounded-[50%] w-10"
              src="images/img_mdilinkedin.svg"
              alt="mdilinkedin"
            />
            <Img
              className="h-10 w-10"
              src="images/img_mdigithub.svg"
              alt="mdigithub"
            />
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-start mt-[251px] p-[125px] md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-5 items-center justify-center max-w-[959px] mx-auto w-full">
            <Img
              className="h-[350px] md:h-auto rounded-[50%] w-[350px]"
              src="images/img_rectangle8.png"
              alt="rectangleEight"
            />
            <div className="flex md:flex-1 flex-col items-center justify-start w-[62%] md:w-full">
              <div className="flex flex-col gap-3 md:items-center items-start justify-start w-full">
                <Text
                  className="capitalize text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                  size="txtPoppinsBlack24"
                >
                  PROFILE
                </Text>
                <Text
                  className="capitalize text-base text-blue_gray-900 text-justify w-full"
                  size="txtPoppinsRegular16"
                >
                  <>
                    I&#39;m an aspiring UX designer specialize as generalist.
                    Also I’m an web developer specialize in
                    front-endtechnologies dedicated in building efficient and
                    seamless web applications designs. Proficient in HTML,CSS,
                    JavaScript and ReactJS framework. Then with my adaptability
                    and willing to learn person, I thrive incollaborative
                    working environment.
                  </>
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-start p-[103px] md:px-10 sm:px-5 w-full">
          <div className="flex sm:flex-col flex-row sm:gap-5 md:gap-[30px] sm:items-center items-start md:items-start justify-center max-w-[953px] mx-auto w-full">
            <div className="flex sm:flex-1 flex-col gap-3.5 md:items-center items-start md:justify-center justify-start w-1/4 sm:w-full">
              <Text
                className="capitalize text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                size="txtPoppinsBlack24"
              >
                EDUCATION
              </Text>
              <div className="flex flex-col md:items-center items-start sm:justify-center justify-start w-full">
                <Text
                  className="capitalize text-blue_gray-900 text-lg"
                  size="txtPoppinsMedium18"
                >
                  Computer Science{" "}
                </Text>
                <Text
                  className="capitalize mt-[3px] text-base text-blue_gray-900"
                  size="txtPoppinsLight16"
                >
                  Holy Trinity College of Gensan
                </Text>
                <Text
                  className="capitalize text-blue_gray-900 text-sm"
                  size="txtPoppinsMedium14"
                >
                  2021 - Present
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-col gap-3 md:items-center items-start sm:justify-center justify-start sm:ml-[0] ml-[70px] w-[24%] sm:w-full">
              <Text
                className="capitalize text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                size="txtPoppinsBlack24"
              >
                tOOLKIT
              </Text>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[5px] md:items-center items-start md:justify-center justify-start w-full">
                  <div className="flex flex-row gap-[25px] md:items-center items-start md:justify-center justify-start w-full">
                    <Text
                      className="capitalize mb-0.5 text-blue_gray-900 text-lg"
                      size="txtPoppinsMedium18"
                    >
                      Frontend
                    </Text>
                    <Text
                      className="capitalize mt-0.5 text-blue_gray-900 text-lg"
                      size="txtPoppinsMedium18"
                    >
                      UX Designing
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[15px] sm:gap-[30px] md:items-center items-start sm:items-start md:justify-center justify-start w-[88%] md:w-full">
                    <Text
                      className="capitalize text-base text-blue_gray-900"
                      size="txtPoppinsLight16"
                    >
                      <>
                        Javascript
                        <br />
                        ReactJS
                        <br />
                        HTML
                        <br />
                        CSS
                      </>
                    </Text>
                    <Text
                      className="capitalize text-base text-blue_gray-900"
                      size="txtPoppinsLight16"
                    >
                      <>
                        Adobe XD
                        <br />
                        Canva
                        <br />
                        Figma
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-col gap-3 md:items-center items-start md:justify-center justify-start sm:ml-[0] ml-[71px] w-[37%] sm:w-full">
              <Text
                className="capitalize text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                size="txtPoppinsBlack24"
              >
                SKILLS
              </Text>
              <div className="flex flex-row gap-3 items-center md:justify-center justify-start w-full">
                <Text
                  className="capitalize text-base text-blue_gray-900"
                  size="txtPoppinsLight16"
                >
                  <>
                    Frontend Coding
                    <br />
                    Website Auditing
                    <br />
                    Responsive Web
                    <br />
                    Version Control
                    <br />
                    Debugging
                    <br />
                    Research
                  </>
                </Text>
                <Text
                  className="capitalize text-base text-blue_gray-900"
                  size="txtPoppinsLight16"
                >
                  <>
                    ArchitectureInformation
                    <br />
                    Problem Solving
                    <br />
                    Resourceful
                    <br />
                    Prototyping
                    <br />
                    UI Design
                    <br />
                    Curious
                  </>
                </Text>
              </div>
            </div>
          </div>
        </div>
        <LandingPageColumnThree className="bg-white-A700 flex flex-col items-center justify-start p-[101px] md:px-10 sm:px-5 w-full" />
        <div className="bg-white-A700 flex flex-col items-center justify-start p-[126px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[954px] mx-auto w-full">
            <div className="sm:gap-5 md:gap-[30px] gap-[97px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
              <div className="flex flex-1 flex-col gap-[15px] md:h-full md:items-center items-start md:justify-center justify-start w-full">
                <div className="sm:flex sm:flex-col md:h-12 sm:h-[51px] h-[58px] sm:items-start sm:justify-start relative w-[89%] sm:w-full">
                  <div className="absolute bottom-[0] flex flex-row gap-2.5 md:gap-[0] inset-x-[0] md:items-center items-start justify-between md:justify-center mx-auto w-[96%] md:w-full">
                    <div className="flex flex-row gap-[7px] items-start justify-start">
                      <Img
                        className="h-5 md:h-auto object-cover w-[11%]"
                        src="images/img_logo2removebgpreview.png"
                        alt="logo2removebgpr"
                      />
                      <Text
                        className="capitalize mt-[3px] text-blue_gray-900 text-sm w-full"
                        size="txtPoppinsRegular14"
                      >
                        KodeGo Coding Bootcamp
                      </Text>
                    </div>
                    <Text
                      className="capitalize mt-[3px] text-blue_gray-900 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      January - July 2023
                    </Text>
                  </div>
                  <Text
                    className="absolute capitalize inset-x-[0] mx-auto text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl top-[0] w-max"
                    size="txtPoppinsMedium24"
                  >
                    FULL STACK WEB DEVELOPMENT
                  </Text>
                </div>
                <Text
                  className="text-base text-blue_gray-900"
                  size="txtPoppinsRegular16"
                >
                  <>
                    Understanding the basics of web development
                    <br />
                    Learned the frontend languages and frameworks
                    <br />
                    Learned the backend SQL and PHP
                    <br />
                    Database integration
                    <br />
                    Build 2 mini technical projects as individual
                    <br />
                    Build capstone as a group
                  </>
                </Text>
              </div>
              <div className="flex flex-1 flex-col items-center md:justify-center justify-start w-full">
                <Text
                  className="capitalize text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                  size="txtPoppinsMedium24"
                >
                  GOOGLE UX DESIGN CERTIFICATION
                </Text>
                <div className="flex flex-row gap-[0] md:gap-[25px] md:items-center items-start justify-between md:justify-center sm:w-[84%] w-[95%] md:w-full">
                  <div className="flex flex-row gap-2 items-start justify-start">
                    <Img
                      className="h-5 md:h-auto object-cover w-5"
                      src="images/img_5847f9cbcef1014c0b5e48c8.png"
                      alt="5847f9cbcef1014"
                    />
                    <Text
                      className="capitalize mt-0.5 text-blue_gray-900 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      google Coursera
                    </Text>
                  </div>
                  <Text
                    className="capitalize mt-0.5 text-blue_gray-900 text-sm"
                    size="txtPoppinsRegular14"
                  >
                    September - November 2023
                  </Text>
                </div>
                <Text
                  className="mt-3.5 text-base text-blue_gray-900"
                  size="txtPoppinsRegular16"
                >
                  <>
                    Understanding all the design phases
                    <br />
                    Empathize with the user by gathering data
                    <br />
                    Defining the problem of the website
                    <br />
                    Ideate the possible solutions of the problem
                    <br />
                    Making user flows and information architecture
                    <br />
                    Making the low-fidelity and high-fidelity design
                    <br />
                    Prototyping
                  </>
                </Text>
              </div>
              <div className="flex flex-1 flex-col md:items-center items-start md:justify-center justify-start w-full">
                <Text
                  className="capitalize text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                  size="txtPoppinsMedium24"
                >
                  MEDGROCER: UX APPRENTICESHIP
                </Text>
                <div className="flex flex-row gap-2.5 md:gap-[0] md:items-center items-start md:justify-center justify-start w-[98%] md:w-full">
                  <div className="flex flex-row gap-[5px] items-center justify-start md:justify-start md:w-[28%] w-[43%]">
                    <Img
                      className="h-5 sm:h-auto object-cover md:w-5 sm:w-[17%] w-[21%]"
                      src="images/img_kadakareerlogo.png"
                      alt="kadakareerlogo"
                    />
                    <Text
                      className="capitalize text-blue_gray-900 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      KadaKareer
                    </Text>
                  </div>
                  <Text
                    className="capitalize text-blue_gray-900 text-sm"
                    size="txtPoppinsRegular14"
                  >
                    September 2023
                  </Text>
                </div>
                <Text
                  className="mt-3.5 text-base text-blue_gray-900"
                  size="txtPoppinsRegular16"
                >
                  <>
                    Making website auditing
                    <br />
                    Competitor analysis
                    <br />
                    Making user flows and information architecture
                    <br />
                    Making the high-fidelity design
                    <br />
                    Prototyping
                  </>
                </Text>
              </div>
              <div className="flex flex-1 flex-col md:items-center items-start md:justify-center justify-start w-full">
                <Text
                  className="capitalize text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                  size="txtPoppinsMedium24"
                >
                  MERON: UX APPRENTICESHIP
                </Text>
                <div className="flex flex-row gap-2.5 items-center md:justify-center justify-start w-full">
                  <div className="flex flex-row gap-[5px] items-center justify-start md:w-[14%] w-[35%]">
                    <Img
                      className="h-5 sm:h-auto object-cover w-1/5 md:w-5"
                      src="images/img_kadakareerlogo.png"
                      alt="kadakareerlogo"
                    />
                    <Text
                      className="capitalize text-blue_gray-900 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      KadaKareer
                    </Text>
                  </div>
                  <Text
                    className="capitalize text-blue_gray-900 text-sm"
                    size="txtPoppinsRegular14"
                  >
                    October - November 2023
                  </Text>
                </div>
                <Text
                  className="mt-4 text-base text-blue_gray-900"
                  size="txtPoppinsRegular16"
                >
                  <>
                    Making website auditing
                    <br />
                    Competitor analysis
                    <br />
                    Make case study
                    <br />
                    Interviewing target users
                    <br />
                    Ideating data gathered in the interview for solutions
                    <br />
                    Making user flows and information architecture
                    <br />
                    Making the low-fidelity and high-fidelity design
                    <br />
                    Prototyping
                  </>
                </Text>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-white-A700 flex items-center justify-center md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[88px] items-center justify-center mb-[53px] ml-[243px] mr-52 mt-[57px] w-[69%]">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[74px] items-start justify-start w-[84%] md:w-full">
              <Text
                className="md:text-5xl sm:text-[31px] text-[80px] text-blue_gray-900 w-4/5 md:w-[85%] sm:w-full"
                size="txtPoppinsRegular80"
              >
                Let’s start a project together
              </Text>
              <Img
                className="h-[100px] md:h-auto md:mt-0 mt-[108px] rounded-[50%] w-[100px]"
                src="images/img_rectangle9.png"
                alt="rectangleNine"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-[30px] items-start justify-start md:mt-0 mt-[9px] w-[67%] md:w-full">
                <div className="flex flex-col gap-[22px] items-start justify-start w-full">
                  <Line className="bg-blue_gray-900 h-px w-full" />
                  <div className="flex flex-col gap-[11px] items-start justify-start">
                    <Text
                      className="text-black-900 text-lg"
                      size="txtPoppinsRegular18"
                    >
                      What’s my your name?
                    </Text>
                    <Text
                      className="sm:text-[13px] text-blue_gray-700 text-sm"
                      size="txtPoppinsRegular14Bluegray700"
                    >
                      Enter your name *
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[31px] items-start justify-start w-full">
                  <Line className="bg-blue_gray-900 h-px w-full" />
                  <div className="flex flex-col gap-[11px] items-start justify-start">
                    <Text
                      className="text-black-900 text-lg"
                      size="txtPoppinsRegular18"
                    >
                      What’s your email?
                    </Text>
                    <Text
                      className="sm:text-[13px] text-blue_gray-700 text-sm"
                      size="txtPoppinsRegular14Bluegray700"
                    >
                      Enter your email *
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-8 items-start justify-start w-full">
                  <Line className="bg-blue_gray-900 h-px w-full" />
                  <div className="flex flex-col gap-[11px] items-start justify-start">
                    <Text
                      className="text-black-900 text-lg"
                      size="txtPoppinsRegular18"
                    >
                      What services are you looking for?
                    </Text>
                    <Text
                      className="sm:text-[13px] text-blue_gray-700 text-sm"
                      size="txtPoppinsRegular14Bluegray700"
                    >
                      Web design, Frontend development ...*
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-8 items-start justify-start w-full">
                  <Line className="bg-blue_gray-900 h-px w-full" />
                  <div className="flex flex-col gap-2.5 items-start justify-start">
                    <Text
                      className="text-black-900 text-lg"
                      size="txtPoppinsRegular18"
                    >
                      Your message
                    </Text>
                    <Text
                      className="sm:text-[13px] text-blue_gray-700 text-sm"
                      size="txtPoppinsRegular14Bluegray700"
                    >
                      Hello Agaspar, can you help me with ...*
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-900 h-px w-full" />
                </div>
                <Button className="!text-black-900 border border-blue_gray-900 border-solid cursor-pointer leading-[normal] min-w-[183px] text-[15px] text-center">
                  Send
                </Button>
              </div>
              <div className="flex md:flex-1 flex-col gap-[34px] items-start justify-start w-[27%] md:w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-[11px] text-blue_gray-700"
                    size="txtPoppinsRegular11"
                  >
                    CONTACT DETAILS
                  </Text>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-sm"
                      size="txtPoppinsRegular14Black900"
                    >
                      agasparadrianlatayada@gmail.com
                    </Text>
                    <Text
                      className="mt-1 text-black-900 text-sm"
                      size="txtPoppinsRegular14Black900"
                    >
                      09271150324
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-[73%] md:w-full">
                  <Text
                    className="text-[11px] text-blue_gray-700"
                    size="txtPoppinsRegular11"
                  >
                    LOCATION
                  </Text>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-sm"
                      size="txtPoppinsRegular14Black900"
                    >
                      General Santos, Philippines
                    </Text>
                    <Text
                      className="mt-1 text-black-900 text-sm"
                      size="txtPoppinsRegular14Black900"
                    >
                      9500
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start w-[29%] md:w-full">
                  <Text
                    className="text-[11px] text-blue_gray-700"
                    size="txtPoppinsRegular11"
                  >
                    SOCIALS
                  </Text>
                  <ul className="flex flex-col items-start justify-start w-[73px] md:w-full common-column-list">
                    <li>
                      <a href="javascript:" className="text-black-900 text-sm">
                        <Text size="txtPoppinsRegular14Black900">Facebook</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-2 text-black-900 text-sm"
                      >
                        <Text size="txtPoppinsRegular14Black900">
                          Instagram
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[3px] text-black-900 text-sm"
                      >
                        <Text size="txtPoppinsRegular14Black900">LinkedIn</Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingpagePage;
