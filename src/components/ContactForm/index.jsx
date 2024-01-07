import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Input, Textarea } from "react-daisyui";

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(3, "Full name must be at least 3 characters")
      .required("Please enter your full name"),
    subject: yup
      .string()
      .min(3, "Subject must be at least 3 characters")
      .required("Please enter your subject"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Please enter your email"),
    body: yup
      .string()
      .min(3, "Body must be at least 3 characters")
      .required("Please enter body info"),
  })
  .required();

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <div className="form-control w-full max-w-xs">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="label">
            <span className="label-text">What is your full name?</span>
          </label>
          <Input {...register("fullName")} />
          <label className="label">
            <span className="label-text-alt">
              <p>{errors.fullName?.message}</p>
            </span>
          </label>
          <label className="label">
            <span className="label-text">What is your subject?</span>
          </label>
          <Input {...register("subject")} />
          <label className="label">
            <span className="label-text-alt">
              <p>{errors.subject?.message}</p>
            </span>
          </label>
          <label className="label">
            <span className="label-text">What is your email?</span>
          </label>
          <Input {...register("email")} />
          <label className="label">
            <span className="label-text-alt">
              <p>{errors.email?.message}</p>
            </span>
          </label>
          <label className="label">
            <span className="label-text">Body informasjon?</span>
          </label>
          <Textarea {...register("body")} />
          <label className="label">
            <span className="label-text-alt">
              <p>{errors.body?.message}</p>
            </span>
          </label>
          <Button type="submit" wide={true}>
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
