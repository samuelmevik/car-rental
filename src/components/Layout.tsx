import Footer from "./Footer";
import Navbar from "./Navbar";
import Wrapper from "./Wrapper";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Wrapper>
        {children}
        <Footer />
      </Wrapper>
    </>
  );
}

export default Layout;