import { Formik } from "formik";
import InputField from "../../Components/InputField/InputField";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(5).max(15),
  ok: Yup.boolean().required("u must accept the terms ").oneOf([true]),
});
export default function CheckEligibility() {
  return (
    <div>
      <Formik
        onSubmit={(value) => console.log(value)}
        initialValues={{ name: "ahmed" , ok : false }}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <form onSubmit={formik.handleSubmit}>
              <InputField name="name" label="userName" type="select" options={ [ "ahmed" , "mahmoud" ] }></InputField>
              {/* <InputField name="name" label="userName" type="text"></InputField> */}
              <InputField name="ok" label="accept" type="checkbox"></InputField>
              <button type="submit">submit</button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}
