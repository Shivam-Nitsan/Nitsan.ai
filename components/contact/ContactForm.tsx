"use client";

import data from "@/data/data.json";
import { type ContactForm, contactSchema } from "@/schemas/contact";
import { useForm as useHookForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm as useFormspree } from "@formspree/react";
import { toast, ToastContainer } from "react-toastify";
import AnimatedButton from "@/components/animation/AnimatedButton";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  // Safely access nested formData
  const formData = data?.contactUs?.contactForm?.formData || {};

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useHookForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  });

  const [fsState, fsSubmit] = useFormspree<ContactForm>("meoljlry");

  const onSubmit = async (formValues: ContactForm) => {
    try {
      await fsSubmit(formValues);
      reset();
      toast.success("Message sent — thanks!");
    } catch {
      toast.error("Submission failed — please try again later.");
    }
  };

  return (
    <>
      <div className="mxd-section mxd-section-inner-form padding-default">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                <div className="col-12 col-xl-2 mxd-grid-item no-margin" />
                <div className="col-12 col-xl-8">
                  <div className="mxd-block__content contact">
                    <div className="mxd-block__inner-form loading__fade">
                      <div className="form-container">

                        {/* Reply Message */}
                        <div className="form__reply centered text-center">
                          <i className="ph-fill ph-smiley-wink reply__icon" />
                          <p className="reply__title">Done!</p>
                          <span className="reply__text">
                            Thanks for your message. We&apos;ll get back as soon as possible.
                          </span>
                        </div>

                        {/* Dynamic Contact Form */}
                        <form
                          className="form contact-form"
                          id="contact-form"
                          onSubmit={handleSubmit(onSubmit)}
                        >
                          {/* Dynamic Hidden Fields */}
                          {(formData.hiddenFields
                            ? Object.entries(formData.hiddenFields)
                            : []
                          ).map(([name, value]) => (
                            <input
                              key={name}
                              type="hidden"
                              name={name}
                              defaultValue={value}
                            />
                          ))}

                          <div className="container-fluid p-0">
                            <div className="row gx-0">

                              {/* Dynamic Visible Inputs */}
                              {(formData.formFields
                                ? Object.entries(formData.formFields)
                                : []
                              ).map(([fieldName, field]: [string, any]) => (
                                <div
                                  key={fieldName}
                                  className={`${field.colClass || "col-12"} mxd-grid-item anim-uni-in-up`}
                                >
                                  {field.type === "textarea" ? (
                                    <textarea
                                      placeholder={field.placeholder}
                                      {...register(fieldName as keyof ContactForm, {
                                        required: field.required || false
                                      })}
                                    />
                                  ) : (
                                    <input
                                      type={field.type || "text"}
                                      placeholder={field.placeholder}
                                      {...register(fieldName as keyof ContactForm, {
                                        required: field.required || false
                                      })}
                                    />
                                  )}

                                  {errors[fieldName as keyof ContactForm] && (
                                    <p className="error-message">
                                      {field.placeholder} is required
                                    </p>
                                  )}
                                </div>
                              ))}

                              {/* Dynamic Button */}
                              <div className="col-12 mxd-grid-item anim-uni-in-up">
                                <AnimatedButton
                                  text={formData.button?.text || "Submit"}
                                  as="button"
                                  type="submit"
                                  disabled={isSubmitting || fsState.submitting}
                                  className={formData.button?.class || "btn btn-anim btn-default btn-large slide-right-up"}
                                >
                                  <i className="ph-bold ph-arrow-up-right" />
                                </AnimatedButton>
                              </div>

                            </div>
                          </div>
                        </form>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </>
  );
}
