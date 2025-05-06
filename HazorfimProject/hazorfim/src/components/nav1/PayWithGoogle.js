// import React, { useState, useEffect } from "react";
// import "../../styles/PayWithGoogle.css";

// const { googlePayClient } = window;

// const baseCardPaymentMethod = {
//   type: "CARD",
//   parameters: {
//     allowedCardNetworks: ["VISA", "MASTERCARD"],
//     allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"]
//   }
// };

// const googlePayBaseConfiguration = {
//   apiVersion: 2,
//   apiVersionMinor: 0,
//   allowedPaymentMethods: [baseCardPaymentMethod]
// };

// export default function PayWithGoogle() {
//   const [gPayBtn, setGPayBtn] = useState(null);

//   function createAndAddButton() {
//     if (googlePayClient) {
//       const googlePayButton = googlePayClient.createButton({
//         buttonColor: "default",
//         buttonType: "long",
//         onClick: processPayment
//       });

//       setGPayBtn(googlePayButton);
//     }
//   }

//   function processPayment() {
//     const tokenizationSpecification = {
//       type: "PAYMENT_GATEWAY",
//       parameters: {
//         gateway: "stripe",
//         "stripe:version": "v3",
//         "stripe:publishableKey": "pk_test_35p114pH8oNuHX72SmrvsFqh00Azv3ZaIA"
//       }
//     };

//     const cardPaymentMethod = {
//       type: "CARD",
//       tokenizationSpecification: tokenizationSpecification,
//       parameters: {
//         allowedCardNetworks: ["VISA", "MASTERCARD"],
//         allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
//         billingAddressRequired: true,
//         billingAddressParameters: {
//           format: "FULL",
//           phoneNumberRequired: true
//         }
//       }
//     };

//     const transactionInfo = {
//       totalPriceStatus: "FINAL",
//       totalPrice: "123.45",
//       currencyCode: "USD"
//     };

//     const merchantInfo = {
//       merchantName: "Example Merchant Name"
//     };

//     const paymentDataRequest = {
//       ...googlePayBaseConfiguration,
//       allowedPaymentMethods: [cardPaymentMethod],
//       transactionInfo,
//       merchantInfo
//     };

//     googlePayClient
//       .loadPaymentData(paymentDataRequest)
//       .then(function (paymentData) {
//         console.log(paymentData);
//       })
//       .catch(function (err) {
//         console.log(err);
//       });
//   }

//   useEffect(() => {
//     if (googlePayClient) {
//         googlePayClient.isReadyToPay(googlePayBaseConfiguration)
//         .then(function (response) {
//             if (response.result) {
//                 createAndAddButton();
//             } else {
//                 alert("Unable to pay using Google Pay");
//             }
//         })
//         .catch(function (err) {
//             console.error("Error determining readiness to use Google Pay: ", err);
//         });
//     } else {
//         console.error("Google Pay client is not initialized.");
//     }
// }, []);


//   return (
//     <div className="App">
//       <h1>Click the Pay button</h1>
//       <div>
//         {gPayBtn} {/* Render the Google Pay button directly */}
//       </div>
//     </div>
//   );
// }

// // Add this function outside of the component







// 

import React, { useState } from "react";
import GooglePayButton from "@google-pay/button-react";
import "../../styles/PayWithGoogle.css";

export default function PayWithGoogle() {
  const paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["MASTERCARD", "VISA"]
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example"
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: "12345678901234567890",
      merchantName: "Demo Merchant"
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: "100.00",
      currencyCode: "USD",
      countryCode: "US"
    }
  };

  const [buttonColor, setButtonColor] = useState("default");
  const [buttonType, setButtonType] = useState("buy");
  const [buttonSizeMode, setButtonSizeMode] = useState("static");
  const [buttonWidth, setButtonWidth] = useState(240);
  const [buttonHeight, setButtonHeight] = useState(40);

  const isTop = window === window.top;

  return (
    <div>
      <form className="top-bottom">
        <label className="control">
          <span>Button color</span>
          <select
            value={buttonColor}
            onChange={event => setButtonColor(event.target.value)}
          >
            <option value="default">default</option>
            <option value="black">black</option>
            <option value="white">white</option>
          </select>
        </label>
        <label className="control">
          <span>Button type</span>
          <select
            value={buttonType}
            onChange={event => setButtonType(event.target.value)}
          >
            <option value="buy">buy</option>
            <option value="plain">plain</option>
            <option value="donate">donate</option>
          </select>
        </label>
        <label>
          <input
            type="checkbox"
            checked={buttonSizeMode === "fill"}
            onChange={event =>
              setButtonSizeMode(event.target.checked ? "fill" : "static")
            }
          />
          <span>Custom button size</span>
        </label>
        <label className="control">
          <span>
            Button width <span className="value">({buttonWidth}px)</span>
          </span>
          <input
            type="range"
            min="160"
            max="800"
            value={buttonWidth}
            onChange={event => setButtonWidth(Number(event.target.value))}
            disabled={buttonSizeMode !== "fill"}
          />
        </label>
        <label className="control">
          <span>
            Button height <span className="value">({buttonHeight}px)</span>
          </span>
          <input
            type="range"
            min="40"
            max="100"
            value={buttonHeight}
            onChange={event => setButtonHeight(Number(event.target.value))}
            disabled={buttonSizeMode !== "fill"}
          />
        </label>
      </form>

      <div className="demo">
        <GooglePayButton
          environment="TEST"
          buttonColor={buttonColor}
          buttonType={buttonType}
          buttonSizeMode={buttonSizeMode}
          paymentRequest={paymentRequest}
          onLoadPaymentData={paymentRequest => {
            console.log("load payment data", paymentRequest);
          }}
          style={{ width: buttonWidth, height: buttonHeight }}
        />
      </div>

      <div className="note" style={{ display: isTop ? "none" : "" }}>
        <p>
          Note: This page may need to open in a new window for it to function
          correctly.
        </p>
        <p>
          <a href="/" target="_blank">
            Open in new window
          </a>
          .
        </p>
      </div>
    </div>
  );
}
