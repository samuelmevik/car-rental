import Footer from "./Footer";
import Navbar from "./Navbar";
import Wrapper from "./Wrapper";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar className="h-16" />
      <div className="fixed -z-50 top-0 right-0 h-2 w-full bg-primary" />
      <Wrapper className="pt-16 min-h-svh">
        {children}
        <Footer />
      </Wrapper>
    </>
  );
}

export default Layout;