package main

import (
	"fmt"
	"strings"
)

type Sidekicks interface {
	saysASaying() string
	isHuman() bool
}

type Wookiee struct {
	Name     string
	Species  string
	Fraction string
}

func (r *Wookiee) saysASaying() string {
	return "\"RAWRGWAWGGR!\""
}

func (r *Wookiee) isHuman() bool {
	return false
}

type Boy struct {
	Name string
	Age  int
}

func (r *Boy) saysASaying() string {
	return "\"Why I don't have a catchphrase?!\""
}

func (r *Boy) isHuman() bool {
	return true
}

func createInterface() {
	chewbacca := Wookiee{
		Name:     "Chewbacca",
		Species:  "Wookiee",
		Fraction: "Rebellion",
	}

	morty := Boy{
		Name: "Morty",
		Age:  14,
	}

	fmt.Println(chewbacca.Name, "is a tall", strings.ToLower(chewbacca.Species), "and Han Solo's proud sidekick.")
	outputInfo(&chewbacca)
	fmt.Println(morty.Name, "is a Rick's poor sidekick.")
	outputInfo(&morty)
}

func outputInfo(s Sidekicks) {
	fmt.Println("This sidekick says:", s.saysASaying())
	if s.isHuman() {
		fmt.Println("and is human.")
	} else {
		fmt.Println("and is not human.")
	}
	fmt.Println()
}
