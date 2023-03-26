type SerializedFormData = {
	[key: string]: FormDataEntryValue
}

const serializeFormData = <T>(formData: FormData): T => {
	const serializedFormData = {} as SerializedFormData;

	for (const [key, value] of formData.entries()) {
		serializedFormData[key] = value;
	}

	return serializedFormData as T;
}

export default serializeFormData;
