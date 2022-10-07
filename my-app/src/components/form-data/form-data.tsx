import { Settings } from "../../types/settings";

type FormDataProps = {
  settings: Settings;
  setSetting: (newValue: Settings) => void;
  printedFormActive: boolean;
  setPrintedFormActive: (newValue: boolean) => void;
}

const FormData: React.FunctionComponent<FormDataProps> = ({ settings, setSetting, printedFormActive, setPrintedFormActive }) => {

  const onFormDataChange = (formData: Settings) => {
    setSetting(formData);
    if (printedFormActive) {
      setPrintedFormActive(false);
    }
  }

  return (
    <fieldset>
      <p>
        <label htmlFor="Margin">Margin (rate) </label>
        <input
          id="Margin"
          type={'number'}
          value={settings.margin}
          onChange={(evt) => {
            const { value } = evt.target;
            onFormDataChange({ ...settings, margin: Number(value) });
          }}
        />
      </p>
      <p>
        {/* <label htmlFor="IsExtraMargin">Extra margin</label>
        <input
          type={'checkbox'}
          id="IsExtraMargin"
          checked={settings.isExtraMargin}
          onChange={(evt) => {
            const { checked } = evt.target;
            onFormDataChange({ ...settings, isExtraMargin: checked });
          }}
        /> */}
        <label htmlFor="ExtraMargin">Extra margin (rate)</label>
        <input
          id="ExtraMargin"
          type={'number'}
          value={settings.extraMargin}
          onChange={(evt) => {
            const { value } = evt.target;
            onFormDataChange({ ...settings, extraMargin: Number(value) });
          }}
        />
      </p>
      <p>
        <label htmlFor="SaleTax">Sale tax</label>
        <input
          id="SaleTax"
          type={'number'}
          value={settings.saleTax}
          onChange={(evt) => {
            const { value } = evt.target;
            onFormDataChange({ ...settings, saleTax: Number(value) });
          }}
        />
      </p>
      <p>
        <label htmlFor="Currency">Currency</label>
        <input
          id="Currency"
          value={settings.currency}
          onChange={(evt) => {
            const { value } = evt.target;
            onFormDataChange({ ...settings, currency: value });
          }}
        />
      </p>
    </fieldset>
  )
}

export default FormData