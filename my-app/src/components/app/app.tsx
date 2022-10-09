import React, { useState } from 'react';
import { Settings, SETTINGS_DEFAULT, } from '../../types/settings';
import FormSettings from '../form-settings/form-settings';
import FormPrint from '../form-print/form-print';
import { Job } from '../../types/job';
import FormJob from '../form-job/form-job';

const App: React.FunctionComponent = () => {

  const [job, setJob] = useState<Job>({
    isExtraMargin: false,
    items: []
  });
  const [settings, setSettings] = useState<Settings>(SETTINGS_DEFAULT);

  return (
    <>
      <main className='main wrapper'>
        <h1 className='title'>Cost calculator</h1>
        <FormSettings
          settings={settings}
          setSetting={setSettings}
        />
        <div className='data-block wrapper'>
          <FormJob
            job={job}
            setJob={setJob}
          />
          <FormPrint
            job={job}
            settings={settings}
          />
        </div>
      </main>
    </>
  );
}

export default App;

