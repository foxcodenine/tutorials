package common

// TemplateData is a shared type used by handlers and render packages.
type TemplateData struct {
	StringMap map[string]string
	IntMap    map[string]int
	FloatMap  map[string]float64
	DataMap   map[string]interface{}
	CSRFToken string
	Flash     string
	Warning   string
	Error     string
}
