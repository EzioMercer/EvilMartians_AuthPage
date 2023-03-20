export type SerializedFormData = {
	[key: string]: FormDataEntryValue
}

const serializeFormData = (formData: FormData) => {
	const serializedFormData = {} as SerializedFormData;

	for (const [key, value] of formData.entries()) {
		serializedFormData[key] = value;
	}

	return serializedFormData;
}

export default serializeFormData;
