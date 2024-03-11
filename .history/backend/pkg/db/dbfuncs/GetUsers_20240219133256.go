package dbfuncs

import (
	"database/sql"
	"log"
)

func Getusers() {
	rows, err := database.Query("SELECT UserId FROM Likes WHERE PostId=? AND Liked=1", PostId)
	if err == sql.ErrNoRows {
		return nil
	} else if err != nil {
		log.Fatal(err)
	}

}
