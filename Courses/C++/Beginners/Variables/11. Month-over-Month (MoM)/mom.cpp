#include <iostream>

int main() {
  double month1;
  double month2;

  std::cout << "Enter the number of a month (0-12): ";
  std::cin >> month1;

  std::cout << "Enter the number of a month (0-12):  ";
  std::cin >> month2;

  double monthOverMonth = (month2-month1) / month1 * 100;
  std::cout << monthOverMonth;
}
