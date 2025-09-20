import { HEROIMAGESRC } from "@/constants";
import FilterSection from "@/components/common/FilterSection";
import Card from "@/components/common/Card";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

export default function Home() {
  return (
    <>
    <section className="mt-8 mx-10">
      <div
        className="flex justify-center items-center text-white bg-cover bg-center h-[421px] 2xl:h-[481px] rounded-[27px]"
        style={{ backgroundImage: `url(${HEROIMAGESRC})` }}
      >
        <div className="flex flex-col justify-center items-center max-w-[633px] text-center px-5">
          <h3 className="text-[69px] 2xl:text-[94px] font-semibold leading-[72px] 2xl:leading-[99px]">
            Find your favorite place here!
          </h3>
          <p className="text-[18px] 2xl:text-[24px] font-medium leading-[100%] 2xl:leading-[32px] mt-4">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </div>
    </section>

    <section className="py-8 px-[40px]">
      <FilterSection />
    </section>

    <section>
      <div className="mx-[30px] grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-y-8">
        {PROPERTYLISTINGSAMPLE.map((property, index)=>(
          <Card key={index} {...property}/>
        ))}
      </div>
    </section>
    </>
  );
}
