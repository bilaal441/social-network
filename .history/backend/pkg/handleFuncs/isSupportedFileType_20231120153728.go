package handlefuncs

func isSupportedFileType(fileType string) bool {
	supportedTypes := map[string]bool{
		"jpeg": true,
		"png":  true,
		"igif":  true,
	}
	return supportedTypes[fileType]
}