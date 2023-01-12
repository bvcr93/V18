import React from "react";
import ClimbingSectionPics from "../../components/ClimbingSectionPics";
import EquipmentHeader from "../../components/EquipmentHeader";
import LandingSectionNav from "../../components/LandingSectionNav";
import LandingSectionPics from "../../components/LandingSectionPics";
import ProductCard from "../../components/ProductCard";

const Climbing = () => {
  return (
    <div className="max-w-[80%] mx-auto ">
      <EquipmentHeader
        text=""
        headerCategory={"Equipment/Climbing"}
        category={"Climbing"}
      />
      <LandingSectionNav title="Crash Pads" />
      <ClimbingSectionPics>
        <ProductCard
          src="https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L7-1?t=1607738237111094"
          text={"hello"}
          className={
            " xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl"
          }
        />
        <ProductCard
          src="https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L8-1?t=1607738201887284"
          text={"hello"}
          className={
            " xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl"
          }
        />
        <ProductCard
          src="https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L232-1?t=1607911635096340"
          text={"hello"}
          className={
            " xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl"
          }
        />
        <ProductCard
          src=""
          text={""}
          className={
            " xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white "
          }
        />
      </ClimbingSectionPics>

      {/* <LandingSectionPics
   

          src1="https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L7-1?t=1607738237111094"
          src2={
            "https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L8-1?t=1607738201887284"
          }
          src3={
            "https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L232-1?t=1607911635096340"
          }
         
          price1={20}
          price2={30}
          price3={3}
          
          title1 = "Organic Big Pad" 
          title2="Organic Simple Pad" 
          title3="Organic Load Flap" 
          
        />
         <LandingSectionNav title='Brushes'/>
        <LandingSectionPics
  
          src1="https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L150-1?t=1607901879503845"
          src2={
            "https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L148-1?t=1607911446651677"
          }
        
         
          price1={3}
          price2={1}
    
          
          title1 = "deWoodstok Extendable Hold Brush" 
          title2="DeWoodstok Hold Brush" 
        
          
        /> */}
      <LandingSectionNav title="Brushes" />
      <ClimbingSectionPics>
        <ProductCard
          src="https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L7-1?t=1607738237111094"
          text={"hello"}
          className={
            " xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl"
          }
        />
        <ProductCard
          src="https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L8-1?t=1607738201887284"
          text={"hello"}
          className={
            " xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl"
          }
        />
        <ProductCard
          src=""
          text={""}
          className={
            "xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white "
          }
        />
        <ProductCard
          src=""
          text={""}
          className={
            "  mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white"
          }
        />
      </ClimbingSectionPics>
      <LandingSectionNav title="Lighting" />
      <ClimbingSectionPics>
      <ProductCard
          src="https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L7-1?t=1607738237111094"
          text={"hello"}
          className={
            " xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl"
          }
        />
      <ProductCard
          src=""
          text={""}
          className={
            "  mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white "
          }
        />
      <ProductCard
          src=""
          text={""}
          className={
            "  mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white "
          }
        />
      <ProductCard
          src=""
          text={""}
          className={
            "  mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white "
          }
        />
      </ClimbingSectionPics>
      <LandingSectionNav title="Guide Books" />
      <ClimbingSectionPics>
      <ProductCard
          src="https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L7-1?t=1607738237111094"
          text={"hello"}
          className={
            " xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl"
          }
        />
        <ProductCard
          src="https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L8-1?t=1607738201887284"
          text={"hello"}
          className={
            " xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl"
          }
        />
      <ProductCard
          src="https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L7-1?t=1607738237111094"
          text={"hello"}
          className={
            " xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl"
          }
        />
        <ProductCard
          src="https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L8-1?t=1607738201887284"
          text={"hello"}
          className={
            " xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl"
          }
        />
       
      

      </ClimbingSectionPics>
      <ClimbingSectionPics>
      <ProductCard
          src="https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L7-1?t=1607738237111094"
          text={"hello"}
          className={
            " xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl"
          }
        />
        <ProductCard
          src="https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L8-1?t=1607738201887284"
          text={"hello"}
          className={
            " xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl"
          }
        />
        <ProductCard
          src=""
          text={""}
          className={
            "xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white "
          }
        />
        <ProductCard
          src=""
          text={""}
          className={
            "  mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white"
          }
        />
      </ClimbingSectionPics>
    </div>
  );
};

export default Climbing;
