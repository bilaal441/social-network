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
	uniqueId := uuid.New()
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

func min_commands_to_start(directions string) int {
	// Define the initial position and direction of the robot
	x, y, direction := 0, 0, 'N'

	// Define a dictionary to map the possible movements based on the current direction
	movements := map[rune][2]int{'N': {0, 1}, 'E': {1, 0}, 'S': {0, -1}, 'W': {-1, 0}}

	// Process each command in the input string
	for _, command := range directions {
		if command == 'F' {
			// Move the robot forward based on its current direction
			x += movements[direction][0]
			y += movements[direction][1]
		} else if command == 'L' {
			// Turn the robot 90 degrees to the left
			direction = map[rune]rune{'N': 'W', 'E': 'N', 'S': 'E', 'W': 'S'}[direction]
		} else if command == 'R' {
			// Turn the robot 90 degrees to the right
			direction = map[rune]rune{'N': 'E', 'E': 'S', 'S': 'W', 'W': 'N'}[direction]
		}
	}

	// Calculate the minimum number of commands to return to the starting point
	return abs(x) + abs(y)
}
