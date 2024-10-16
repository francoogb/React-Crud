import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "/public/css/blog.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Error corregido
import Home from "./paginas/home.jsx";
import Acerca from "./paginas/Acerca";
import Frontends from "./componentes/Frontends.jsx";
import Rutas from "./paginas/Rutas";
import RutasPath from "./paginas/RutasPath.jsx";
import RutasQuery from "./paginas/RutasQuery.jsx";
import ErrorPersonalizado from "./paginas/ErrorPersonalizado.jsx";
import Error404 from "./paginas/Error404.jsx";
import Hooks from "./paginas/Hooks.jsx";
import HookEventoClick from "./paginas/HookEventoClick.jsx";
import HooksUseState from "./paginas/HooksUseState.jsx";
import HookEventoOnChange from "./paginas/HookEventoOnChange.jsx";
import HookVarios from "./paginas/HookVarios.jsx";
import HookUseEffect from "./paginas/HookUseEffect.jsx";
import CustomHook from "./paginas/CustomHook.jsx";
import HookLoaderDate, {
  loader as paisesLoader,
} from "./paginas/HookLoaderDate.jsx";
import HookUseNavigate from "./paginas/HookUseNavigate.jsx";
import HookUseLocation from "./paginas/HookUseLocation.jsx";
import HookUseReef from "./paginas/HookUseReef.jsx";
import Formularios from "./paginas/Formularios.jsx";
import FormulariosSimple from "./paginas/FormulariosSimple.jsx";
import FormularioUserActionData, {
  action as procesarFormularioActionDate,
} from "./paginas/FormularioUserActionData.jsx";
import FormularioPractica from "./paginas/FormularioPractica.jsx";
import FormulariosFormMix from "./paginas/FormulariosFormMix.jsx";
import FormulariosReactHookForm from "./paginas/FormulariosReactHookForm.jsx";
import FormulariosFinalForm from "./paginas/FormulariosFinalForm.jsx";
import Utiles from "./paginas/Utiles.jsx";
import UtilesDayjs from "./paginas/UtilesDayjs.jsx";
import UtilesMoments from "./paginas/UtilesMoments.jsx";
import UtilesSpinner from "./paginas/UtilesSpinner.jsx";
import UtilidadesSweperList from "./paginas/UtilidadesSweperList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Frontends></Frontends>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      
      {
        path: "/acerca",
        element: <Acerca />,
      },

      {
        path: "/rutas",
        element: <Rutas />,
      },
      {
        path: "/utilidades",
        element: <Utiles />,
      },
      {
        path: "/utilidades/dayJs/",
        element: <UtilesDayjs />,
      },
      {
        path: "/utilidades/MomentsJs/",
        element: <UtilesMoments />,
      },
      {
        path: "/utilidades/SpinnerJS/",
        element: <UtilesSpinner />,
      },
      {
        path: "/utilidades/SwipperList/",
        element: <UtilidadesSweperList />,
      },
      {
        path: "/hooks",
        element: <Hooks />,
      },
      {
        path: "/hooks/eventos-click",
        element: <HookEventoClick />,
      },
      {
        path: "/hooks/useState",
        element: <HooksUseState />,
      },
      {
        path: "/hooks/OnChange",
        element: <HookEventoOnChange />,
      },
      {
        path: "/hooks/EventosVarios",
        element: <HookVarios />,
      },
      {
        path: "/hooks/use-effect",
        element: <HookUseEffect />,
      },
      {
        path: "/hooks/Custom-Hooks",
        element: <CustomHook />,
      },
      {
        path: "/hooks/Loader-Hooks",
        element: <HookLoaderDate />,
        loader: paisesLoader,
      },
      {
        path: "/hooks/Navigate-Hooks",
        element: <HookUseNavigate />,
      },
      {
        path: "/hooks/UseLocation-Hooks",
        element: <HookUseLocation />,
      },
      {
        path: "/hooks/UseReef-Hooks",
        element: <HookUseReef />,
      },
      {
        path: "/formularios",
        element: <Formularios />,
      },
      {
        path: "/formulario-simple",
        element: <FormulariosSimple />,
      },
      {
        path: "/formulario-user-action-data",
        element: <FormularioUserActionData />,
        action: procesarFormularioActionDate,
      },
      {
        path: "/formulario-practica",
        element: <FormularioPractica />,
      },

      {
        path: "/formulario-formik",
        element: <FormulariosFormMix />,
      },
      {
        path: "/formulario-react-hook-form",
        element: <FormulariosReactHookForm />,
      },
      {
        path: "/formularios-final-forms",
        element: <FormulariosFinalForm />,
      },
      
      
      {
        path: "/rutas/query-string",
        element: <RutasQuery />,
        errorElement: <ErrorPersonalizado />,
      },

      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
