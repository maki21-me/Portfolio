/**
 * @(#)Container.java
 *
 *
 * @author
 * @version 1.00 2025/1/10
 */


public class Container<T> {
   private T obj;
   public void add(T obj) {
   	 this.obj=obj;
   }
   public T getObj() {
   	  return obj;
   }
}

class TestGenerics {
	public static <E> void printArray(E[] inputArray){
		for(E element: inputArray) {
			System.out.print(element+" , ");
		}
		System.out.println();
	}

	public static void main(String[] args) {
		Integer[] integerArray={10,20,30,40,50,60};
		Double[] doubleArray={25.6,56.3,99.12,100.10,0.5};
		Character[] characterArray={'S','O','F','T','W','A','R','E'};
		System.out.print("List of integer array:");
		printArray(integerArray);
		System.out.print("List of double array:");
		printArray(doubleArray);
		System.out.print("List of character array:");
		printArray(characterArray);


		Container<Integer> intObj = new Container<>();
		Container<String> strObj = new Container<>();

		intObj.add(11);
		strObj.add("Object-oriented Programming");
		System.out.println("Integer= "+intObj.getObj());
	    System.out.println("String= "+strObj.getObj());
	}
}