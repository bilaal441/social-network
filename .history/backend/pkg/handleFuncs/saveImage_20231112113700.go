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

func getImageFormat(img image.Image) string {
	switch img.(type) {
	case *image.RGBA:
		return "png"
	case *image.NRGBA:
		return "png"
	case *image.Gray:
		return "png"
	case *image.Gray16:
		return "png"
	}
	return "jpg" // Default to jpg if the format is not detected
}

func main() {
	// Sample data
	emailValue := "test@example.com"
	passwordValue := "password123"
	firstNameValue := "John"
	lastNameValue := "Doe"
	usernameValue := "johndoe"
	dateOfBirthValue := "1990-01-01"
	avatarValue := "base64encodedimagedata"

	// Create a User instance
	user := User{
		Email:      emailValue,
		NickName:   usernameValue,
		FirstName:  firstNameValue,
		LastName:   lastNameValue,
		Age:        "30", // You need to set the correct age value
		Gender:     "Male", // You need to set the correct gender value
		Password:   passwordValue,
		Id:         uuid.New(),
		Created_at: time.Now(),
		Aboutme:    "Some information about the user",
		Avatar: &Image{
			Data: avatarValue,
		},
	}

	// Set the folder path to save the image
	folderPath := "avatars" // Folder for all images

	// Save the image and get the generated filename
	filename, err := saveImage(user.Avatar.Data, folderPath)
	if err != nil {
		fmt.Println("Error saving image:", err)
		return
	}

	fmt.Println("Image saved successfully with filename:", filename)
}
Now, the getImageFormat function is used to determine the image format, and the fileType is constructed based on the detected format. I appreciate your understanding, and I hope this resolves the issue.






