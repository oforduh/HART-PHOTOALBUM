import React, { useState } from "react";
import styles from "./gift.module.scss";
import { handleUserPayment } from "./handleGift";

const Gift = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [textArea, setTextArea] = useState("");
  const [makingPayment, setMakingPayment] = useState(null);

  return (
    <div className={styles.giftParentDiv}>
      <div className={styles.giftContDiv}>
        <div className={styles.giftContDiv2}>
          <div className={styles.preFormDiv}>
            <div className={styles.preFormDiv2}>
              <form
                onSubmit={(e) => {
                  handleUserPayment({
                    e,
                    state: {
                      fName,
                      lName,
                      email,
                      amount,
                      textArea,
                    },
                    setMakingPayment,
                  });
                }}
              >
                <div className={styles.formGroup}>
                  <label>First Name</label>
                  <input
                    type="text"
                    className={styles.formControl}
                    placeholder="Enter first name "
                    value={fName}
                    onChange={(event) => {
                      setFName(event.target.value);
                    }}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Last Name</label>
                  <input
                    type="text"
                    className={styles.formControl}
                    placeholder="Enter last name "
                    value={lName}
                    onChange={(event) => {
                      setLName(event.target.value);
                    }}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Email</label>
                  <input
                    type="email"
                    required
                    className={styles.formControl}
                    placeholder="Enter email Address "
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Amount (NGN)</label>
                  <input
                    type="text"
                    required
                    className={styles.formControl}
                    placeholder="Enter email Address "
                    value={amount}
                    onChange={(event) => {
                      setAmount(event.target.value);
                    }}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Good will message</label>
                  <textarea
                    value={textArea}
                    onChange={(event) => {
                      setTextArea(event.target.value);
                    }}
                    rows="4"
                    cols="50"
                  ></textarea>
                </div>
                <button style={{ opacity: makingPayment && 0.5 }}>
                  {makingPayment ? "Processing" : "Make Donation"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gift;
