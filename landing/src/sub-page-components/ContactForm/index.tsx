"use client";

import { memo, useCallback, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@/components/Button";
import { TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const { control, trigger, getValues, reset } = useForm<{
    businessEmail: string;
    companyName: string;
    firstName: string;
    lastName: string;
  }>({
    defaultValues: {
      businessEmail: "",
      companyName: "",
      firstName: "",
      lastName: "",
    },
  });

  const { executeRecaptcha } = useGoogleReCaptcha();

  const onContactUs = useCallback(() => {
    setShowContactForm(true);
  }, []);

  const onSubmit = useCallback(async () => {
    try {
      if (!executeRecaptcha) {
        console.error("recaptcha error");
        return;
      }

      setSubmitting(true);

      const valid = await trigger();
      if (valid) {
        setSubmitting(true);
        const gRecaptchaToken = await executeRecaptcha("enquiryFormSubmit");
        const values = getValues();

        const response = await axios({
          method: "post",
          url: "/api/contactFormSubmit",
          data: {
            firstName: values.firstName || "",
            lastName: values.lastName || "",
            businessEmail: values.businessEmail,
            companyName: values.companyName || "",
            gRecaptchaToken,
          },
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        });

        if (response.data.success) {
          reset();
          toast.success(
            "Your submission has been recorded successfully. We will contact you shortly"
          );
        } else {
          toast.error("An error has occurred. Please try again later");
        }
      }
    } catch {}

    setSubmitting(false);
  }, [trigger, executeRecaptcha, getValues, reset]);

  return (
    <>
      <div
        id="contact-form"
        className="w-full text-center lg:py-32 lg:px-72 md:px-48 py-8 px-12 bg-[#2F2B431A]"
      >
        <p className="text-[#0C102E] lg:text-4xl text-2xl font-bold lg:leading-[50px] leading-normal">
          Ready to elevate your team?
          <br />
          Fill the below form for a consultation
        </p>

        {showContactForm && (
          <div className="mt-8 flex justify-center">
            <div className="w-3/4 bg-[#2F2B431A] p-[24px] rounded-[16px]">
              <div className="grid md:grid-cols-2 gap-8 mb-[24px]">
                <Controller
                  name="businessEmail"
                  control={control}
                  defaultValue={""}
                  rules={{
                    required: "Required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email",
                    },
                  }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <div className="flex flex-col">
                      <p className="text-start text-[#2F2B4399] text-[16px] font-[500] mb-[8px]">
                        Business email <span className="text-[#F34141]">*</span>
                      </p>
                      <TextField
                        onChange={onChange}
                        value={value}
                        placeholder="Enter Business Email"
                        variant="outlined"
                        sx={{
                          backgroundColor: "white",
                          borderColor: error ? "red" : "white",
                          borderRadius: 4,
                          "& fieldset": {
                            borderColor: error ? "red" : "white",
                            borderRadius: 4,
                          },
                          "&:hover fieldset": {
                            borderColor: error
                              ? "red!important"
                              : "#1976d2!important",
                          },
                        }}
                      />
                      {error?.message && (
                        <p className="text-red-600 text-start mt-[6px]">
                          {error.message}
                        </p>
                      )}
                    </div>
                  )}
                />

                <Controller
                  name="companyName"
                  control={control}
                  defaultValue={""}
                  render={({ field: { onChange, value } }) => (
                    <div className="flex flex-col">
                      <p className="text-start text-[#2F2B4399] text-[16px] font-[500] mb-[8px]">
                        Company Name
                      </p>
                      <TextField
                        onChange={onChange}
                        value={value}
                        placeholder="Enter Company Name"
                        variant="outlined"
                        sx={{
                          backgroundColor: "white",
                          borderColor: "white",
                          borderRadius: 4,
                          "& fieldset": {
                            borderColor: "white",
                            borderRadius: 4,
                          },
                          "&:hover fieldset": {
                            borderColor: "#1976d2!important",
                          },
                        }}
                      />
                    </div>
                  )}
                />

                <Controller
                  name="firstName"
                  control={control}
                  defaultValue={""}
                  render={({ field: { onChange, value } }) => (
                    <div className="flex flex-col">
                      <p className="text-start text-[#2F2B4399] text-[16px] font-[500] mb-[8px]">
                        First Name
                      </p>
                      <TextField
                        onChange={onChange}
                        value={value}
                        placeholder="Enter First Name"
                        variant="outlined"
                        sx={{
                          backgroundColor: "white",
                          borderColor: "white",
                          borderRadius: 4,
                          "& fieldset": {
                            borderColor: "white",
                            borderRadius: 4,
                          },
                          "&:hover fieldset": {
                            borderColor: "#1976d2!important",
                          },
                        }}
                      />
                    </div>
                  )}
                />

                <Controller
                  name="lastName"
                  control={control}
                  defaultValue={""}
                  render={({ field: { onChange, value } }) => (
                    <div className="flex flex-col">
                      <p className="text-start text-[#2F2B4399] text-[16px] font-[500] mb-[8px]">
                        Last Name
                      </p>
                      <TextField
                        onChange={onChange}
                        value={value}
                        placeholder="Enter Last Name"
                        variant="outlined"
                        sx={{
                          backgroundColor: "white",
                          borderColor: "white",
                          borderRadius: 4,
                          "& fieldset": {
                            borderColor: "white",
                            borderRadius: 4,
                          },
                          "&:hover fieldset": {
                            borderColor: "#1976d2!important",
                          },
                        }}
                      />
                    </div>
                  )}
                />
              </div>

              <p className="text-start text-[#2F2B43CC]">
                People Connect Solutions Inc. needs the contact information you
                provide to us to contact you about our products and services.
                You may unsubscribe from these communications at any time. For
                information on how to unsubscribe, as well as our privacy
                practices and commitment to protecting your privacy, please
                review our Privacy Police.
              </p>
            </div>
          </div>
        )}

        <div className="mt-8 flex justify-center">
          <Button
            onClick={showContactForm ? onSubmit : onContactUs}
            disabled={submitting}
          >
            {showContactForm ? "Submit" : "Contact Us Now"}{" "}
            <ArrowForwardIcon
              sx={{ width: 20, height: 20 }}
              className="ml-[4px]"
            />
          </Button>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default memo(ContactForm);
