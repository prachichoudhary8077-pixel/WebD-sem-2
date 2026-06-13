public class BankDemo {

    public static void main(String[] args) {

        SavingsAccount sa =
                new SavingsAccount(101, "Alice", 10000);

        CurrentAccount ca =
                new CurrentAccount(201, "Bob", 20000);

        sa.deposit(2000);
        sa.displayDetails();
        sa.calculateInterest();

        System.out.println();

        ca.deposit(3000);
        ca.displayDetails();
        ca.calculateInterest();
    }
}