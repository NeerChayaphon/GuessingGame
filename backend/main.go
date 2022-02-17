package main

import (
	"github.com/Guessing-Game-with-Golang/auth"
	"github.com/Guessing-Game-with-Golang/guess"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.GET("/login", auth.AccessToken("==signature=="))

	protected := r.Group("", auth.Protect([]byte("==signature==")))
	protected.GET("/guess", guess.GuessNumber)
	protected.GET("/showAnswer", guess.ShowAnswer) // use for checking the answer in the development process

	r.Run()
}