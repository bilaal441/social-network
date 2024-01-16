package dbfuncs

func isSupportedFileType(fileType string) bool {
	supportedTypes := map[string]bool{
		"jpeg": true,
		"j"
		"png":  true,
		"gif":  true,
	}
	return supportedTypes[fileType]
}