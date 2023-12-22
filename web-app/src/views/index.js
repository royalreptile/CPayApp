import CreatePin from "./CreatePin.jsx";
import GetStarted from "./GetStarted";
import SignUpHome from "./SignUpHome";
import UploadDriverLicence from "./UploadDriverLicence.jsx";
import VerifyAge from "./VerifyAge.jsx";
import VerifyPhoneNumber from "./VerifyPhoneNumber.jsx";
import Welcome from "./Welcome.jsx";
import Login from "./login.jsx";
import EnrollingInCpay from "./EnrollingInCpay.jsx";
import TellusMore from "./TellusMore.jsx";
import EnterLastFourDigits from "./EnterLasFourDigits.jsx";
import Page404 from "./404.jsx";


const routes = [
    { path: '/', element: <Welcome /> },
    { path: '/get-started', element: <GetStarted /> },
    {
        path:'/sign-up',element:<SignUpHome/>
    },
    { path: '/login', element: <Login /> },
    { path: '/create-pin', element: <CreatePin /> },
    { path: '/verify-phone-number', element: <VerifyPhoneNumber /> },
    { path: '/upload-driver-licence', element: <UploadDriverLicence /> },
    { path: '/verify-age', element: <VerifyAge /> },
    { path: '/enrolling', element: <EnrollingInCpay /> },
    {path:'/tell-us-more',element:<TellusMore/>},
    { path: '/enter-last-four-digits', element: <EnterLastFourDigits /> },
    {path:'*',element:<Page404 />}
]
export default routes;