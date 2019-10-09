import React from 'react';
import CoopButton from './coopButton.js';
import SoloButton from './soloButton.js';
class ChooseMode extends React.Component {
  render() {
    return (
      <div id="chooseModeContainer">
        <SoloButton/>
        <CoopButton/>
      </div>
    );
  }
}
export default ChooseMode;
