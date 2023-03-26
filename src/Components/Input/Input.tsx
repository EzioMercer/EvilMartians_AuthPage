import React, {useState} from 'react';
import styles from './Input.module.scss';
import {Nullable} from '../../Helpers/Types/Nullable';

export type InputProps = {
	type: 'text' | 'email' | 'password',
	name: string,
	label: string,
	defaultValue?: Nullable<string>,
	required?: boolean
}

const Input = (props:InputProps) => {
	const [value, setValue] = useState(props.defaultValue ?? '');

	return (
		<label className={styles.input}>
			{props.label}
			<input
				type={props.type}
				name={props.name}
				required={props.required}
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
		</label>
	)
}

export default Input;
