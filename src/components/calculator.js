import {useState} from 'react';
import Button from './button';

const Calculator = () => {
    const [display, setDisplay] = useState('0');
    const [realValue, setRealValue] = useState(0);

    return ( 
    <div classname='container-md'>
        <div className='row'>
            <div className='col-sm'>
                <input type='text' name='display' value={display}/>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm'>
                <Button label='1' />
            </div>
            <div className='col-sm'>
                <Button label='2' />
            </div>
            <div className='col-sm'>
                <Button label='3' />
            </div>
        </div>
    </div> 
    );
}
 
export default Calculator;