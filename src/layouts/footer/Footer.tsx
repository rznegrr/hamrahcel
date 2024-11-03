import ContactUS from "./ContactUS";
import CopyRight from "./CopyRight";

function Footer() {
  return (
    <>
      <div className="hidden lg:grid grid-cols-12 h-[400px] bg-main-bg-color">
        <ContactUS />

        <div className="col-span-9 grid grid-cols-12 h-[350px] mt-7">
          <div className="col-span-7 bg-main-color">
            <div className="col-span-7 bg-sec-color pt-5 rounded-br-3xl">
              <div className="flex justify-center">
                <div className="flex flex-col gap-y-5 py-16 px-10 xl:p-16">
                  <h4 className="text-2xl font-semibold pb-4 border-b border-gray">
                    مقالات
                  </h4>
                  <ul className="flex flex-col gap-y-5">
                    <li>مقاله۱</li>
                    <li>مقاله۱</li>
                    <li>مقاله۱</li>
                    <li>مقاله۱</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-y-5 py-16 px-10 xl:p-16">
                  <h4 className="text-2xl font-semibold pb-4 border-b border-gray">
                    مقالات
                  </h4>
                  <ul className="flex flex-col gap-y-5">
                    <li>مقاله۱</li>
                    <li>مقاله۱</li>
                    <li>مقاله۱</li>
                    <li>مقاله۱</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-y-5 py-16 px-10 xl:p-16">
                  <h4 className="text-2xl font-semibold pb-4 border-b border-gray">
                    مقالات
                  </h4>
                  <ul className="flex flex-col gap-y-5">
                    <li>مقاله۱</li>
                    <li>مقاله۱</li>
                    <li>مقاله۱</li>
                    <li>مقاله۱</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-5 flex flex-col justify-center items-center bg-sec-color pb-10">
            <img src="/hamrahcel.svg" className="h-28 w-40 xl:h-32 xl:w-48" alt="لوگو همراه سل"/>
            <div className="flex justify-center gap-4">
              <img src="/images/rezi.png" className="h-24 w-24" />
              <img src="/images/enamad.png" className="h-24 w-24" />
              <img src="/images/rezi.png" className="h-24 w-24" />
            </div>
          </div>
        </div>
        <CopyRight />
      </div>
    </>
  );
}

export default Footer;
