import Header from "./header/Header";
import Footer from "./footer/Footer";
import MobileMenu from "./MobileNavigation";

type ChildrenProps = {
  children: React.ReactNode;
};

function AppLayout({ children }: ChildrenProps) {
  return (
    <>
    <div className="h-10 bg-main-color text-white text-center pt-1">همراه سل، همراه همیشگی شما...</div>
      <Header />
      <div className="w-[95%] m-auto">{children}</div>
      <Footer />
      <MobileMenu/>
    </>
  );
}

export default AppLayout;
