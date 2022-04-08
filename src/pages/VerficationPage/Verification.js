import React, { useState, useEffect } from "react";
import { handleVerifyPayment } from "./handleVerifyPayment";
import styles from "./verification.module.scss";
import successImage from "../../assets/successful.png";
import TransactionFailed from "../../assets/Transaction-Failed.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Loader from "../../components/Loader/Loader";

const Verification = () => {
  const [verifyPayment, setverifyPayment] = useState(false);
  const [isLoading, setisLoading] = useState(true);

  // Fetching data from query parameters
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const { reference } = params;

  useEffect(() => {
    handleVerifyPayment(reference, setverifyPayment, setisLoading);
  }, []);

  return (
    <div className={styles.container}>
      {" "}
      {!isLoading ? (
        <div className={styles.verificationParentDiv}>
          {verifyPayment ? (
            <div className={styles.verificationContDiv}>
              <div className={styles.parentImageDiv}>
                <div className={styles.ImageContainer}>
                  <img src={successImage} alt="" />
                </div>
              </div>

              <div className={styles.textContainer}>
                <h2>Payment Successful</h2>
                click <Link to="/date">here</Link> to go to homePage
              </div>
            </div>
          ) : (
            <div className={styles.verificationContDiv}>
              <div className={styles.parentImageDiv}>
                <div className={styles.ImageContainer}>
                  <img src={TransactionFailed} alt="" />
                </div>
              </div>

              <div className={styles.textContainer}>
                <h2 style={{ color: "red" }}>Payment Failed</h2>
                click <Link to="/gift">here</Link> to retry
              </div>
            </div>
          )}
          ;
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Verification;
