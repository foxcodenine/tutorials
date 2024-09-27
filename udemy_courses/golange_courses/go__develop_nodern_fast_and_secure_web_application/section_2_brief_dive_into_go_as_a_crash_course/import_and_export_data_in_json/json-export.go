package importandexportdatainjson

import (
	"encoding/json"
	"fmt"
	"os"
)

type Person struct {
	Name   string `json:"name"`
	Age    int    `json:"age"`
	Gender string `json:"gender"`
}

func RunExport() {
	people := []Person{
		{"Peter", 44, "Male"},
		{"Lois", 43, "Female"},
	}

	file, err := os.Create("import_and_export_data_in_json/data.json")
	if err != nil {
		panic(err)
	}
	defer file.Close()

	encoder := json.NewEncoder(file)
	encoder.SetIndent("", "  ")
	if err := encoder.Encode(people); err != nil {
		panic(err)
	}

	fmt.Println("Data exported to data.json")
}
