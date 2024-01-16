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

	fileType := fmt.Sprintf("image/%s", strings.ToLower(getImageFormat(img))) // Convert to string
	if !isSupportedFileType(fileType) {
		return "", errors.New("unsupported file type")
	}

	err = os.MkdirAll(folderPath, os.ModePerm)
	if err != nil {
		return "", err
	}

	// Generate a unique filename using a UUID and the converted integers as strings
	filename := fmt.Sprintf("%s_%d_%d.%s", uuid.New().String(), img.Bounds().Dx(), img.Bounds().Dy(), strings.ToLower(fileType))

	filePath := filepath.Join(folderPath, filename)
	err = os.WriteFile(filePath, decoded, 0644)
	if err != nil {
		return "", err
	}

	return filename, nil
}



