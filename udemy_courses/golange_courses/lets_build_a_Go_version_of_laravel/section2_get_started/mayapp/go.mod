module myapp

go 1.22.3

replace github.com/foxcodenine/celeritas => ../celeritas

require github.com/foxcodenine/celeritas v0.0.0-00010101000000-000000000000

require (
	github.com/go-chi/chi/v5 v5.0.12 // indirect
	github.com/joho/godotenv v1.5.1 // indirect
)
