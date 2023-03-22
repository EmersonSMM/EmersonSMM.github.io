import java.util.Scanner;

public class Main {
        public static void main(String[] args) {

            Scanner scanner = new Scanner(System.in);

            System.out.println("Ingrese su peso en kilogramos: ");
            double peso = scanner.nextDouble();

            System.out.println("Ingrese su altura en metros: ");
            double altura = scanner.nextDouble();

            double imc = peso / (altura * altura);

            System.out.println("Su índice de masa corporal (IMC) es: " + imc);

            if (imc < 18.5) {
                System.out.println("Estás bajo de peso");
            } else if (imc >= 18.5 && imc < 25) {
                System.out.println("Tu peso es normal");
            } else if (imc >= 25 && imc < 30) {
                System.out.println("Tienes sobrepeso");
            } else {
                System.out.println("Tienes obesidad");
            }
        }
    }

