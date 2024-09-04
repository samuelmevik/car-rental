import Footer from "./Footer";
import Navbar from "./Navbar";
import Wrapper from "./Wrapper";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar className="h-16" />
      <Wrapper className="pt-16 min-h-svh">
        {children}
        <Footer />
      </Wrapper>
    </>
  );
}

export default Layout;