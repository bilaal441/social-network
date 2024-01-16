package handlefuncs

import (
	"encoding/base64"
	"fmt"
	"os"
	"path/filepath"

	"github.com/google/uuid"
)

func saveImage(data string, folderPath string) (string, error) {
	uuidFilename := uuid.New().String()
	filePath := filepath.Join(folderPath, uuidFilename+".png")
	imageData, err := base64.StdEncoding.DecodeString(data)
	if err != nil {
		fmt.Println("err line 22")
		return "", err
	}

	// Write the image data to the file
	err = os.WriteFile(filePath, imageData, 0644)
	if err != nil {
		return "", err
	}

	return filePath, nil
}
