package main

import (
	"context"
)

// App struct
type Auth struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewAuth() *Auth {
	return &Auth{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *Auth) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *Auth) Login() error {
	return nil
}

func (a *Auth) Register() error {
	return nil
}

func (a *Auth) IsLoggedIn() bool {
	return false
}
