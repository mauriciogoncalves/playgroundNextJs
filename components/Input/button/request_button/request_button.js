import "./request_button.css"
import Button from "@mui/material/Button";
import React from "react";

 
export default function RequestButton({
  label = "Submit",
  successLabel = "Done!",
  errorLabel = "Submit Fail",
  sendingLabel = "Submiting...",

  url = "email",
  requestMethod = "POST",
  postObject = {},
  fnOnSuccess = ((e) => { console.warn(e) }),
  fnOnFail = ((e) => { console.error(e) }),
  ...props
}) {
  const [btnDisabled, setBtnDisabled] = React.useState(props?.isDisabled || false);
  const [btnLoading, setBtnLoading] = React.useState(props?.isLoading || false);
  const [btnLael, setBtnLabel] = React.useState(label);
  return (
    <Button {...props}
      isDisabled={btnDisabled}
      isLoading={btnLoading}
      onClick={btnClickFn}
      classNames={props?.classNames || {
        ...{
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
            "bg-white",
            "w-full h-12"
          ]
        }
      }}
    >{btnLael}</Button>
  )

  async function btnClickFn() {
    setBtnDisabled(true);
    setBtnLoading(true);
    setBtnLabel(sendingLabel);

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...{ time: new Date().toISOString(), ...postObject } })
    });
    const responseObj = await res.json();

    if (typeof responseObj != 'undefined' && responseObj != null &&
      typeof responseObj.success != 'undefined' && responseObj.success != null &&
      responseObj.success == true
    ) {
      setBtnLabel(label);
      fnOnSuccess(responseObj);
    } else {
      setBtnLabel(errorLabel);
      fnOnFail(responseObj);
    }
    setBtnLoading(false);
    setBtnDisabled(false);

    return;
  }
  function valid(){
    return 
  }
  // async function requestButtonAction(username = "", password = "") {
  //   const res = await fetch('http://mau.servebeer.com:8008/login.php', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       time: new Date().toISOString(),
  //       username: username,
  //       password: password
  //     })
  //   });
  //   const data = await res.json();
  //   return data;
  // }
}