package handlefuncs

func isSupportedFileType(fileType string) bool {
	supportedTypes := map[string]bool{
		"jpeg": true,
		"png":  true,
		"gif":  true,
	}
	return supportedTypes[fileType]
}