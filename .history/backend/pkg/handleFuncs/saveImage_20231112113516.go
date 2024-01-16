package handlefuncs

import (
	"encoding/base64"
	"errors"
	"fmt"
	"image"
	"os"
	"path/filepath"
	"strings"

	"github.com/google/uuid"
)

func saveImage(data string, folderPath string) (string, error) {
	decoded, err := base64.StdEncoding.DecodeString(data)
	if err != nil {
		return "", err
	}

	img, _, err := image.Decode(strings.NewReader(data))
	if err != nil {
		return "", errors.New("unsupported image format")
	}

	fileType := "image/") // Convert to string
	if !isSupportedFileType(fileType) {
		return "", errors.New("unsupported file type")
	}

	err = os.MkdirAll(folderPath, os.ModePerm)
	if err != nil {
		return "", err
	}

	// Generate a unique filename using a UUID and the converted integer as a string
	filename := fmt.Sprintf("%s_%s.%s", uuid.New().String(), strings.ToLower(img.Bounds().Dx()), strings.ToLower(img.Bounds().Dy()))

	filePath := filepath.Join(folderPath, filename)
	err = os.WriteFile(filePath, decoded, 0644)
	if err != nil {
		return "", err
	}

	return filename, nil
}
