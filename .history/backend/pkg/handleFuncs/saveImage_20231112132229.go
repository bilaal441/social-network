package handlefuncs

import (
	"encoding/base64"
	"os"
	"path/filepath"

	"github.com/google/uuid"
)

func saveImage(data string, folderPath string) (string, error) {
	// Generate a UUID for the filename
	uuidFilename := uuid.New().String()

	// Create the complete file path with a PNG extension
	filePath := filepath.Join(folderPath, uuidFilename+".png")

	// Decode the base64 data
	imageData, err := base64.StdEncoding.DecodeString(data)
	if err != nil {
		return "", err
	}

	// Write the image data to the file
	err = os.WriteFile(filePath, imageData, 0644)
	if err != nil {
		return "", err
	}

	return filePath, nil
}
