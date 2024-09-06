import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JOptionPane;
import java.awt.FlowLayout;
import java.awt.event.MouseListener;

public class MyWindow {
    public static void main(String[] args) {
        // Create a new frame
        JFrame frame = new JFrame("My Window");
        
        // Set the layout to FlowLayout (or another layout of your choice)
        frame.setLayout(new FlowLayout());

        // Create a new button
        JButton button = new JButton("Click Me !!");

        // Add an action listener to the button
        button.addActionListener(e -> {
            System.out.println("Button clicked");
            JOptionPane.showMessageDialog(button, "Button was clicked", "Button Clicked", JOptionPane.INFORMATION_MESSAGE);
        });

        button.addMouseListener(e -> {
            System.out.println("Button mouse clicked");
            JOptionPane.showMessageDialog(button, "Button was clicked using mouse", "Button Clicked", JOptionPane.INFORMATION_MESSAGE);
        });
       

        // Add the button to the frame
        frame.add(button);

        // Set frame properties
        frame.setSize(300, 400);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}
