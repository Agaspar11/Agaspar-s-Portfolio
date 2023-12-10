import React from "react";

import { Line, List, Text } from "components";

const LandingPageColumnThree = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-14 items-center justify-start mb-[98px] w-[78%] md:w-full">
          <div className="flex flex-row gap-4 items-start md:items-start justify-center w-[28%] md:w-full">
            <div className="flex flex-col items-center justify-start md:w-[15%] w-[47%]">
              <Text
                className="text-2xl md:text-[22px] text-blue-400 sm:text-xl uppercase"
                size="txtPoppinsMedium24Blue400"
              >
                {props?.frontendtext}
              </Text>
              <Line className="bg-blue-400 h-[3px] mt-[3px] w-full" />
            </div>
            <Text
              className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl uppercase"
              size="txtPoppinsMedium24"
            >
              {props?.uxdesign}
            </Text>
          </div>
          <List
            className="md:flex md:flex-col flex-row gap-[27px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center md:w-1/2 w-full"
            orientation="horizontal"
          >
            <div className="bg-gray-50 border border-black-900 border-solid flex flex-1 flex-col items-center justify-start p-[25px] sm:px-5 rounded-[20px] w-full">
              <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                <div className="bg-gray-900 h-[210px] rounded-[16px] w-full"></div>
                <div className="bg-gray-900 flex flex-col items-center justify-end p-[15px] rounded-[16px] w-full">
                  <div className="flex flex-col gap-2.5 items-start justify-start">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl uppercase"
                      size="txtPoppinsMedium24WhiteA700"
                    >
                      {props?.medgrocertext}
                    </Text>
                    <Text
                      className="text-white-A700 text-xs w-full"
                      size="txtPoppinsMedium12"
                    >
                      {props?.aonlinepharmacytext}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 border border-black-900 border-solid flex flex-1 flex-col items-center justify-start p-[25px] sm:px-5 rounded-[20px] w-full">
              <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                <div className="bg-gray-900 h-[210px] rounded-[16px] w-full"></div>
                <div className="bg-gray-900 flex flex-col items-center justify-end p-[15px] rounded-[16px] w-full">
                  <div className="flex flex-col gap-2.5 items-start justify-start">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl uppercase"
                      size="txtPoppinsMedium24WhiteA700"
                    >
                      {props?.medgrocertext1}
                    </Text>
                    <Text
                      className="text-white-A700 text-xs w-full"
                      size="txtPoppinsMedium12"
                    >
                      {props?.aonlinepharmacytext1}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 border border-black-900 border-solid flex flex-1 flex-col items-center justify-start p-[25px] sm:px-5 rounded-[20px] w-full">
              <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                <div className="bg-gray-900 h-[210px] rounded-[16px] w-full"></div>
                <div className="bg-gray-900 flex flex-col items-center justify-end p-[15px] rounded-[16px] w-full">
                  <div className="flex flex-col gap-2.5 items-start justify-start">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl uppercase"
                      size="txtPoppinsMedium24WhiteA700"
                    >
                      {props?.medgrocertext2}
                    </Text>
                    <Text
                      className="text-white-A700 text-xs w-full"
                      size="txtPoppinsMedium12"
                    >
                      {props?.aonlinepharmacytext2}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

LandingPageColumnThree.defaultProps = {
  frontendtext: "Frontend",
  uxdesign: "UX Design",
  medgrocertext: "Medgrocer",
  aonlinepharmacytext:
    "A online pharmacy where the buyer can buy and order medicines",
  medgrocertext1: "Medgrocer",
  aonlinepharmacytext1:
    "A online pharmacy where the buyer can buy and order medicines",
  medgrocertext2: "Medgrocer",
  aonlinepharmacytext2:
    "A online pharmacy where the buyer can buy and order medicines",
};

export default LandingPageColumnThree;
