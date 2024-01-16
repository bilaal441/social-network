package handlefuncs

func isSupportedFileType(fileType string) bool {
	supportedTypes := map[string]bool{
		"jpeg": true,
		"image/png":  true,
		"image/gif":  true,
	}
	return supportedTypes[fileType]
}