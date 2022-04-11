import { toast } from "react-toastify";
import { Request } from "../../helpers/request";

export const handleVerifyPayment = async function (
  reference,
  setverifyPayment,
  setisLoading
) {
  try {
    const id = toast.loading("Processing Payment...");
    const request = new Request("verify/payment");
    const verifyingPayment = await request.verifyingPayment(reference);
    setisLoading(false);

    if (!verifyingPayment.status) {
      return toast.update(id, {
        render:
          verifyingPayment.message || "An error occurred. Try again later",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
    if (verifyingPayment.status) {
      setverifyPayment(true);
      toast.update(id, {
        render: "Payment successful",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
