import "./styles.css";
import TypeForm from "./TypeForm";
import BasicTextFields from "./form";
import EmailField from "./form2";
import ContactField from "./form3";

const submit = (data) => {
  return console.log(data);
};
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <TypeForm onSubmit={submit}>
        <BasicTextFields />
        <EmailField />
        <ContactField />
      </TypeForm>
    </div>
  );
}
