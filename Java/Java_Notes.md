# Java Notes

## POINTERS IN JAVA
❌ Java does NOT have explicit pointers like C/C++  
✅ Everything in Java (except primitives) is accessed by REFERENCE.  
✅ "References" behave like safe pointers, but memory is managed by JVM.

```java
// Example
int x = 10;
int y = x;     	// Copy of value
y = 20;
System.out.println(x); // 10 (unchanged)
 
// With Objects
class Box { int value; }
Box b1 = new Box(); b1.value = 10;
Box b2 = b1;   	// Reference (like pointer)
b2.value = 20;
System.out.println(b1.value); // 20 (both refer to same object)
```

---

## INTERFACES
- 100% abstract (until Java 7).
- From Java 8 → can have default + static methods.
- From Java 9 → private methods allowed.
- Supports Multiple Inheritance (unlike classes).

```java
interface Animal {
	void eat(); // abstract method
	default void sleep() { System.out.println("Sleeping..."); } // Java 8
}
 
class Dog implements Animal {
	public void eat() { System.out.println("Dog eats bone"); }
}
 
Animal d = new Dog();
d.eat();	// Dog eats bone
d.sleep();  // Sleeping...
```

---

## ABSTRACT CLASS
- Can have abstract + concrete methods.
- Can have constructors, fields, constants.
- Used when classes share behavior but not full implementation.
- Supports single inheritance only.

```java
abstract class Vehicle {
	abstract void drive(); // abstract
	void fuel() { System.out.println("Fueling..."); } // concrete
}
 
class Car extends Vehicle {
	void drive() { System.out.println("Car driving..."); }
}
 
Vehicle v = new Car();
v.drive(); // Car driving...
v.fuel();  // Fueling…
```

---

## LINKEDLIST (java.util)
- Doubly linked list implementation.
- Allows duplicate elements.
- Good for frequent insert/delete (not for random access).
- Implements List, Deque, Queue interfaces.

```java
import java.util.*;
 
LinkedList<String> list = new LinkedList<>();
 
// Add
list.add("A");
list.add("B");
list.addFirst("Start");
list.addLast("End");
 
// Access
System.out.println(list.get(1));	// B
System.out.println(list.getFirst()); // Start
System.out.println(list.getLast());  // End
 
// Remove
list.remove("B");
list.removeFirst();
list.removeLast();
 
// Iterate
for (String s : list) {
    System.out.println(s);
}
 
// As Queue
Queue<String> q = new LinkedList<>();
q.add("one");
q.add("two");
System.out.println(q.poll()); // one (removes head)
 
// As Deque
Deque<String> dq = new LinkedList<>();
dq.addFirst("front");
dq.addLast("back");
System.out.println(dq.removeLast()); // back
```
# Java Notes — Part 2

## QUICK INTERVIEW NOTES
---
- **POINTER**: Java has references, not raw pointers (safe, managed by JVM).  
- **INTERFACE**: Contract → multiple inheritance of type.  
- **ABSTRACT CLASS**: Base class with partial implementation.  
- **LINKEDLIST**: Doubly-linked, fast insert/delete, slow random access.  

---

## JAVA STREAMS & COLLECTORS - CHEATSHEET

### 1. Import
```java
import java.util.*;
import java.util.stream.*;
import static java.util.stream.Collectors.*;
```

### 2. Basic Stream Creation
```java
List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);

// Create stream
Stream<Integer> s1 = nums.stream();
Stream<String> s2 = Stream.of("a", "b", "c");
Stream<Double> s3 = Stream.generate(Math::random).limit(5); // infinite stream
```

### 3. Common Intermediate Operations (lazy)
```java
nums.stream()
	.filter(n -> n % 2 == 0)    	// filtering
	.map(n -> n * n)            	// mapping
	.sorted()                   	// sorting natural order
	.distinct()                 	// remove duplicates
	.limit(3)                   	// take first 3
	.skip(2)                    	// skip first 2
    .forEach(System.out::println);  // terminal op
```

### 4. Terminal Operations
```java
long count = nums.stream().count();     
Optional<Integer> min = nums.stream().min(Integer::compareTo);
Optional<Integer> max = nums.stream().max(Integer::compareTo);
boolean anyEven = nums.stream().anyMatch(n -> n % 2 == 0);
boolean allEven = nums.stream().allMatch(n -> n % 2 == 0);
boolean noneEven = nums.stream().noneMatch(n -> n % 2 == 0);
```

### 5. Collectors (java.util.stream.Collectors)
```java
List<Integer> evenList = nums.stream()
                             .filter(n -> n % 2 == 0)
                             .collect(toList());

Set<Integer> evenSet = nums.stream()
                           .filter(n -> n % 2 == 0)
                           .collect(toSet());

Deque<Integer> deque = nums.stream().collect(toCollection(ArrayDeque::new));
```

#### Joining
```java
List<String> names = Arrays.asList("Ram", "Shyam", "Sita");
String joined = names.stream().collect(joining(", ", "[", "]"));
// Output: [Ram, Shyam, Sita]
```

#### Counting
```java
long total = names.stream().collect(counting());
```

#### Summing / Averaging
```java
int sum = nums.stream().collect(summingInt(Integer::intValue));
double avg = nums.stream().collect(averagingInt(Integer::intValue));
```

#### Grouping
```java
Map<Integer, List<String>> byLength = names.stream()
    .collect(groupingBy(String::length));
// {3=[Ram], 5=[Shyam], 4=[Sita]}
```

#### Grouping with counting
```java
Map<Integer, Long> byLengthCount = names.stream()
    .collect(groupingBy(String::length, counting()));
```

#### Partitioning (true/false map)
```java
Map<Boolean, List<Integer>> partitioned = nums.stream()
    .collect(partitioningBy(n -> n % 2 == 0));
// {true=[2,4], false=[1,3,5]}
```

#### Mapping inside collect
```java
Set<Integer> lengths = names.stream()
    .collect(mapping(String::length, toSet()));
// Output: [3,4,5]
```

#### Reducing (custom aggregation)
```java
int product = nums.stream()
    .collect(reducing(1, (a, b) -> a * b));
// 1*2*3*4*5 = 120
```

### 6. Parallel Streams
```java
List<Integer> bigList = IntStream.rangeClosed(1, 1000).boxed().toList();
int sumParallel = bigList.parallelStream().reduce(0, Integer::sum);
```

### 7. Try-With-Resources for Streams
```java
try (Stream<String> lines = Files.lines(Paths.get("data.txt"))) {
    lines.forEach(System.out::println);
} catch (IOException e) {
    e.printStackTrace();
}
```

### 8. Best Practices
- Use `parallelStream()` only if operations are independent + CPU intensive  
- Avoid mutating external variables inside streams  
- Prefer collectors for aggregation instead of manual loops  
- Use method references (`Class::method`) for cleaner code  

---

## STRING POOL IN JAVA

### 1. What is String Pool?
- A special memory region inside the Heap (part of Method Area/MetaSpace).
- Stores string literals to save memory.
- Ensures reusability of immutable strings.

```java
String s1 = "Hello";  // stored in String Pool
String s2 = "Hello";  // reuses same object (no new object created)
System.out.println(s1 == s2); // true -> both point to same pool object
```

### 2. new Keyword vs Literal
```java
String s3 = new String("Hello"); // creates object in HEAP
String s4 = "Hello";             // from String Pool

System.out.println(s3 == s4); // false -> different references
System.out.println(s3.equals(s4)); // true -> values are equal
```

### 3. intern() Method
```java
String s5 = new String("World");  // Heap
String s6 = s5.intern();          // moves/points to String Pool
String s7 = "World";              // from String Pool

System.out.println(s5 == s6); // false -> Heap vs Pool
System.out.println(s6 == s7); // true  -> both in Pool
```

### 4. Memory Optimization
- String Pool reduces duplicate string objects
- Since Strings are immutable, pooling is safe

```java
String a = "Java";
String b = "Java";
String c = "J" + "ava"; // compile-time optimization → same pool object

System.out.println(a == b); // true
System.out.println(a == c); // true
```

### 5. Important Points
- Pool only works for literals, not `new String()`
- `intern()` can be used for manual pooling
- Good for memory efficiency in large applications

---

## JAVA MEMORY ALLOCATION

### Memory Areas
- Stack Memory  
- Heap Memory  
- Method Area / MetaSpace  
- PC Register & Native Method Stack  

### 1. Stack Memory
- Stores local variables & method calls  
- Each thread has its own stack  
- Follows LIFO (Last In, First Out)  

```java
void demoStack() {
	int x = 10;
	String name = "Sam"; // reference in stack, object may be in heap
}
```

### 2. Heap Memory
- Stores objects & instance variables  
- Shared by all threads  
- Garbage Collector (GC) manages memory  

```java
class Person {
	String name;
	int age;
}

Person p = new Person(); // object in heap, 'p' reference in stack
```

### 3. Method Area (MetaSpace in Java 8+)
- Stores class metadata, static variables, method info, constant pool  
- Shared by all threads  

```java
static int counter = 0; // stored in method area
```

### 4. Garbage Collection
```java
Person obj = new Person();
obj = null; // now eligible for GC
```

---

## PRIMITIVES vs WRAPPER CLASSES

### 1. Definition
- **Primitive Data Types**: Basic types (int, char, boolean, etc.) — store values directly.  
- **Wrapper Classes**: Objects that wrap primitives (Integer, Character, Boolean, etc.).  

```java
int a = 10;
Integer b = Integer.valueOf(10);
```

### 2. Storage
- Primitive: stored in stack memory directly.  
- Wrapper: reference stored in stack, object in heap.  

```java
int x = 5;
Integer y = 5;
```

### 3. Default Values
- Primitive: default values exist.  
- Wrapper: default is null.  

### 4. Nullability
- Primitive: cannot be null.  
- Wrapper: can be null.  

```java
Integer obj = null; // valid
// int primitive = null; ❌ compilation error
```

### 5. Methods Support
- Wrapper classes provide methods; primitives do not.

```java
Integer num = 100;
num.toString();
Integer.parseInt("123");
```

### 6. Collections Support
- Collections only accept objects, not primitives.  
- Wrappers are used in Collections.

```java
ArrayList<Integer> list = new ArrayList<>();
list.add(10); // auto-boxes int -> Integer
```

### 7. Autoboxing & Unboxing
```java
int m = 50;
Integer n = m; // autoboxing
int k = n;     // unboxing
```

# Java Notes - Part 3

---
## 8. Performance
Primitive: faster, less memory.  
Wrapper: slower (object overhead), more memory usage.

---
## String Methods Cheat Sheet

```java
public class StringMethodsCheatSheet {
    public static void main(String[] args) {
        String s = " Hello Java ";
        String s2 = "hello java";
        String s3 = "World";

        // Length & Character
        s.length();
        s.charAt(1);
        s.toCharArray();

        // Comparison
        s.equals(s2);
        s.trim().equalsIgnoreCase(s2);
        s.compareTo(s2);
        s.compareToIgnoreCase(s2);

        // Searching
        s.contains("Java");
        s.indexOf("o");
        s.lastIndexOf("o");
        s.startsWith(" He");
        s.endsWith("va ");

        // Case Conversion
        s.toLowerCase();
        s.toUpperCase();

        // Substring
        s.substring(1);
        s.substring(1, 5);

        // Splitting & Joining
        s.trim().split(" ");
        String.join("-", "one", "two", "three");

        // Trimming & Stripping
        s.trim();
        s.strip();

        // Replace
        s.replace('J', 'K');
        s.replace("Java", "World");
        s.replaceAll(" ", "-");
        s.replaceFirst(" ", "*");

        // Concatenation
        s.trim().concat(" ").concat(s3);

        // Empty / Blank
        "".isEmpty();
        "   ".isBlank();

        // Formatting
        String.format("Name: %s, Age: %d", "Somnath", 25);

        // Conversion
        String.valueOf(100);
        s.matches(".*Java.*");

        // String Pool
        String x = new String("pool").intern();
        String y = "pool";
        (x == y);

        // Repeat
        "ha".repeat(3);

        // Bytes & Subsequence
        s.getBytes();
        s.subSequence(1, 5);

        // Region Match
        s.regionMatches(1, "Hello", 0, 3);
    }
}
```

---
## Bit Manipulation Concepts

### Basic Bitwise Operators
| Operator | Meaning |
|-----------|----------|
| `&` | AND – keeps 1 only if both bits are 1 |
| `|` | OR – keeps 1 if at least one bit is 1 |
| `^` | XOR – keeps 1 if bits are different |
| `~` | NOT – flips all bits |
| `<<` | Left shift – multiply by 2 |
| `>>` | Right shift – divide by 2 |

**Example:**
```java
int x = 5;  // 0101
int y = 3;  // 0011
System.out.println(x & y);  // 1
System.out.println(x | y);  // 7
System.out.println(x ^ y);  // 6
System.out.println(~x);     // -6
System.out.println(x << 1); // 10
System.out.println(x >> 1); // 2
```

### Common Bit Tricks
- **Check Odd/Even:** `(n & 1) == 0`
- **Get ith Bit:** `(n >> i) & 1`
- **Set ith Bit:** `n | (1 << i)`
- **Clear ith Bit:** `n & ~(1 << i)`
- **Toggle ith Bit:** `n ^ (1 << i)`

### Count Set Bits (Brian Kernighan’s Algorithm)
```java
int countSetBits(int n) {
    int count = 0;
    while (n > 0) {
        n &= (n - 1);
        count++;
    }
    return count;
}
```

### Power of 2 Check
```java
boolean isPowerOf2(int n) {
    return (n > 0) && ((n & (n - 1)) == 0);
}
```

### XOR Properties
```
a ^ a = 0
a ^ 0 = a
a ^ b ^ a = b
```

### Lowest Set Bit
```java
int lowestSetBit = n & -n;
n = n & (n - 1);
```

### Gray Code
```java
int grayCode(int n) {
    return n ^ (n >> 1);
}
```

---
## Java Set Methods

```java
HashSet<Integer> set = new HashSet<>();
set.add(10);
set.add(20);
set.remove(10);
set.contains(11);
set.size();
set.isEmpty();
set.clear();

for (Integer x : set) System.out.println(x);
Iterator<Integer> it = set.iterator();
while (it.hasNext()) System.out.println(it.next());
```

**Bulk Operations:**
```java
a.addAll(b);     // union
a.retainAll(b);  // intersection
a.removeAll(b);  // difference
```

**Key Points:**
- HashSet → No duplicates, unordered.
- Backed by HashMap → O(1) average operations.
- Allows one `null` value.

---
## Deque (ArrayDeque)

```java
Deque<Integer> dq = new ArrayDeque<>();
dq.addFirst(x);
dq.addLast(x);
dq.removeFirst();
dq.removeLast();
dq.peekFirst();
dq.peekLast();
```

---
## PriorityQueue

**Min-Heap:**
```java
PriorityQueue<Integer> pq = new PriorityQueue<>();
```
**Max-Heap:**
```java
PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> b - a);
```

**Common Methods:**
| Method | Description |
|--------|-------------|
| add / offer | Insert element |
| poll | Remove and return top |
| peek | Return top without removing |
| size | Count elements |
| clear | Remove all elements |

---
## HashMap Methods

**Basic Operations:**
```java
map.put(key, value);
map.get(key);
map.remove(key);
map.containsKey(key);
map.containsValue(value);
map.size();
map.clear();
```

**Views:**
```java
map.keySet();
map.values();
map.entrySet();
```

**Java 8+ Enhancements:**
```java
map.getOrDefault(key, defaultValue);
map.putIfAbsent(key, value);
map.replace(key, value);
map.computeIfAbsent(key, k -> value);
map.merge(key, value, (v1, v2) -> v1 + v2);
```

---
**Key Takeaways:**
- HashMap → Key-value store, O(1) average.
- Null keys allowed (only one), null values allowed.
- Not synchronized by default.
