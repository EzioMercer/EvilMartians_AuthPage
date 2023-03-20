import React, {useState} from 'react';
import styles from './Input.module.scss';

const Input = ({
	label,
	type,
	name,
	required
}:{
	label: string,
	type: string,
	name: string,
	required?: boolean
}) => {
	const [value, setValue] = useState('');

	return (
		<label className={styles['input-label']}>
			{label}
			<input type={type} name={name} required={required} value={value} onChange={e => setValue(e.target.value)}/>
		</label>
	)
}

export default Input;
