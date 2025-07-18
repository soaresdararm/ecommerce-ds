import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/macbook.png";
import Button from "../Shared/Button";

export const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div
          className="grid grid-cols-1 
          sm:grid-cols-2 lg:grid-cols-4 gap-8 min-w-[370px]  mx-auto"
        >
          {/* first Col */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-black
            ,90 to-black/70 text-white rounded-3xl relative h-[320px] min-w-[180px] flex items-end"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">EnJoy</p>
                <p className="text-2xl font-semibold mb-[2px] ">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Earphone
                </p>
                <Button
                  text={"Browse"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img src={Image1} className="w-[320px] absolute bottom-0" alt="" />
          </div>
          {/* second Col */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-brandYellow
            ,90 to-brandYellow/90 text-white rounded-3xl relative
             h-[320px] flex items-end min-w-[180px]"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">EnJoy</p>
                <p className="text-2xl font-semibold mb-[2px] ">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Gadget
                </p>
                <Button
                  text={"Browse"}
                  bgColor={"bg-white"}
                  textColor={"text-brandYellow"}
                />
              </div>
            </div>
            <img
              src={Image2}
              className="w-[250px] absolute -right-8 lg:top-[20px]  top-5 "
              alt=""
            />
          </div>
          {/* third Col */}
          <div
            className="col-span-2 py-10 pl-5 bg-gradient-to-br from-primary
            ,90 to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">EnJoy</p>
                <p className="text-2xl font-semibold mb-[2px] ">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Laptop
                </p>
                <Button
                  text={"Browse"}
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                />
              </div>
            </div>
            <img
              src={Image3}
              className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0 sm:w-[300px] lg:w-[350px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
