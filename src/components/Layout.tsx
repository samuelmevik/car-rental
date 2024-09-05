import Foot from "./Foot";
import Navbar from "./Navbar";
import Wrapper from "./Wrapper";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar className="h-16" />
        <div className="fixed z-20 top-0 right-0 h-2 w-full bg-primary" />
        <Wrapper className="pt-16 min-h-svh">
          {children}
          <Foot />
        </Wrapper>
      </div>
    </>
  );
}

export default Layout;