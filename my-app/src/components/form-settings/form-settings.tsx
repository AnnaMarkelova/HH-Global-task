import { Settings } from "../../types/settings";

type FormSettingsProps = {
  settings: Settings;
  setSetting: React.Dispatch<React.SetStateAction<Settings>>;
}

const FormSettings: React.FunctionComponent<FormSettingsProps> = ({ settings, setSetting }) => {

  const onFormDataChange = (propName: keyof Settings, propValue: number | string) => {
    setSetting((prevSettings) => {
      return {...prevSettings, [propName]: propValue }
    });
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
            onFormDataChange('margin', Number(value));
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
            onFormDataChange('extraMargin', Number(value));
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
            onFormDataChange('saleTax', Number(value));
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
            onFormDataChange('currency', value);
          }}
        />
      </p>
    </fieldset>
  )
}

export default FormSettings