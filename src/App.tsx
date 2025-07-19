import { Footer } from "./Components/Footer";
import { Router } from "./Router";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-jet text-whitesmoke">
      <Router />
      <Footer />
    </div>
  );
};

export default App;
