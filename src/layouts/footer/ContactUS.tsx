function ContactUS() {
  return (
    <div className="col-span-3 bg-sec-color h-[400px] rounded-tl-3xl shadow">
      <div className="flex flex-col lg:px-10 xl:px-16 lg:pt-16 xl:pt-20 justify-start gap-y-10 bg-main-color rounded-tl-3xl h-full">
        <div className="flex items-center gap-2">
          <i className="bi bi-telephone text-white text-lg"></i>
          <p className="text-white text-md">+989123456789</p>
        </div>
        <div className="flex items-center gap-2">
          <i className="bi bi-geo-alt text-white text-lg"></i>
          <p className="text-white text-sm">
            consequaturt voluptas tenetur tempore perspiciatis!
          </p>
        </div>
        <div className="flex items-center gap-2">
          <i className="bi bi-envelope text-white text-lg"></i>
          <p className="text-white text-md">info@gmail.com</p>
        </div>
        <div className="flex gap-7 justify-center pt-10">
          <i className="bi bi-instagram text-xl text-white"></i>
          <i className="bi bi-telegram text-xl text-white"></i>
          <i className="bi bi-whatsapp text-xl text-white"></i>
        </div>
      </div>
    </div>
  );
}

export default ContactUS;
