import { toast } from "react-toastify";
import { Request } from "../../helpers/request";
export const handleUserPayment = async ({ e, state, setMakingPayment }) => {
  e.preventDefault();
  setMakingPayment(true);
  const keys = Object.keys(state);
  const values = Object.values(state);
  const obj = {};
  values.map((item, idx) => {
    if (item) {
      obj[keys[idx]] = item;
    }
    return obj;
  });
  const id = toast.loading("Processing...");
  const request = new Request("initialize/payment");
  const initializePayment = await request.initializePayment(obj);
  setMakingPayment(false);
  if (!initializePayment.status) {
    return toast.update(id, {
      render: initializePayment.message || "An error occurred. Try again later",
      type: "error",
      isLoading: false,
      autoClose: 2000,
    });
  }
  if (initializePayment.status) {
    toast.update(id, {
      render: "Processing",
      type: "success",
      isLoading: false,
      autoClose: 2000,
    });

    const PaystackUrl = initializePayment.data.authorization_url;
    window.location.replace(PaystackUrl);
  }
};
