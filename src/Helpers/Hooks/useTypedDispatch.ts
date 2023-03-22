import { useDispatch } from 'react-redux'
import {AppDispatch} from '../../Redux/store';

type DispatchFunc = () => AppDispatch;
const useTypedDispatch: DispatchFunc = useDispatch;

export default useTypedDispatch;
