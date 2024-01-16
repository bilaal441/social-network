package handlefuncs

import (
	"encoding/json"
	"fmt"

	// "fmt"
	"net/http"
)

func HandleNewUser(w http.ResponseWriter, r *http.Request) {
	Cors(&w, r)

	if r.Method == http.MethodPost {

		err := r.ParseMultipartForm(10 << 20) // 10 MB max file size
		if err != nil {
			http.Error(w, "Unable to parse form", http.StatusBadRequest)
			return
		}
		// email := r.FormValue("email")
		// password := r.FormValue("password")
		// firstName := r.FormValue("firstname")
		// lastName := r.FormValue("lastname")
		// username := r.FormValue("username")
		// dob := r.FormValue("dob")

		// Access file data
		file, _, err := r.FormFile("image")
		if err != nil {
			fmt.Println(r.fo)
			http.Error(w, "Unable to retrieve image file", http.StatusBadRequest)
			return
		}

		fmt.Println(file, err)
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
