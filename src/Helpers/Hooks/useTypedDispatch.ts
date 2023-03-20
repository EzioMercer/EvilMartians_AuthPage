import { useDispatch } from 'react-redux'
import {AppDispatch} from '../../Redux/store';

type DispatchFunc = () => AppDispatch
export const useTypedDispatch: DispatchFunc = useDispatch
