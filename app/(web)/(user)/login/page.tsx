import React from "react";
import SignInSide from "../../../../components/SignInSide/SignInSide";

export default function Login() {
    return (
        <section className="loginSection" style={{"display": "flex", "flex": 1}}>
            <SignInSide></SignInSide>
        </section>
    )
}
//
// "use client";
// import { SetStateAction, useState } from "react";
// import { useForm } from "react-hook-form";
// import InputEmail from "../../../components/input/fields/email/email";
// import InputPassword from "../../../components/input/fields/password/password";
// import RequestButton from "../../../components/input/button/request_button/request_button";
//
//
//
// let pageTexts = {
//     pageTitle: "Login",
//     emailTitle: "Your e-mail",
//     emailErrorMessage: "Please enter a valid email",
//     passwordTitle: "Your password",
//     passwordrrorMessage: "Please enter a valid password",
//     loginButtonTitle: "Enter"
// };
//
// export default function LoginPage(this: any) {
//     let loginSuccess = async function ({ resultData }: { resultData: any }) {
//         console.log('login Success 2', resultData);
//     }
//     let loginError = async function ({ resultData }: { resultData: any }) {
//         console.log('login Error 2', resultData);
//     }
//
//
//
//
//     let inputEmail: { value: any; } | null = null;
//     const setTextInputEmailRef = function ({ element }: { element: any }) {
//         inputEmail = element;
//     };
//
//     let inputPassword : { value: any; } | null = null;
//     const setTextInputRef = function ({ element }: { element: any }) {
//         inputPassword = element;
//     };
//
//     var that = this;
//     let validate = function () {
//         console.log(inputEmail);
//         console.log(inputPassword);
//         return false;
//     }
//     const { register, handleSubmit } = useForm();
//     const [data, setData] = useState("");
//
//     const onSubmit = (data: any) => {
//         setData(data)
//     }
//     return (
//         <div className="flex flex-col gap-3" rel="noopener noreferrer">
//             <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{pageTexts.pageTitle}</p>
//             <InputEmail forwardRef={setTextInputEmailRef}
//                         id="email" name="email" isRequired={true} label={pageTexts.emailTitle}
//                         variant="bordered" />
//
//             <InputPassword forwardRef={setTextInputRef}
//                            id="password" name="password" isRequired={true} label={pageTexts.passwordTitle} variant="bordered"
//
//                            errorMessage={pageTexts.passwordrrorMessage} />
//             <RequestButton
//                 isLoading={false}
//                 className="w-full h-12"
//                 //fnValidate={handleSubmit(onSubmit)}
//                 fnOnSuccess={loginSuccess}
//                 fnOnFail={loginError}
//                 //fnValidate={validate}
//                 url="http://mau.servebeer.com:8008/login.php"
//                 postObject={
//                     {}
//                 }
//             >{pageTexts.loginButtonTitle}</RequestButton>
//         </div>
//     );
// }

