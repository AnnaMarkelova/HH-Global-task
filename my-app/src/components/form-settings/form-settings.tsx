import { Settings } from "../../types/settings";

type FormSettingsProps = {
  settings: Settings;
  setSetting: React.Dispatch<React.SetStateAction<Settings>>;
}

const FormSettings: React.FunctionComponent<FormSettingsProps> = ({ settings, setSetting }) => {

  const onFormDataChange = (propName: keyof Settings, propValue: number | string) => {
    setSetting((prevSettings) => {
      return { ...prevSettings, [propName]: propValue }
    });
  }

  return (
    <div className='wrapper form-setting'>
      <h2 className='form-setting__title'>Settings</h2>
      <p className='form-setting__input-block'>
        <label className='form-setting__label' htmlFor="SaleTax">Sale tax</label>
        <input
          className='form-setting__input'
          id="SaleTax"
          type='number'
          value={settings.saleTax}
          min='0'
          onChange={(evt) => {
            const { value } = evt.target;
            onFormDataChange('saleTax', Number(value));
          }}
        />
      </p>
      <p className='form-setting__input-block'>
        <label className='form-setting__label' htmlFor="Currency">Currency</label>
        <input
          className='form-setting__input'
          id="Currency"
          value={settings.currency}
          onChange={(evt) => {
            const { value } = evt.target;
            onFormDataChange('currency', value);
          }}
        />
      </p>
      <p className='form-setting__input-block'>
        <label className='form-setting__label' htmlFor="Margin">Margin (rate) </label>
        <input
          className='form-setting__input'
          id="Margin"
          type='number'
          value={settings.margin}
          min='0'
          onChange={(evt) => {
            const { value } = evt.target;
            onFormDataChange('margin', Number(value));
          }}
        />
      </p>
      <p className='form-setting__input-block'>
        <label className='form-setting__label' htmlFor="ExtraMargin">Extra margin (rate)</label>
        <input
          className='form-setting__input'
          id="ExtraMargin"
          type='number'
          value={settings.extraMargin}
          min='0'
          onChange={(evt) => {
            const { value } = evt.target;
            onFormDataChange('extraMargin', Number(value));
          }}
        />
      </p>
    </div>
  )
}

export default FormSettings