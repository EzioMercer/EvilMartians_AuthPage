import React, {MouseEventHandler, useRef} from 'react';
import styles from './Form.module.scss';
import Message from '../Message/Message';
import Input, {InputProps} from '../Input/Input';
import Button from '../Button/Button';
import {changeLoadingState} from '../../Redux/Slices/LoadingSlice';
import serializeFormData from '../../Helpers/Utils/SerializeFormData';
import useTypedDispatch from '../../Helpers/Hooks/useTypedDispatch';

const Form = ({
	inputs,
	submitBtnText,
	messageCode,
	handleSubmit,
	removeErrorMessageHandler
}: {
	inputs: InputProps[],
	submitBtnText: string,
	messageCode: string
	handleSubmit: (submitData: any) => Promise<void>,
	removeErrorMessageHandler: MouseEventHandler<HTMLButtonElement>,
}) => {
	const dispatch = useTypedDispatch();
	const formRef = useRef(null);

	const onSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();

		dispatch(changeLoadingState(true));

		const formData = new FormData(formRef.current! as HTMLFormElement);
		const serializedFormData = serializeFormData(formData);

		await handleSubmit(serializedFormData)
	}

	return (
		<>
			{messageCode ? <Message messageCode={messageCode} removeHandler={removeErrorMessageHandler}/> : null}
			<form ref={formRef} className={styles.form}>
				<p>* Required fields</p>
				{
					inputs.map(input =>
						<Input
							key={Object.values(input).join('')}
							type={input.type}
							name={input.name}
							label={input.label}
							defaultValue={input.defaultValue}
							required={input.required}
						/>
					)
				}
				<Button type="submit" text={submitBtnText} handleClick={onSubmit}/>
			</form>
		</>
	)
}

export default Form;
