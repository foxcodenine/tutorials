package importandexportdatainjson

import (
	"encoding/json"
	"fmt"
	"os"
)

// type Person struct {
// 	Name   string `json:"name"`
// 	Age    int    `json:"age"`
// 	Gender string `json:"gender"`
// }

func RunImport() {
	file, err := os.Open("import_and_export_data_in_json/data.json")
	if err != nil {
		panic(err)
	}
	defer file.Close()

	decoder := json.NewDecoder(file)
	var people []Person
	if err := decoder.Decode(&people); err != nil {
		panic(err)
	}

	fmt.Println(people)
}
