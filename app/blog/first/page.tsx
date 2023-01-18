import React from "react";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import Image from "next/image";
import image1 from "/1.jpeg";
import image2 from "/2.jpeg";
import image3 from "/3.jpeg";
import Link from "next/link";

const firstBlog = () => {
  return (
    <div className="bg-[url('')]   leading-8 text-xl">
      <Image
        width={1000}
        height={1000}
        className=" bg-cover object-cover w-full h-[503px]"
        src="https://images.unsplash.com/photo-1578886141033-b9f066572135?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt=""
      />
      <div className="absolute  top-[40%] left-0   px-10 w-[470px] text-white text-4xl ">
        <p>tribute to jesse schmoe</p>
        <p>cofounder of v18</p>
        <p>2019</p>
        <p className="text-sm mt-10">25 march 2021</p>
      </div>

      <div className="max-w-[720px]  mx-auto ">
        <p className="mb-5 mt-10 font-light">Written by Sophi Rutherford</p>
        <p className="mb-5">
          The rental industry becomes a bit of a complex conversation when it
          comes to environmental impact and company ethics. V18 Rentals aims to
          be the pillar of the outdoor rental industry, aiming to have a carbon
          neutral, and eventually carbon negative footprint.
        </p>
        <p className="mb-10">
          As a rental company, we are responsible for the waste we create, as
          well as the impact that has on the environment. Picking companies to
          work with that are environmentally friendly and actively taking steps
          to better their practices is always a priority. Companies like Organic
          Climbing, The North Face, Patagonia and Kelty, we prefer to support
          because we respect their ethos as well as their duty to create gear
          that will stay out of the landfills.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Image alt="" width={720} height={500} src={image1} />
      </div>
      <div className="max-w-[720px] mx-auto">
        <p>
          Partnering with companies that make long lasting, durable gear that
          can take a beating, provides us with the confidence that we can keep
          outdoor gear out of the landfill for as long as possible. The longer
          an item can be in use and stay functional, including after a repair,
          the less we contribute to the landfills. Companies like Patagonia and
          The North Face refurbish their gear and make easy repairs possible
          with a lifetime warranty for regular customers. With this kind of
          industry, we can expect normal wear and tear including tears, holes
          and regular signs of gear love. However, something that sets good gear
          apart, is the ease of repair as well as the ability to create a
          lasting repair. Some materials used by companies are tough to repair,
          and can be close to impossible with thinning material. Others,
          including The North Face tents, use ripstop material, making it easier
          to repair, and the patches we may need to use will last longer as well
          as be effective. By renting out equipment that can take a beating by a
          top athlete or weekend warrior, we ensure that products will be used
          and abused as long as possible.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Image width={720} height={500} src={image2} alt="" />
      </div>
      <div className="max-w-[720px] mx-auto">
        <p>
          A rental company that delivers is also more environmentally conscious.
          So consider this idea friends...if ten people drive to a rental store
          like REI or Sports Basement, they have to drive and find parking, then
          drive home and then finally to their destination. If ten people get
          their gear delivered, we link routes on deliveries and only one car
          makes a shorter line. That way, there is only one car on the road
          delivering rentals, (currently a Prius) and the drive to the
          destination is the only path with individual vehicles. Using vehicles
          that have a minimal environmental impact as well as linking delivery
          routes will greatly decrease our carbon footprint, and help propel us
          towards our goal of being a carbon neutral to then carbon negative
          rental company. As a company, we have the responsibility of choosing
          companies we want to support and give our business to. Companies like
          Patagonia also give back to the environment through many ways, and
          utilize organic cotton or recycled products to make their gear more
          eco friendly, and often without compromising durability. As a company
          that will be representing brands, we want to ensure we feel good about
          the equipment and gear we rent out. As customers go to eventually
          purchase their own gear, we want to help make sure that eco friendly,
          well run, and reputable companies are the ones we represent. As
          community members in the outdoor industry for many years, we watch
          companies supporting BIPOC and LGBTQ+ communities and creating more
          representation. We see companies evolve and step up or step down. We
          strive to step up, and build a business that makes a change in the
          industry and sets a new industry standard.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Image width={720} height={500} src={image3} alt="" />
      </div>
      <div className="max-w-[720px] mx-auto">
        <p>
          Our fearless leader Scott Elfstrom is working hard to create an
          environmentally friendly business and is striving towards a carbon
          neutral footprint, and eventually carbon negative footprint as a
          realistic goal for V18 Rentals. We have steps set in place, and have
          been supporting businesses that align with our ethos. With keeping
          these values in mind, we work towards setting new standards for the
          outdoor industry, and fostering a long term business plan that can
          make us a sustainable company, and make the outdoors accessible for
          everyone, no matter their situation.
        </p>
      </div>
      <div className="flex items-center justify-center m-10 flex-col">
        <p>More from V18</p>
        <Link href="/blog/second">
          <Image width={720} height={100} src={image3} alt="" className="shadow hover:shadow-2xl h-[500px] object-cover" />
        </Link>
      </div>
      
    </div>
  );
};

export default firstBlog;
