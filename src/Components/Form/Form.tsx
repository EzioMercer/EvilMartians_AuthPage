import React, {FormEvent, MouseEventHandler} from 'react';
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

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();

		dispatch(changeLoadingState(true));

		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);
		const serializedFormData = serializeFormData(formData);

		await handleSubmit(serializedFormData)
	}

	return (
		<>
			{messageCode ? <Message messageCode={messageCode} removeHandler={removeErrorMessageHandler}/> : null}
			<form className={styles.form} onSubmit={onSubmit}>
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
				<Button type="submit" text={submitBtnText}/>
			</form>
		</>
	)
}

export default Form;
