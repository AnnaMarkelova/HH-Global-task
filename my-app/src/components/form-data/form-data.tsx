import { UserSetting } from "../../types/user-setting-type";

type FormDataProps = {
  userSetting: UserSetting;
  onFormDataChange: (formData: UserSetting) => void;
  onAddButtonClick: () => void;
  onClearButtonClick: () => void;
  onPrintButtonClick: () => void;
}

const FormData: React.FunctionComponent<FormDataProps> = ({ userSetting, onFormDataChange, onAddButtonClick, onClearButtonClick, onPrintButtonClick }) => {

  return (
    <fieldset>
      <p>
        <label htmlFor="Margin">{'Margin (rate)'}</label>
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
      <button
        onClick={() => onAddButtonClick()}
      >
        Add
      </button>
      <button
        onClick={() => onClearButtonClick()}
      >
        Clear
      </button>
      <button
        onClick={() => onPrintButtonClick()}
      >
        Print
      </button>
    </fieldset>
  )
}

export default FormData