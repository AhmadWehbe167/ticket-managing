import * as Yup from "yup";

const values = {
  ettc: "",
  estHours: "",
  desc: "",
  details: "",
};

const schema = Yup.object({
  ettc: Yup.number().min(0).required("Required"),
  estHours: Yup.number().min(0).required("Required"),
  desc: Yup.string().max(120).required("Required"),
  details: Yup.string().required("Required"),
});

export default function formikOptions() {
  return {
    initialValues: values,
    validationSchema: schema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      alert(
        "request sent successfully!",
        values.ettc,
        values.estHours,
        values.desc,
        values.details
      );
    },
  };
}
