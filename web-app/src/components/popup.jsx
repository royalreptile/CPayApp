
import Button from './button';
import { useDispatch, useSelector } from 'react-redux';
import { connectPopupState, toggle } from '../features/popup/popupSlice';


const Popup = ({ info }) => {
    const dispatch = useDispatch()
    const show = useSelector(connectPopupState);
    function hide() {
        dispatch(toggle())
    }
    let classNames = show ? "popup-container" : 'hide'
    return (
        <div className={classNames}>
            <div className="popup">
                <span>{info}</span>
                <Button lable={ 'Ok'} click={hide}/>
            </div>
        </div>
    );
}

export default Popup;
