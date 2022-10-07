import { UsePrintContext } from '../../contexts/print-context';
import { UseUserSettingContext } from '../../contexts/user-setting-context';
import { UserSetting } from "../../types/user-setting-type";

const FormData: React.FunctionComponent = () => {

  const { userSetting, setUserSetting } = UseUserSettingContext();
  const { printedFormActive, setPrintedFormActive } = UsePrintContext();

  const onFormDataChange = (formData: UserSetting) => {
    setUserSetting(formData);
    if (printedFormActive) {
      setPrintedFormActive(false);
    }
  }

  return (
    <fieldset>
      <p>
        <label htmlFor="Margin">Margin (rate)</label>
        <input
          id="Margin"
          type={'number'}
          value={userSetting.margin}
          onChange={(evt) => {
            const { value } = evt.target;
            onFormDataChange({ ...userSetting, margin: Number(value) });
          }}
        />
      </p>
      <p>
        <label htmlFor="IsExtraMargin">Extra margin</label>
        <input
          type={'checkbox'}
          id="IsExtraMargin"
          checked={userSetting.isExtraMargin}
          onChange={(evt) => {
            const { checked } = evt.target;
            onFormDataChange({ ...userSetting, isExtraMargin: checked });
          }}
        />
        <label htmlFor="ExtraMargin">{'(rate)'}</label>
        <input
          id="ExtraMargin"
          type={'number'}
          value={userSetting.extraMargin}
          onChange={(evt) => {
            const { value } = evt.target;
            onFormDataChange({ ...userSetting, extraMargin: Number(value) });
          }}
          disabled={userSetting.isExtraMargin === false}
        />
      </p>
      <p>
        <label htmlFor="SaleTax">{'Sale tax'}</label>
        <input
          id="SaleTax"
          type={'number'}
          value={userSetting.saleTax}
          onChange={(evt) => {
            const { value } = evt.target;
            onFormDataChange({ ...userSetting, saleTax: Number(value) });
          }}
        />
      </p>
      <p>
        <label htmlFor="Currency">{'Currency'}</label>
        <input
          id="Currency"
          value={userSetting.currency}
          onChange={(evt) => {
            const { value } = evt.target;
            onFormDataChange({ ...userSetting, currency: value });
          }}
        />
      </p>
    </fieldset>
  )
}

export default FormData