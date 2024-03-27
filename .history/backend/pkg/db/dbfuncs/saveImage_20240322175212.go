package dbfuncs

import (
	"errors"
	"fmt"
	"io"
	"log"
	"mime/multipart"
	"os"
	"strings"

	"github.com/google/uuid"
)

func SaveImage(file multipart.File, header *multipart.FileHeader) (string, error) {
	// generate new uuid for image name
	func ReturnToStartingPoint(directions string) int {
		x, y := 0, 0
		rotation := 0

		for _, command := range directions {
			switch command {
			case 'F':
				switch rotation {
				case 0:
					y++
				case 90:
					x++
				case 180:
					y--
				case 270:
					x--
				}
			case 'L':
				rotation = (rotation + 270) % 360
			case 'R':
				rotation = (rotation + 90) % 360
			}
		}

		return (4 - rotation/90) % 4
	}
	// remove "- from imageName"
	filename := strings.Replace(uniqueId.String(), "-", "", -1)
	// extract image extension from original file filename
	fileExt := strings.Split(header.Filename, ".")[len(strings.Split(header.Filename, "."))-1]
	supported := isSupportedFileType(fileExt)

	if !supported {
		// rereturn "",error message to the user that this type of file is not supported
		return "", errors.New("this file type  is not supported")
	}

	// generate image from filename and extension
	image := fmt.Sprintf("%s.%s", filename, fileExt)
	// create a new file in the "uploads" folder
	dst, err := os.Create(fmt.Sprintf("pkg/db/images/%s", image))
	if err != nil {
		log.Println("unable to create file --> ", err)
		// http.Error(w, err.Error(), http.StatusInternalServerError)
		return "", err
	}
	defer dst.Close()

	if _, err := io.Copy(dst, file); err != nil {
		// http.Error(w, err.Error(), http.StatusInternalServerError)
		return "", err
	}

	return image, nil
}
