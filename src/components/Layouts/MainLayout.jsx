import TopBar from "../TopBar/TopBar";

function MainLayout({ children }) {
  return (
    <div className="screen">
      <TopBar />
      <main>{children}</main>
    </div>
  );
}

export default MainLayout;
