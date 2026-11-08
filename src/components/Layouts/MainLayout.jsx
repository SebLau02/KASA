import Footer from "../Footer/Footer";
import TopBar from "../TopBar/TopBar";

function MainLayout({ children }) {
  return (
    <div className="screen">
      <TopBar />
      <main>{children}</main>

      <Footer />
    </div>
  );
}

export default MainLayout;
