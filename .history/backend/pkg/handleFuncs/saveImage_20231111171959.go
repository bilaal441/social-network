package handlefuncs



func saveImage(data string, filename string) error {
	decoded, err := base64.StdEncoding.DecodeString(data)
	if err != nil {
		return err
	}

	err = ioutil.WriteFile(filename, decoded, 0644)
	if err != nil {
		return err
	}

	return nil
}