package pointersanderrors

import "fmt"

type Stringer interface {
	String() string
}

// ---------------------------------------------------------------------

type Bitcoin int

func (b Bitcoin) String() string {
	return fmt.Sprintf("%d BTC", b)
}

// ---------------------------------------------------------------------

type Wallet struct {
	balance Bitcoin
}

func (w *Wallet) Deposit(amount Bitcoin) {

	w.balance = w.balance + amount
}

func (w *Wallet) Witdraw(amount Bitcoin) {
	w.balance = w.balance - amount
}

func (w *Wallet) Balance() Bitcoin {
	fmt.Printf("address of balance in Deposit is %p\n", &w.balance)
	return w.balance
}
