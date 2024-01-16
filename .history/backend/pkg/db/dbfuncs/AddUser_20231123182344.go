package dbfuncs

import (
	"time"

	"github.com/google/uuid"
	_ "github.com/mattn/go-sqlite3"
)

func AddUser(nickName, firstName, lastName, Email, profile, aboutMe, privacy, DOB string, Password []byte)(error) {
	id, err := uuid.NewRandom()
    if
	created := time.Now()
	statement, _ := database.Prepare("INSERT INTO Users VALUES (?,?,?,?,?,?,?,?,?,?,?)")



	statement.Exec(id, nickName, firstName, lastName, Email, Password, profile, aboutMe, privacy, DOB, created)
}
