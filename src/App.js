import "./App.css";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ErrorBoundary from "./errorsManagement/ErrorBoundary";
import Fallback from "./errorsManagement/Fallback";
import { Margin, usePDF } from "react-to-pdf";

function App() {
  const { toPDF, targetRef } = usePDF({
    filename: "form.pdf",
    page: { format: "A4", margin: Margin.SMALL, orientation: "landscape" },
  }); //important
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={Fallback}>
        <Content toPDF={toPDF} targetRef={targetRef} />
        <Sidebar toPDF={toPDF} targetRef={targetRef} />
        <Header />
      </ErrorBoundary>
    </div>
  );
}

export default App;
