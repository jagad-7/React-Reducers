import './App.css';
import { ParentContext } from './Components/Context/ParentContext';
import { ArrayUseState } from './Components/Immutable/ArrayUseState';
import { ObjectUseState } from './Components/Immutable/ObjectUseState';
import { ParentFour } from './Components/Incorrect Optimization/ParentFour';
import { ParentThree } from './Components/Incorrect Optimization/ParentThree';
import { ChildOne } from './Components/Optimization/ChildOne';
import { GrandParent } from './Components/Optimization/GrandParent';
import { ParentOne } from './Components/Optimization/ParentOne';
import { ParentTwo } from './Components/Optimization/ParentTwo';
import { Parent } from './Components/Parent and Child/Parent';
import { UseRenducer } from './Components/UseRenducer/UseRenducer';
import { UseState } from './Components/UseState/UseState';

function App() {
  return (
    <div className="App">
    {/* <UseState /> */}
    {/* <UseRenducer /> */}
    {/* <ObjectUseState /> */}
    {/* <ArrayUseState /> */}
    {/* <Parent /> */}
    {/* <ParentOne>
      <ChildOne />
    </ParentOne> */}
    {/* <GrandParent /> */}
    {/* <ParentTwo /> */}
    {/* <ParentThree /> */}
    {/* <ParentFour /> */}
    <ParentContext />


    </div>
  );
}

export default App;
