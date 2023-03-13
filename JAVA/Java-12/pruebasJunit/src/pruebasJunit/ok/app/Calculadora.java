package pruebasJunit.ok.app;

public class Calculadora {

	public int sumar(int n1, int n2) {
		// TODO Auto-generated method stub
		return (n1 + n2);
	}

	public int restar(int n1, int n2) {
		// TODO Auto-generated method stub
		return (n1 - n2);
	}

	public int multi(int n1, int n2) {
		// TODO Auto-generated method stub
		return (n1 * n2);
	}

	public int div(int n1, int n2) {
		// TODO Auto-generated method stub
		return (n1 / n2);
	}

	public double division(double d1, double d2) {
		return (d1 / d2);
	}

	public double divisionByZero(double v1, double v2) {
		if (v2 == 0) {
			throw new ArithmeticException("--> NO SE PUEDE DIVIDIR x CERO <--");
		}

		return (v1 / v2);

	}

}
