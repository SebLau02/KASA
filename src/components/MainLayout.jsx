import Footer from "./Footer";
import TopBar from "./TopBar";

function MainLayout({ children }) {
  return (
    <>
      <div className="screen">
        <TopBar />
        <main
          style={{
            margin: "20px",
          }}
        >
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
