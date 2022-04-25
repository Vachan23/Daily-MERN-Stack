
class GFG
{

static class Node
{
	int data;
	Node next;
};

static Node removeDuplicates(Node head)
{
	
	Node to_free;
	
	if (head == null)
		return null;

	if (head.next != null)
	{
	
		if (head.data == head.next.data)
		{
		
			to_free = head.next;
			head.next = head.next.next;
			removeDuplicates(head);
		}
		
		
		else
		{
			removeDuplicates(head.next);
		}
	}
	return head;
}


static Node push(Node head_ref,
				int new_data)
{
	
	Node new_node = new Node();
	
	new_node.data = new_data;
		
	new_node.next = (head_ref);	
	
	(head_ref) = new_node;
	return head_ref;
}

static void printList(Node node)
{
	while (node != null)
	{
		System.out.print(" " + node.data);
		node = node.next;
	}
}


public static void main(String args[])
{

	Node head = null;
	
	
	head = push(head, 20);
	head = push(head, 13);
	head = push(head, 13);
	head = push(head, 11);
	head = push(head, 11);
	head = push(head, 11);									

	System.out.println("Linked list before" +
					" duplicate removal ");
	printList(head);


	head = removeDuplicates(head);

	System.out.println("\nLinked list after" +
					" duplicate removal ");	
	printList(head);			
}
}
