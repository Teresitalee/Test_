import React from 'react-dom'
import './scss/style.scss';
import Header from './components/Header';
import Empty from './components/Empty';
import Dropdown from './components/Dropdown';
import Stepper from './components/Stepper';
import styled from 'styled-components';
import {useStepper} from './context';
import Footer from './components/Footer';

function App() {
  const {incrementCurrentStep, decrementCurrentStep} = useStepper();

  return (
    <div className="App">
    <Header />
    <div className="container">
      <div className='info-dates'>
        <h2>Necesitamos un poco más de datos para la contratación</h2>
        <p>¡Sabemos que son muchos datos! Pero es importante para ofrecerte el mejor servicio.</p>
      </div>
      <div className="box-stepper">
            <Stepper>
                <Stepper.Steps>
                    <Stepper.Step id="first" name="1. Validación identidad">
                        <StepBody>
                           <Empty />
                            <div className='btns'>
                                <Button onClick={incrementCurrentStep} id="btn2" >Continuar</Button>
                            </div>
                        </StepBody>
                    </Stepper.Step>
                    <Stepper.Step id="second" name="2. Datos necesarios">
                        <StepBody>
                            <Dropdown />
                            <div className='btns'>
                                <Button onClick={decrementCurrentStep} id="btn1"><i class="fa-thin fa-less-than icono"></i>Volver</Button>
                                <Button onClick={incrementCurrentStep} id="btn2">continuar</Button>
                            </div>
                        </StepBody>
                    </Stepper.Step>
                    <Stepper.Step id="third" name="3. Firma de contratos">
                        <StepBody>
                        <Empty />
                            <div className='btns'>
                                <Button onClick={decrementCurrentStep} id="btn1"><i class="fa-thin fa-less-than icono"></i>Volver</Button>
                                <Button onClick={incrementCurrentStep} id="btn2">continuar</Button>
                            </div>
                        </StepBody>
                    </Stepper.Step>
                </Stepper.Steps>
            </Stepper></div>
    </div>
    <Footer />
    </div>
  );
}

const StepBody = styled.div`
  text-align:center;
`

const Button = styled.button`
  margin:0 20px;
  cursor:pointer;
  outline:none;
  background:#transparent;
  border:1px solid #000;
  padding:6px 12px;
`

export default App;

// ReactDOM.render( /*#__PURE__*/React.createElement(Dropdown, null), document.getElementById('app'));