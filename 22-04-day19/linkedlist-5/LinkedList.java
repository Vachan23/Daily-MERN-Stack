
class Node {
	int data;
	Node next;
	Node(int d)
	{
		data = d;
		next = null;
	}
}

class LinkedList {
	Node head;
	public int GetNth(int index)
	{
		Node current = head;
		int count = 0;
		while (current != null)
		{
			if (count == index)
				return current.data;
			count++;
			current = current.next;
		}

		
		assert (false);
		return 0;
	}

	public void push(int new_data)
	{

		
		Node new_Node = new Node(new_data);

		
		new_Node.next = head;


		head = new_Node;
	}

	
	public static void main(String[] args)
	{

		LinkedList llist = new LinkedList();

		
		llist.push(1);
		llist.push(4);
		llist.push(1);
		llist.push(12);
		llist.push(1);


		System.out.println("Element at index 3 is "
						+ llist.GetNth(3));
	}
}
