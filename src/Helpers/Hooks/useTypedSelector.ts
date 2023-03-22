import { TypedUseSelectorHook, useSelector } from 'react-redux'
import {RootState} from '../../Redux/store';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypedSelector;
