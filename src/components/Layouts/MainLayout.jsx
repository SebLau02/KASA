import TopBar from "../TopBar/TopBar";

function MainLayout({ children }) {
  return (
    <div className="screen">
      <TopBar />
      {children}
    </div>
  );
}

export default MainLayout;
