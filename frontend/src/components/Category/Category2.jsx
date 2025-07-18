import Image1 from "../../assets/category/gaming.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/speaker.png";
import Button from "../Shared/Button";

export const Category2 = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div
          className="grid grid-cols-1 
          sm:grid-cols-2 lg:grid-cols-4 gap-8 min-w-[370px]  mx-auto"
        >
          {/* first Col */}
          <div
            className="col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90
            ,90 to-gray-100 text-white rounded-3xl relative h-[320px]
             flex items-end"
          >
            <div>
              <div className="mb-4  flex flex-col ">
                <p className="mb-[2px] text-white">EnJoy</p>
                <p className="text-2xl font-semibold mb-[2px] ">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2 pb-2">
                  Laptop
                </p>
                <Button
                  text={"Browse"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={Image1}
              className="w-[300px] absolute top-1/2 -translate-y-1/2 -right-0"
              alt=""
            />
          </div>
          {/* second Col */}
          <div
            className="py-12 pl-5 bg-gradient-to-br from-brandGreen
            ,90 to-brandGreen/90 text-white rounded-3xl relative h-[320px] 
            min-w-[180px] flex items-start"
          >
            <div>
              <div className="mb-6">
                <p className="mb-[2px] text-white">EnJoy</p>
                <p className="text-2xl font-semibold mb-[2px] ">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2 pb-3">
                  Earphone
                </p>
                <Button
                  text={"Browse"}
                  bgColor={"bg-white"}
                  textColor={"text-brandGreen"}
                />
              </div>
            </div>
            <img src={Image2} className="w-[320px] absolute bottom-0" alt="" />
          </div>
          {/* third Col */}
          <div
            className="py-12 pl-5 bg-gradient-to-br from-brandBlue
            ,90 to-brandBlue/90 text-white rounded-3xl relative
             h-[320px] flex items-start min-w-[180px]"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">EnJoy</p>
                <p className="text-2xl font-semibold mb-[2px] ">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2 pb-3">
                  Gadget
                </p>
                <Button
                  text={"Browse"}
                  bgColor={"bg-white"}
                  textColor={"text-brandBlue"}
                />
              </div>
            </div>
            <img
              src={Image3}
              className="w-[200px] absolute bottom-0 right-0 "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
