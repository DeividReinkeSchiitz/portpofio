import Text from "@/app/components/Text";
import Image from "next/image";
import website_svg from "@/../public/website.svg";
import phone_svg from "@/../public/phone.svg";
import battery_svg from "@/../public/battery.svg";
import OthersList from "@/app/components/OthersList";

export default function Websites() {
  return (
      <div className="flex flex-col items-center text-center justify-center ">
          {/* TITLE */}
          <div className={`flex relative items-center text-center justify-center flex-col mt-10 mb-10`}>
              <Image
                  src={phone_svg} alt="Phone"
                  className={"absolute w-10 h-10 md:w-16 md:h-16 top-[-38] right-10 md:right-0 "}
              />
              <Image
                  src={website_svg} alt="Website Projects"
                  className={"absolute w-10 h-10 md:w-16 md:h-16 bottom-[-20] md:bottom-[-80] left-[-30] "}
              />
              <Image
                  src={battery_svg} alt="Battery"
                  className={"absolute w-10 h-10 md:w-16 md:h-16 bottom-20 md:top-[-40] left-[-10] "}
              />

              <div className={`flex items-center justify-center  w-full`}>
                  <Text className="md:text-3xl sm:text-2xl font-bold ">
                          Other Projects
                  </Text>
              </div>

              <Text className={`text-center sm:text-xl mt-2 ml-10 mr-10 font-medium`}>
                  I&#39;ve built websites using anything from React, <br/>
                  Firebase and Node.js, Here are some of my favorite <br/>
                  projects over the course of my journey.
              </Text>
          </div>


          <OthersList/>

      </div>
  );
}
