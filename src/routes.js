import Services from "./components/Services";
import QuestionsForm from "./components/QuestionsForm";
import FinalPage from "./components/FinalPage";

const routes = [
  { title: "Home", path: "/", element: Services },
  { title: "Form", path: "/:serviceId", element: QuestionsForm },
  { title: "FİnalPage", path: "/send", element: FinalPage },

];

export default routes;
