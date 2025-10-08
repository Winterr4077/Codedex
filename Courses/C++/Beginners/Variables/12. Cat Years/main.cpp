#include <iostream>

int main() {
  std::cout << "Welcome to the Cat Years program! This only works for cats older than 2 years old.\n";
  
  double catAge;

  std::cout << "Enter your cat's age: ";
  std::cin >> catAge;

  double humanYears = (catAge - 2) * 4 + 24;

  std::cout << "Your cat is "<< humanYears << " years old in human years.";
}
