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
		var user User
		err := json.NewDecoder(r.Body).Decode(&user)
		if err != nil {

			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}
		fmt.Println(user.Avatar, "user struct data")
     folderPath
		filename, err := saveImage(user.Avatar.Data, folderPath)
	if err != nil {
		fmt.Println("Error saving image:", err)
		return
	}
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
