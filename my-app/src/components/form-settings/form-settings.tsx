import { Settings } from "../../types/settings";

type FormSettingsProps = {
  settings: Settings;
  setSetting: (newValue: Settings) => void;
}

const FormSettings: React.FunctionComponent<FormSettingsProps> = ({ settings, setSetting }) => {

  const onFormDataChange = (formData: Settings) => {
    setSetting(formData);
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

export default FormSettings