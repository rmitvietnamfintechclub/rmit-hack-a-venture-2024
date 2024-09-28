import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="py-[50px] px-[20px] border-t-[1px] border-solid border-[#1F2937] flex flex-col gap-[80px] lg:items-center">
      <section className="w-full flex flex-col gap-[50px] lg:flex-row lg:justify-around">
      <SocialMediaList />
      <OrganizerList />
      <ContactList />
      </section>
      <div className="text-[#9da3af]">© Hack-a-thon 2024, All Rights Reserved</div>
    </footer>
  );
};

const SocialMediaList = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      {/*--------- text effect ---------*/}
      <div className="relative">
        <h2 className="inline-block text-[#C93FDD] text-[18px] font-semibold">
          Our Socials
        </h2>
        <span
          className="absolute bottom-0 left-0 w-[120px] h-[2px]"
          style={{
            background:
              "linear-gradient(to right, #a64ce0, rgba(166, 76, 224, 0.5), transparent)",
          }}
        ></span>
      </div>

      {/*---------------------------- icon link section ---------------------*/}
      <div className="flex gap-[20px]">
        <a
          href=""
          className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center"
        >
          <TiSocialFacebook className="w-full h-full text-black" />
        </a>
        <a
          href=""
          className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center"
        >
          <IoLogoInstagram className="w-[80%] h-[80%] text-black" />
        </a>
        <a
          href=""
          className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center"
        >
          <FaLinkedinIn className="w-[50%] h-[50%] text-black" />
        </a>
      </div>
    </div>
  );
};

const OrganizerList = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      {/*--------- text effect ---------*/}
      <div className="relative">
        <h2 className="inline-block text-[#C93FDD] text-[18px] font-semibold">
          Organisers
        </h2>
        <span
          className="absolute bottom-0 left-0 w-[120px] h-[2px]"
          style={{
            background:
              "linear-gradient(to right, #a64ce0, rgba(166, 76, 224, 0.5), transparent)",
          }}
        ></span>
      </div>

      {/*---------------------------- organizers list section ---------------------*/}
      <div className="flex flex-col gap-[20px]">
        <div className="flex gap-[15px] items-center">
          <img
            className="w-[60px] h-[60px]"
            src="/alignVerticalLogo.svg"
            alt="fintech logo"
          />
          <h2 className="text-[18px]">RMIT Vietnam Fintech Club</h2>
        </div>

        <div className="flex gap-[15px] items-center">
          <img
            className="w-[60px] h-[60px]"
            src="/alignVerticalLogo.svg"
            alt="fintech logo"
          />
          <h2 className="text-[18px]">chainLink</h2>
        </div>
      </div>
    </div>
  );
};
const ContactList = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      {/*--------- text effect ---------*/}
      <div className="relative">
        <h2 className="inline-block text-[#C93FDD] text-[18px] font-semibold">
          Contacts
        </h2>
        <span
          className="absolute bottom-0 left-0 w-[95px] h-[2px]"
          style={{
            background:
              "linear-gradient(to right, #a64ce0, rgba(166, 76, 224, 0.5), transparent)",
          }}
        ></span>
      </div>

      {/*---------------------------- contact list section ---------------------*/}
      <div className="flex flex-col gap-[20px]">
        <div className="flex gap-[15px] items-start lg:items-center">
          <BiSolidPhoneCall className="text-[24px] mt-[5px] lg:m-0" />
          <div className="text-[16px]">
            <div>
              <span> Nguyen Manh Dung </span>
              <span className="text-[#9da3af] hidden lg:inline"> - </span>
              <span className="text-[#9da3af] block lg:inline">Co-project leader</span>
            </div>
            <p>03535343434</p>
          </div>
        </div>
        <div className="flex gap-[15px] items-start lg:items-center">
          <BiSolidPhoneCall className="text-[24px] mt-[5px] lg:m-0" />
          <div className="text-[16px]">
            <div>
              <span>Hoang Nguyen Nhat Minh</span>
              <span className="text-[#9da3af] hidden lg:inline"> - </span>
              <span className="text-[#9da3af] block lg:inline">Co-project leader</span>
            </div>
            <p>03535343434</p>
          </div>
        </div>
        <div className="flex gap-[15px] items-center">
          <MdEmail className="text-[24px]" />
          <p className="text-[16px]">rmitfintech123@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
