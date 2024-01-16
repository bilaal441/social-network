package handlefuncs

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"os"
	"strings"

	// "fmt"
	"net/http"

	"github.com/google/uuid"
)

func HandleNewUser(w http.ResponseWriter, r *http.Request) {
	Cors(&w, r)

	if r.Method == http.MethodPost {

		err := r.ParseMultipartForm(10 << 20) // 10 MB max file size
		if err != nil {
			http.Error(w, "Unable to parse form its too big", http.StatusBadRequest)
			return
		}
		// email := r.FormValue("email")
		// password := r.FormValue("password")
		// firstName := r.FormValue("firstname")
		// lastName := r.FormValue("lastname")
		// username := r.FormValue("username")
		// dob := r.FormValue("dob")

		file, header, err := r.FormFile("image")

		if err != nil {
			log.Println("image upload error --> ", err)
			http.Error(w, err.Error(), http.StatusBadRequest)

		}
		// generate new uuid for image name
		uniqueId := uuid.New()
		// remove "- from imageName"
		filename := strings.Replace(uniqueId.String(), "-", "", -1)
		// extract image extension from original file filename
		fileExt := strings.Split(header.Filename, ".")[1]
		// generate image from filename and extension
		image := fmt.Sprintf("%s.%s", filename, fileExt)

		// create a new file in the "uploads" folder
		dst, err := os.Create(fmt.Sprintf("uploads/%s", imageFilename))
		if err != nil {
			log.Println("unable to create file --> ", err)
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		defer dst.Close()

		// copy the uploaded file to the destination file
		if _, err := io.Copy(dst, file); err != nil {
			log.Println("unable to copy file --> ", err)
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		// fmt.Println(filename)
		// insert user into SQLite database
		// dbfuncs.AddUser(user.NickName, user.FirstName, user.LastName, user.Age, user.Gender, user.Email, HashPassord(user.Password))
		// return success response

		responseData := map[string]string{"message": "User created successfully"}
		response, err := json.Marshal(responseData)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		// Set the "Content-Type" header to "application/json"
		w.Header().Set("Content-Type", "application/json")
		// Write the JSON response to the HTTP response
		w.Write(response)

	} else {
		http.Error(w, `{"error": "405 Method Not Allowed"}`, http.StatusMethodNotAllowed)
	}
}
